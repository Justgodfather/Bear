const { sendRequest } = require('./api');

const deleteAllBears = async () => {
    try {
        await sendRequest('delete', 'bear');
        console.log('Все медведи успешно удалены.');
    } catch (error) {
        console.error('Ошибка при удалении всех медведей');
    }
};

const deleteBearById = async (bearId) => {
    try {
        await sendRequest('delete', `bear/${bearId}`);
        console.log(`Медведь с ID ${bearId} успешно удален.`);
    } catch (error) {
        console.error(`Ошибка при удалении медведя с ID ${bearId}`);
    }
};

// Добавляем экспорт функции getAllBears
const getAllBears = async () => {
    try {
        const response = await sendRequest('get', 'bear');
        console.log('Информация о всех медведях:', response);
    } catch (error) {
        console.error('Ошибка при получении информации о медведях');
    }
};

module.exports = {
    deleteAllBears,
    deleteBearById,
    getAllBears // Экспортируем функцию getAllBears
};

