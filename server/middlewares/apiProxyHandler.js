const config = require('../../config');

const proxy = require('http-proxy-middleware');
const queryString = require('query-string');

// Add middleware for http proxying
const apiProxyHandler = proxy({
    target: config.api.defaultApiUrl,
    changeOrigin: true,
    onProxyReq: onProxyReq,
    onError: onError,
    onProxyRes: onProxyRes
});

function onProxyReq(proxyReq, req, res) {
    const parseUrl = queryString.parseUrl(proxyReq.path);
    parseUrl.query.langId = req.langId;
    parseUrl.query.ccy = req.ccy;
    parseUrl.query.ip = req.ip;

    proxyReq.path = proxyReq.url = `${parseUrl.url}?${queryString.stringify(parseUrl.query)}`;

    if (req.session && req.session.userToken) {
        proxyReq.setHeader('Authorization', `Bearer ${req.session.userToken}`);
    }
}

function onError(err, req, res) {
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
}

// CATCH UP ALL ERRORS FROM PROXY
function onProxyRes(proxyRes, req, res) {
    if (proxyRes.statusCode === 401 && req.session && req.session.userToken) {
        req.session.destroy();
    }
}

module.exports = apiProxyHandler;
