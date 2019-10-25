const axios = require('axios/index');
const config = require('./config');

async function callSendReviewEmail() {

    let loginResponse;

    try {
        loginResponse = await axios.post(`${config.api.defaultApiUrl}/api/auth/login`, {
            'username': config.api.username,
            'password': config.api.password
        }, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'x-site': 'admin'
            }
        });
    }
    catch (e) {
        console.log('LOGIN FAILED');
        console.log(e);
        throw e;
    }

    const token = loginResponse.data.token;

    try {
        const emailResponse = await axios.post(`${config.api.defaultApiUrl}/api/orders/review`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        console.log(emailResponse.data);
    }
    catch (e) {
        console.log('SEND EMAIL FAILED');
        console.log(e);
        throw e;
    }
}

async function handler() {
    console.log('CALLING API');
    await callSendReviewEmail();
}

exports.handler = handler;
