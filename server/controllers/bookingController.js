import axios from 'axios';

const config = require('../../config');
const router = require('express').Router();

router.get('/booking/customer/confirm/:orderId', async (req, res) => {
    const confirmBookingUrl = `${config.api.defaultApiUrl}/public/booking/customer/confirm/${req.params.orderId}`;

    let isSuccess = true;
    let message = '';
    try {
        const response = await axios.post(confirmBookingUrl);

        message = 'Thanks for your confirmation, this booking has been confirmed.'
    } catch (ex) {
        console.log(ex);

        isSuccess = false;
        message = ex.response.data.message;

        switch (message) {
            case 'MSG_ERROR_ORDER_NOT_FOUND': {
                message = 'Sorry, this booking can not be found in Fayfay\'system';
                break
            }

            case 'MSG_ERROR_ORDER_CONFIRMED': {
                message = 'This booking has been confirmed before';
                break
            }

            default: {
                message = 'Oops, looks like something went wrong. Please email to <a href="mailto:travel@fayfay.com">travel@fayfay.com</a> for support';
            }
        }
    }

    res.render('general.confirmation.ejs', {
        userInfo: req.session.userInfo,
        message: message,
        isSuccess: isSuccess
    })
});

router.get('/booking/confirm/:orderItemId', async (req, res) => {
    const confirmBookingUrl = `${config.api.defaultApiUrl}/public/booking/confirm/${req.params.orderItemId}`;

    let isSuccess = true;
    let message = '';
    try {
        const response = await axios.post(confirmBookingUrl);

        message = 'Thanks for your confirmation, this booking has been confirmed.'
    } catch (ex) {
        console.log(ex);

        isSuccess = false;
        message = ex.response.data.message;

        switch (message) {
            case 'MSG_ERROR_ORDER_NOT_FOUND': {
                message = 'Sorry, this booking can not be found in Fayfay\'system';
                break
            }

            case 'MSG_ERROR_ORDER_CONFIRMED': {
                message = 'This booking has been confirmed before';
                break
            }

            default: {
                message = 'Oops, looks like something went wrong. Please email to <a href="mailto:travel@fayfay.com">travel@fayfay.com</a> for support';
            }
        }
    }

    res.render('general.confirmation.ejs', {
        userInfo: req.session.userInfo,
        message: message,
        isSuccess: isSuccess
    })
});

router.get('/booking/not-available/:orderItemId', async (req, res) => {
    const confirmBookingUrl = `${config.api.defaultApiUrl}/public/booking/not-available/${req.params.orderItemId}`;

    let isSuccess = false;
    let message = '';
    try {
        const response = await axios.post(confirmBookingUrl);

        message = 'Oops, we are so sorry to hear about that, will notice to customer.'
    } catch (ex) {
        console.log(ex);

        message = ex.response.data.message;

        switch (message) {
            case 'MSG_ERROR_ORDER_NOT_FOUND': {
                message = 'Sorry, this booking can not be found in Fayfay\'system';
                break
            }

            case 'MSG_ERROR_ORDER_CONFIRMED': {
                message = 'This booking has been confirmed before';
                break
            }

            default: {
                message = 'Oops, looks like something went wrong. Please email to <a href="mailto:travel@fayfay.com">travel@fayfay.com</a> for support';
            }
        }
    }

    res.render('general.confirmation.ejs', {
        userInfo: req.session.userInfo,
        message: message,
        isSuccess: isSuccess
    })
});

module.exports = router;
