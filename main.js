"use strict";
const express = require('express');
require('express-async-errors');
const nocache = require('nocache');

const helmet = require('helmet');
import errorHandler from './server/middlewares/errorHandler';
import languageHandler from './server/middlewares/languageHandler';
import currencyHandler from './server/middlewares/currencyHandler';
import statisticsHandler from './server/middlewares/statisticsHandler';
import apiProxyHandler from './server/middlewares/apiProxyHandler';
import lowercaseUrlHandler from './server/middlewares/lowercaseUrlHandler';
import geoIPHandler from './server/middlewares/geoIPHandler';
import onepayIPNService from './server/services/onePayIPNService';

const app = express(),
    path = require('path'),
    config = require(__dirname + '/config'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

app.use(helmet());

//app properties setting
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, (config.clientPath && config.clientPath === '/dist' ? '/dist/server-views' : '/server/views')));
app.set('views', path.join(__dirname, '/server/views'));
app.set('view cache', false);

app.use(express.static(path.join(__dirname, (config.clientPath || '/public'))));

global.__base = __dirname;

app.use('/health-check', require('./server/controllers/healthCheckController'));

app.use('/payment/onepay/ipn', onepayIPNService.executeIPNRequest);

app.use(cookieParser());

require('./server/extensions/stringExtensions');
require('./server/extensions/numberExtensions');
require('./server/extensions/appExtensions')(app);

const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const sessionConfig = {
    store: new RedisStore(config.redis),
    secret: 'Fayfay ROCKS!!',
    cookie: {
        httpOnly: true
    },
    proxy: true,  // Trust the reverse proxy when setting secure cookies (via the "X-Forwarded-Proto" header)
    resave: false,
    saveUninitialized: false
};

if (process.env.NODE_ENV === 'production') {
    // app.set('trust proxy', 1);  // trust first proxy
    sessionConfig.cookie.secure = true;  // serve secure cookies
}
app.use(session(sessionConfig));

const flash = require('express-flash-2');
app.use(flash());

const useragent = require('express-useragent');
app.use(useragent.express());

app.use(lowercaseUrlHandler);
app.use(geoIPHandler);

app.use(languageHandler);
app.use(currencyHandler);

app.use('/api', apiProxyHandler);
app.use('/public', apiProxyHandler);

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(statisticsHandler);

app.use(nocache());

//routes setting
// app.use('/test', require('./server/controllers/testController'));
app.use(require('./server/controllers/homeController'));
app.use(require('./server/controllers/activityController'));
app.use(require('./server/controllers/cityController'));
app.use(require('./server/controllers/paymentController'));
app.use(require('./server/controllers/cartController'));
app.use(require('./server/controllers/accountController'));
app.use(require('./server/controllers/searchController'));
app.use(require('./server/controllers/helpController'));
app.use(require('./server/controllers/contactUsController'));
app.use(require('./server/controllers/voucherController'));
app.use(require('./server/controllers/termsController'));
app.use(require('./server/controllers/pressController'));
app.use(require('./server/controllers/joinUsController'));
app.use(require('./server/controllers/partnerController'));
app.use(require('./server/controllers/aboutController'));
app.use(require('./server/controllers/travelPlanningController'));
app.use(require('./server/controllers/campaignController'));
app.use(require('./server/controllers/bookingController'));
app.use(require('./server/controllers/faySimController'));
app.use(require('./server/controllers/visaController'));
app.use(require('./server/controllers/f1Controller'));


app.use(errorHandler);

app.get('*', function (req, res) {
    res.status(404);
    res.render('error');
});

module.exports = app;
