import Constants from 'fayfayConstants';
import Cookies from 'js-cookie';
import { formatMoney as accountingFormatMoney } from 'accounting';
import moment from 'moment';
import jstz from "jstimezonedetect";
import queryString from 'query-string';

export function getCurrency() {
    let currency = Cookies.get('ccy');

    return currency || 'HKD';
}

export function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }

    const parseUrl = queryString.parseUrl(url);

    if (!parseUrl.query[name]) {
        return null;
    }

    try {
        return decodeURIComponent(parseUrl.query[name]);
    } catch (e) {
        return parseUrl.query[name]
    }
}

export function formatMoney(value, ccy, locale, precision = 2) {
    const currency = Constants.CURRENCIES.find(item => item.code === ccy);

    return accountingFormatMoney(value, {
        symbol: currency.symbol,
        format: '<span class="currency">%s</span> %v',
        precision: Number.isInteger(currency.precision) ? currency.precision : precision
    });
}

export function formatDate(value, pattern = 'DD/MM/YYYY HH:mm') {
    return moment
        .utc(value)
        .local()
        .format(pattern);
}

export function formatTime(value, pattern = 'HH:mm') {
    return moment(value, 'HH:mm:ss')
        .format(pattern);
}

export function getLangUrl(locale) {
    if (!locale) {
        return '/en-us';
    }

    return `/${locale}`;
}

export function getFullUrl(urlObject, locale) {
    const match = urlObject.pathname.match(/^\/([A-Za-z]{2}-[A-Za-z]{2})([\/\?].*)?$/i);

    let pathname = urlObject.pathname;
    if (match) {
        pathname = match[2] || '';
    }

    const returnUrl = `${getLangUrl(locale)}/${pathname}`;

    return `${urlObject.protocol}//${urlObject.host}${returnUrl.replace('//', '/')}${urlObject.search}`;
}

export function isScrolledIntoView(elem) {
    const elemTop = $(elem).offset().top;
    const docViewTop = $(window).scrollTop();

    const elemBottom = Math.round(elemTop + $(elem).height());
    const docViewBottom = Math.round(docViewTop + $(window).height());

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

export function getTimeZone() {
    return !!navigator.userAgent.match(/Trident\/7\./) ? jstz.determine().name() : Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function experienceSearchQueryString(dateFrom, dateTo, noOfPax, selectedCategories, selectedCities, priceRanges, sortType) {
    let query = '';

    if (sortType) {
        query = `&sort.field=${sortType.field}&sort.direction=${sortType.sortDirection}`
    }
    if (dateTo && !dateFrom) {
        dateFrom = formatDate(new Date(), 'YYYY-MM-DD');
    }
    if (dateFrom) {
        query += `&filters[1].field=dateFrom&filters[1].value=${dateFrom}`;
    }
    if (dateTo) {
        query += `&filters[2].field=dateTo&filters[2].value=${dateTo}`;
    }
    if (noOfPax) {
        query += `&filters[6].field=pax&filters[6].value=${noOfPax}&filters[6].operation=GREATER_THAN_OR_EQUAL`;
    }
    if (selectedCategories) {
        query += `&filters[7].field=categoryId&filters[7].value=${selectedCategories}&filters[7].operation=IN`
    }
    if (selectedCities) {
        query += `&filters[8].field=cityId&filters[8].value=${selectedCities}&filters[8].operation=IN`
    }
    if (priceRanges) {
        query += `&filters[9].field=priceRange&filters[9].value=${priceRanges}&filters[9].operation=IN`
    }
    return query;
}
