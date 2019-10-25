export default async function geoIPHandler(req, res, next) {
    if (req.method === 'GET'
        && req.cookies
        && !req.cookies['lang']
        && !(req.xhr || (req.headers.accept && req.headers.accept.indexOf('json') >= 0))) {
        const GEOIP_COUNTRY_CODE = req.get('GEOIP_COUNTRY_CODE');

        const match = req.url.match(/^\/([A-Za-z]{2}-[A-Za-z]{2})([\/\?].*)?$/i);
        if (GEOIP_COUNTRY_CODE &&
            (
                GEOIP_COUNTRY_CODE === 'CN'
                || GEOIP_COUNTRY_CODE === 'HK'
                || GEOIP_COUNTRY_CODE === 'TW'
            )
        ) {
            if (!match && req.url.indexOf('zh-hk') === -1) {
                return res.redirect(`/zh-hk${req.originalUrl}`);
            }
        }

        if (GEOIP_COUNTRY_CODE && GEOIP_COUNTRY_CODE === 'VN') {
            if (!match && req.url.indexOf('vi-vn') === -1) {
                return res.redirect(`/vi-vn${req.originalUrl}`);
            }
        }

        if (GEOIP_COUNTRY_CODE && !req.query.ccy && req.cookies && !req.cookies['ccy']) {
            if (GEOIP_COUNTRY_CODE === 'VN') {
                req.query.ccy = 'VND';
            } else if (GEOIP_COUNTRY_CODE === 'TW') {
                req.query.ccy = 'TWD';
            } else if (GEOIP_COUNTRY_CODE === 'CN') {
                req.query.ccy = 'CNY';
            } else if (GEOIP_COUNTRY_CODE === 'SG') {
                req.query.ccy = 'SGD';
            } else if (GEOIP_COUNTRY_CODE === 'MY') {
                req.query.ccy = 'MYR';
            } else if (GEOIP_COUNTRY_CODE === 'TH') {
                req.query.ccy = 'THB';
            }
        }

        next();
    } else {
        next();
    }
}
