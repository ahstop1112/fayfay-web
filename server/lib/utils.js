import en_us from '../../locales/en-us.json';
import zh_hk from '../../locales/zh-hk.json';
import zh_cn from '../../locales/zh-cn.json';
import vi_vn from '../../locales/vi-vn.json';
// import th_th from '../../locales/th-th.json';
import Constants from 'fayfayConstants';

const maxAge = 30 * 24 * 3600000; // 30 days
const currencyCookieName = 'ccy';
const languageCookieName = 'lang';

const languages = {
    'en-us': { id: 1, translations: en_us, text: 'English', locale: 'en-us', currency: 'USD' },
    'zh-cn': { id: 2, translations: zh_cn, text: '简体中文', locale: 'zh-cn', currency: 'CNY' },
    'zh-hk': { id: 3, translations: zh_hk, text: '繁體中文', locale: 'zh-hk', currency: 'HKD' },
    'vi-vn': { id: 4, translations: vi_vn, text: 'Tiếng Việt', locale: 'vi-vn', currency: 'VND' }
    //'th-th': { id: 5, translations: th_th, text: 'ไทย', locale: 'th-th', currency: 'USD' },
};

function getLanguage(req, res) {
    let languageCode = 'en-us';
    const match = req.url.match(/^\/([A-Za-z]{2}-[A-Za-z]{2})([\/\?].*)?$/i);

    if (match) {
        languageCode = match[1];
        req.url = match[2] || '/';
    }

    // Get language from cookie if ajax request
    if ((req.xhr || (req.headers.accept && req.headers.accept.indexOf('json') >= 0)) && req.cookies && req.cookies[languageCookieName]) {
        languageCode = req.cookies[languageCookieName].toLowerCase();
    }

    if (!languages[languageCode]) {
        languageCode = 'en-us';
    }

    res.cookie(languageCookieName, languageCode, {
        maxAge: maxAge,
        path: '/'
    });

    return languages[languageCode];
}

function setLanguage(res, languageCode) {
    if (languageCode) {
        res.cookie('lang', languageCode, {
            maxAge: maxAge,
            path: '/'
        });
    }
}

function getCurrency(req, res) {
    let currency = req.query.ccy || 'USD';

    if (!req.query.ccy && req.cookies && !req.cookies[currencyCookieName]) {
        const selectedLanguage = languages[req.locale];

        currency = selectedLanguage.currency;
    }

    if (!req.query.ccy && req.cookies && req.cookies[currencyCookieName]) {
        currency = req.cookies[currencyCookieName];
    } else {
        res.cookie(currencyCookieName, currency.toUpperCase(), {
            maxAge: maxAge,
            path: '/'
        });
    }

    return currency.toUpperCase();
}

function setCurrency(res, currency) {
    if (currency) {
        res.cookie(currencyCookieName, currency.toUpperCase(), {
            maxAge: maxAge,
            path: '/'
        });
    }
}

function setUserSession(req, user) {
    const profileImage = user.profileImage;
    const src = profileImage && profileImage.key ? `${Constants.CLOUDINARY_IMAGE_URL}/w_320/${profileImage.key}.${profileImage.format}` : '';
    req.session.userInfo = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        countryCode: user.countryCode,
        countryId: user.countryId,
        userId: user.id,
        langId: user.languageId,
        title: user.title,
        locale: user.languageCode,
        profileImage: src,
        preferredCurrency: user.preferredCurrency
    };

    if (user.token) {
        req.session.userToken = user.token;
    }

    if (user.refreshToken) {
        req.session.refreshToken = user.refreshToken;
    }

    if (user.expiryDateTime) {
        req.session.expiryDateTime = user.expiryDateTime;
    }
}

module.exports = {
    languages: languages,
    getLanguage: getLanguage,
    setLanguage: setLanguage,
    getCurrency: getCurrency,
    setCurrency: setCurrency,
    setUserSession: setUserSession
};
