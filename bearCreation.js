const { sendRequest } = require('./api');

const createBear = async (bearData) => {
    try {
        // Проверка наличия обязательных полей в bearData
        if (!bearData.bear_type || !bearData.bear_name || !bearData.bear_age) {
            throw new Error('Не указаны все обязательные поля');
        }

        const response = await sendRequest('post', 'bear', bearData);
        console.log('Медведь успешно создан:', response);
    } catch (error) {
        console.error('Ошибка при создании медведя:', error.message);
    }
};

const createMultipleBears = async (count) => {
    for (let i = 0; i < count; i++) {
        const bearData = {
            bear_type: 'BLACK',
            bear_name: `Медведь ${i + 1}`,
            bear_age: Math.floor(Math.random() * 20) + 1
        };

        // Дополнительная проверка на возраст медведя
        if (bearData.bear_age < 1 || bearData.bear_age > 20) {
            console.error('Ошибка: недопустимый возраст медведя');
            continue; // Пропустить создание медведя с недопустимым возрастом
        }

        await createBear(bearData);
    }
};

module.exports = {
    createBear,
    createMultipleBears
};

