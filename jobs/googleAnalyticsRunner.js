const axios = require('axios/index');
const config = require('../config');

async function googleAnalytics() {
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
            await axios.post(`${config.api.defaultApiUrl}/api/google-analytics`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        } catch (e) {
            console.log(`[${new Date().toISOString()}] UPDATE FAILED`);
            console.log(e);
        }
    } catch (e) {
        console.log(`[${new Date().toISOString()}] LOGIN FAILED`);
    }
}

(async () => {
    console.log(`[${new Date().toISOString()}] CALLING API`);

    await googleAnalytics();

})().catch(err => {
    console.error(err);

    process.exit();
});

process.on('exit', (code) => {
    console.log(`[${new Date().toISOString()}] END`);
});

process.on('uncaughtException', (err) => {
    console.log(err);
});

