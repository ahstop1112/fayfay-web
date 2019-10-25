import axios from 'axios';
import utils from '../lib/utils';

axios.defaults.params = axios.defaults.params || {};

const translationConfigs = [
    {
        pattern: /^\/(sale\/double11|sale\/vnshow|sale\/blackfriday|sale\/christmas|keepsakes|travel-must-haves|authentic-experiences|bubbles|sale\/cny|sale\/easter|sale\/central-vietnam-travel|the-coffee-house|one-year-anniversary)/i,
        fileName: 'campaign'
    }
];

export default async function languageHandler(req, res, next) {
    const match = req.url.match(/^\/([A-Za-z]{2}-[A-Za-z]{2})([\/\?].*)?$/i);
    const isAjaxRequest = req.xhr || (req.headers.accept && req.headers.accept.indexOf('json') >= 0);

    if (!match && !isAjaxRequest) {
        if (req.cookies && req.cookies['lang']) {
            return res.redirect(`/${req.cookies['lang'].toLowerCase()}${req.originalUrl}`);
        } else {
            if (req.originalUrl === '/') {
                res.redirect('/en-us');
            } else {
                res.redirect(`/en-us${req.originalUrl}`);
            }
        }
    } else {
        if (!isAjaxRequest) {
            const languageCode = match[1];
            if (!utils.languages[languageCode]) {
                res.redirect(req.url.replace(languageCode, 'en-us'));

                return;
            }
        }

        const language = utils.getLanguage(req, res);
        const locale = language.locale;

        let additionTranslation = {};
        translationConfigs.forEach(function(config) {
            if (req.url.match(config.pattern)) {
                try {
                    const translations = require(`../../locales/${locale}/${config.fileName}.json`);
                    if (translations) {
                        additionTranslation = Object.assign(additionTranslation, translations);
                    }
                } catch (ex) {
                    console.log(ex);
                }
            }
        });

        let allTranslations = {};
        if (Object.keys(additionTranslation).length === 0) {
            allTranslations = language.translations;
        } else {
            allTranslations = Object.assign({}, language.translations, additionTranslation);
        }

        // SET LOCALE INTO REQUEST
        const langUrl = `/${language.locale}`;

        req.langUrl = langUrl;
        req.locale = locale;

        req.localeData = {};
        req.localeData[locale] = allTranslations;
        req.langId = language.id;

        axios.defaults.params['langId'] = language.id;

        // SET DATA INTO RESPONSE
        res.locals.translations = allTranslations;
        res.locals.locale = locale;
        res.locals.langUrl = langUrl;

        res.locals.languageText = language.text;

        next();
    }
}
