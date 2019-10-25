const config = require('../../config');
import axios from 'axios/index';

async function getById(req, id) {
    const userId = req.session.userInfo ? `?userId=${req.session.userInfo.userId}` : '';

    const activityUrl = `${config.api.defaultApiUrl}/public/activities/${id}${userId}`;

    const response = await axios.get(activityUrl);

    return response.data;
}

module.exports = {
    getById: getById
};
