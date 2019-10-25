const config = require('../../config');
import axios from "axios/index";

async function getGeneralData() {
    try {
        const response = await axios.get(`${config.api.defaultApiUrl}/public/general`);
        return response.data;
    }
    catch (ex) {
        return {error: ex};
    }
}

module.exports = {
    getGeneralData: getGeneralData
};
