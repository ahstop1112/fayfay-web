const axios = require('axios/index');
const config = require('../config');

async function elasticMigration() {
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

        const indexName = process.argv[2]; // indexName
        const migration = process.argv[3]; // CREATE_IF_NOT_EXISTS | DROP_CREATE_ALWAYS | SEED_DATA
        const expDate = process.argv[4]; // 2019-02-14
        let queryString = `indexName=${indexName}&migration=${migration}&page.index=0&page.size=50`;
        if (expDate) {
            queryString += `&filters[0].field=updatedDate&filters[0].value=${expDate}&filters[0].operation=GREATER_THAN_OR_EQUAL`;
        }

        try {
            await axios.post(`${config.api.defaultApiUrl}/api/elasticsearch?${queryString}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        } catch (e) {
            console.log(`[${new Date().toISOString()}] ELASTIC IMPORT FAILED`);
            console.log(e);
        }
    } catch (e) {
        console.log(`[${new Date().toISOString()}] LOGIN FAILED`);
        //console.log(e);
    }
}

(async () => {
    console.log(`[${new Date().toISOString()}] CALLING API`);

    await elasticMigration();

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

