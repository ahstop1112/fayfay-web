const config = require('../../config');
import axios from "axios/index";

async function getCities(spotlight) {
    let cityApiUrl = `${config.api.defaultApiUrl}/public/countries/1/cities`;
    if (spotlight) {
        cityApiUrl += `?spotlight=true`;
    }

    const response = await axios.get(cityApiUrl);

    return response.data;
}

async function getById(id) {
    const cityUrl = `${config.api.defaultApiUrl}/public/cities/${id}`;

    const response = await axios.get(cityUrl);

    return response.data
}

module.exports = {
    getCities: getCities,
    getById: getById
};
