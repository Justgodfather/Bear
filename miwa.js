const axios = require('axios');

// Функция для создания медведя (POST запрос)
const createBear = async (bearData) => {
    try {
        const response = await axios.post('http://localhost:8091/bear', bearData);
        console.log('Медведь успешно создан:', response.data);
    } catch (error) {
        console.error('Ошибка при создании медведя:', error.response.data);
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
        const response = await axios.get('http://localhost:8091/bear');
        console.log('Информация о всех медведях:', response.data);
    } catch (error) {
        console.error('Ошибка при получении информации о медведях:', error.response.data);
    }
};

// Функция для получения медведя по его ID (GET запрос)
const getBearById = async (bearId) => {
    try {
        const response = await axios.get(`http://localhost:8091/bear/${bearId}`);
        console.log('Информация о медведе по ID:', response.data);
    } catch (error) {
        console.error('Ошибка при получении информации о медведе по ID:', error.response.data);
    }
};

// Функция для обновления медведя по его ID (PUT запрос)
const updateBearById = async (bearId, updatedBearData) => {
    try {
        const response = await axios.put(`http://localhost:8091/bear/${bearId}`, updatedBearData);
        console.log('Медведь успешно обновлен:', response.data);
    } catch (error) {
        console.error('Ошибка при обновлении медведя:', error.response.data);
    }
};

// Функция для удаления всех медведей (DELETE запрос)
const deleteAllBears = async () => {
    try {
        await axios.delete('http://localhost:8091/bear');
        console.log('Все медведи успешно удалены.');
    } catch (error) {
        console.error('Ошибка при удалении всех медведей:', error.response.data);
    }
};

// Функция для удаления медведя по его ID (DELETE запрос)
const deleteBearById = async (bearId) => {
    try {
        await axios.delete(`http://localhost:8091/bear/${bearId}`);
        console.log(`Медведь с ID ${bearId} успешно удален.`);
    } catch (error) {
        console.error(`Ошибка при удалении медведя с ID ${bearId}:`, error.response.data);
    }
};

// Создаем 5 медведей
createMultipleBears(5).then(() => {
    // После создания всех медведей продолжаем выполнение других запросов
    
    // Получаем информацию о всех медведях
    getAllBears();
    
    // Получаем информацию о медведе по его ID (замените 'your_bear_id_here' на реальный ID)
    const bearId = 12;
    getBearById(bearId);
    
    // Обновляем информацию о медведе по его ID (замените 'your_bear_id_here' и 'updated_bear_data_here')
    const bearIdToUpdate = 16;
    const updatedBearData = { bear_name: 'нова', bear_age: 10 };
    updateBearById(bearIdToUpdate, updatedBearData);
    
    // Удаляем медведя по его ID (замените 'your_bear_id_here' на реальный ID)
    const bearIdToDelete = 31;
    deleteBearById(bearIdToDelete);
    
    // Удаляем всех медведей
    deleteAllBears();
});
//owondoi


