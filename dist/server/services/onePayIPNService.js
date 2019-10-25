import axios from "axios";

const queryString = require('query-string');
const url = require('url');
const config = require('../../config');

async function executeIPNRequest(req, res) {
    try {
        const query = req.query;

        const urlIPNChecking = `${config.api.defaultApiUrl}/public/payment/onepay/ipn?${queryString.stringify(query)}`;

        await axios.post(urlIPNChecking);

        res.send('responsecode=1&desc=confirm-success');
    } catch (ex) {
        console.log('RETRY IPN');

        res.status(500).send('PLEASE RESEND MESSAGE LATER!');
    }
}

module.exports = {
    executeIPNRequest: executeIPNRequest
};

