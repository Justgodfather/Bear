const axios = require('axios');

// Добавьте переменную окружения для URL сервера API
const API_URL = process.env.API_URL || 'http://localhost:8091';

// Общий обработчик ошибок
const errorHandler = (error) => {
    console.error('Ошибка:', error.response ? error.response.data : error.message);
};

// Функция для выполнения HTTP запросов
const sendRequest = async (method, endpoint, data = null) => {
    try {
        const response = await axios({ method, url: `${API_URL}/${endpoint}`, data });
        return response.data;
    } catch (error) {
        errorHandler(error);
        throw error;
    }
};

// Функция для создания медведя
const createBear = async (bearData) => {
    try {
        const response = await sendRequest('post', 'bear', bearData);
        console.log('Медведь успешно создан:', response);
    } catch (error) {
        console.error('Ошибка при создании медведя');
    }
};

// Функция для создания нескольких медведей разных типов
const createMultipleBears = async (count) => {
    for (let i = 0; i < count; i++) {
        const bearData = {
            bear_type: 'BLACK', // Меняйте тип медведя здесь, если нужно
            bear_name: `Медведь ${i + 1}`,
            bear_age: Math.floor(Math.random() * 20) + 1
        };
        await createBear(bearData);
    }
};

// Функция для получения всех медведей (GET запрос)
const getAllBears = async () => {
    try {
        const response = await sendRequest('get', 'bear');
        console.log('Информация о всех медведях:', response);
    } catch (error) {
        console.error('Ошибка при получении информации о медведях');
    }
};

// Функция для получения медведя по его ID (GET запрос)
const getBearById = async (bearId) => {
    try {
        const response = await sendRequest('get', `bear/${bearId}`);
        console.log('Информация о медведе по ID:', response);
    } catch (error) {
        console.error('Ошибка при получении информации о медведе по ID');
    }
};

// Функция для обновления медведя по его ID (PUT запрос)
const updateBearById = async (bearId, updatedBearData) => {
    try {
        const response = await sendRequest('put', `bear/${bearId}`, updatedBearData);
        console.log('Медведь успешно обновлен:', response);
    } catch (error) {
        console.error('Ошибка при обновлении медведя');
    }
};

// Функция для удаления всех медведей (DELETE запрос)
const deleteAllBears = async () => {
    try {
        await sendRequest('delete', 'bear');
        console.log('Все медведи успешно удалены.');
    } catch (error) {
        console.error('Ошибка при удалении всех медведей');
    }
};

// Функция для удаления медведя по его ID (DELETE запрос)
const deleteBearById = async (bearId) => {
    try {
        await sendRequest('delete', `bear/${bearId}`);
        console.log(`Медведь с ID ${bearId} успешно удален.`);
    } catch (error) {
        console.error(`Ошибка при удалении медведя с ID ${bearId}`);
    }
};

// Пример использования
createMultipleBears(5).then(() => {
    // После создания всех медведей продолжаем выполнение других запросов
    
    // Получаем информацию о всех медведях
    getAllBears();
    
    // Получаем информацию о медведе по его ID
    getBearById(3);
    
    // Обновляем информацию о медведе по его ID
    updateBearById(2, { bear_name: 'нова', bear_age: 10 });
    
    // Удаляем медведя по его ID
    deleteBearById(5);
    
    // Удаляем всех медведей
    deleteAllBears();
});

