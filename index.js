const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Використовуйте CORS для всіх запитів
app.use(cors());

// Дозволяйте обробку JSON тіла запиту
app.use(express.json());

// Створіть POST endpoint
app.post('/post-endpoint', (req, res) => {
    const data = req;
    console.log(req);
    res.json({
        message: 'Дані отримані успішно!',
        receivedData: data
    });
});

// Додайте GET endpoint для перевірки
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Запустіть сервер
app.listen(port, () => {
    console.log(`Сервер запущений на http://localhost:${port}`);
});
