module.exports = {
    PAGE_SIZES: [10, 20, 30, 40, 50, 100],
    DEFAULT_PAGE_SIZE: 10,
    MAXIMUM_IMAGE_FILE_SIZE: 3145728,
    SEARCH_DEFAULT_PAGE_SIZE: 18,
    SEARCH_INITIAL_NUMBER_OF_CATEGORIES: 3,
    SEARCH_INITIAL_NUMBER_OF_CITIES: 3,
    CURRENCIES: [
        { code: 'USD', symbol: 'US$' },
        { code: 'VND', symbol: '₫', precision: 0 },
        { code: 'HKD', symbol: 'HK$' },
        { code: 'TWD', symbol: 'NT$' },
        { code: 'CNY', symbol: '¥' },
        { code: 'SGD', symbol: 'S$' },
        { code: 'MYR', symbol: 'RM' },
        { code: 'THB', symbol: '฿' }
    ],
    ALL_DAY_BOOKING_TIME: '00:00:00',
    CLOUDINARY_IMAGE_URL: 'https://res.cloudinary.com/fayfay-dev/image/upload/q_auto,f_auto',
    PAYPAL_ENV: 'sandbox',
    MAXIMUM_LENGTH_OF_REVIEW: 200,
    VISA_IGNORED_COUNTRIES: ['IN', 'HK', 'TW', 'CM', 'MZ', 'CG', 'CD', 'GH', 'SL', 'TR', 'IR', 'BD', 'PK', 'AF', 'SY', 'IQ', 'LR', 'LY', 'LB', 'LK', 'SD', 'YE', 'ZA', 'MU', 'NP'],
    PRICE_RANGES: ['BUDGET', 'STANDARD', 'LUXURY'],
    SORT_OPTIONS: [
        { name: 'priorityCity', field: 'priorityCity', sortDirection: 'ASC' },
        { name: 'priorityCategory', field: 'priorityCategory', sortDirection: 'ASC' },
        { name: 'ranking', field: 'ranking', sortDirection: 'ASC' },
        { name: 'priority', field: 'priority', sortDirection: 'ASC' },
        { name: 'date_asc', field: 'date', sortDirection: 'ASC' },
        { name: 'price_desc', field: 'price', sortDirection: 'DESC' },
        { name: 'price_asc', field: 'price', sortDirection: 'ASC' },
        { name: 'rating_desc', field: 'rating', sortDirection: 'DESC' },
        { name: 'relevance', field: 'relevance', sortDirection: 'DESC' }
    ],
    ORDER_STATUS: {
        INITIATED: 1,
        PAID: 2,
        FAILED: 3,
        UNPAID: 4,
        CONFIRMED: 5,
        PARTIAL_COMPLETED: 6,
        PARTIAL_REFUNDED: 8,
        COMPLETED: 7,
        REFUNDED: 9,
        REFUND_PENDING: 10,
        REFUND_REJECTED: 11,
        CANCELLED: 12,
        UNKNOWN: 13,
        NOT_AVAILABLE: 14
    },
    DATA_NOT_AVAILABLE: 'N/A',
    PAYMENT_FLOW: { NORMAL: 'NORMAL', INQUIRY: 'INQUIRY' },
    PAYMENT_FLOW_TYPE: {
        HOTEL: 'HOTEL',
        F1: 'F1',
        GENERAL: 'GENERAL',
        PROPERTY: 'PROPERTY',
        TOUR_GUIDE: 'TOUR_GUIDE',
        COACH_CHARTER: 'COACH_CHARTER',
        HONEYMOON: 'HONEYMOON',
        EVENT: 'EVENT'
    },
    EVENTS: {
        SHOPPING_CART_ITEM_ADDED: 'SHOPPING_CART_ITEM_ADDED',
        SHOPPING_CART_ITEM_DELETED: 'SHOPPING_CART_ITEM_DELETED',
        SHOPPING_CART_ITEM_DELETING: 'SHOPPING_CART_ITEM_DELETING'
    }
};
