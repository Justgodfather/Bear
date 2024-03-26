const { sendRequest } = require('./api');

const createBear = async (bearData) => {
    try {
        const response = await sendRequest('post', 'bear', bearData);
        console.log('Медведь успешно создан:', response);
    } catch (error) {
        console.error('Ошибка при создании медведя');
    }
};

const createMultipleBears = async (count) => {
    for (let i = 0; i < count; i++) {
        const bearData = {
            bear_type: 'BLACK',
            bear_name: `Медведь ${i + 1}`,
            bear_age: Math.floor(Math.random() * 20) + 1
        };
        await createBear(bearData);
    }
};

module.exports = {
    createBear,
    createMultipleBears
};

