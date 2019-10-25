const axios = require('axios/index');
const config = require('../config');

async function callApi() {
    try {
        const loginResponse = await axios.post(`${config.api.defaultApiUrl}/api/auth/login`, {
            'username': config.api.username,
            'password': config.api.password
        }, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'x-site': 'admin'
            }
        });

        const token = loginResponse.data.token;

        try {
            const emailResponse = await axios.post(`${config.api.defaultApiUrl}/api/refund/notification/re-send`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log(emailResponse.data);
        }
        catch (e) {
            console.log('SEND EMAIL FAILED');
            console.log(e);
        }
    }
    catch (e) {
        console.log('LOGIN FAILED');
        console.log(e);
    }
}

(async () => {
    console.log('CALLING API');

    await callApi();

})().catch(err => {
    console.error(err);

    process.exit();
});

process.on('exit', (code) => {
    console.log('END');
});

process.on('uncaughtException', (err) => {
    console.log(err);
});

