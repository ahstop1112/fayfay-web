const axios = require('axios/index');
const config = require('../config');

async function callCreateAccountStatement() {
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
            // THIS JOB SHOULD BE RUN AT THE FIRST DAY OF MONTH TO CALCULATE ACCOUNT STATEMENT OF PREVIOUS MONTH
            let date = new Date();
            date.setMonth(date.getMonth() - 1);

            // in javascript getMonth() 0 - 11

            await axios.post(`${config.api.defaultApiUrl}/api/account-statements?year=${date.getFullYear()}&month=${date.getMonth() + 1}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        }
        catch (e) {
            console.log('CREATE ACCOUNT STATEMENT FAILED');
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

    await callCreateAccountStatement();

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

