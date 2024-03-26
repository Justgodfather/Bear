// Импортируем необходимые функции из других файлов
const { createBear, createMultipleBears } = require('./bearCreation');
const { deleteAllBears, deleteBearById } = require('./bearDeletion');
const { getAllBears } = require('./bearDeletion');

// Теперь вы можете использовать эти функции
createMultipleBears(5).then(() => {
    // После создания всех медведей продолжаем выполнение других запросов
    
    // Удаляем медведя по его ID
    deleteBearById(5).then(() => {
        // Получаем информацию о всех медведях
        getAllBears();
    });
});

