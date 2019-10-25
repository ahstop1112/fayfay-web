import { formatMoney, formatDate } from '../../client/js/utils/helpers';
import Constants from 'fayfayConstants';
const config = require('../../config');
const moment = require('moment');

module.exports = function appExtensions(app) {
    app.locals.CLOUDINARY_IMAGE_URL_PREFIX = Constants.CLOUDINARY_IMAGE_URL;

    app.locals.TRAVEL_WEB_URL = config.fayfay.travelWebUrl;
    app.locals.PROPERTY_WEB_URL = config.fayfay.propertyWebUrl;

    app.locals.GOOGLE_ANALYTICS_KEY = config.google.analytics;
    app.locals.GOOGLE_TAG_MANAGER_KEY = config.google.tagManager;

    app.locals.GOOGLE_API_KEY_TRAVEL = config.google.apiKeyTravel;
    app.locals.GOOGLE_ANALYTICS_KEY_TRAVEL = config.google.analyticsTravel;
    app.locals.GOOGLE_OPTIMIZE_KEY_TRAVEL = config.google.optimizeTravel;
    app.locals.GOOGLE_TAG_MANAGER_KEY_TRAVEL = config.google.tagManagerTravel;

    app.locals.FACEBOOK_PIXEL_ID = config.facebook.pixelID;
    app.locals.YAHOO_PIXEL_ID = config.yahoo.pixelID;
    app.locals.YAHOO_BING_ID = config.yahoo.bingID;
    app.locals.FACEBOOK_APP_ID = config.socialMedia.facebookId;
    app.locals.PAP_HOST = config.pap.host;
    app.locals.PAP_ACCOUNT_ID = config.pap.accountId;

    app.locals.formatMoney = function (price, ccy, locale, precision) {
        return formatMoney(price, ccy, locale, precision);
    };

    app.locals.formatDate = function (value, pattern = 'DD/MM/YYYY') {
        return formatDate(value, pattern);
    };

    app.locals.MERCHANT_URL = config.fayfay.merchantUrl;
};
