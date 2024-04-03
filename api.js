const axios = require('axios');
const API_URL = process.env.API_URL;

const sendRequest = async (method, endpoint, data = null) => {
    try {
        const response = await axios({ method, url: `${API_URL}/${endpoint}`, data });
        return response.data;
    } catch (error) {
        console.error('Ошибка:', error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = {
    sendRequest
};

