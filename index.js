const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Використовуйте CORS для всіх запитів
app.use(cors());

// Дозволяйте обробку JSON тіла запиту
app.use(express.json());

function queryApi() {   
    console.log(123);

    return new Promise(( resolve,reject) => {
      fetch("https://learn123456.myshopify.com/apps/proxytest", {
        method: "POST",
        redirect: "manual",
        headers: {
          "Content-Type": "application/json",
          "'Access-Control-Allow-Origin": "*"
        }
      }).then( response => {
        console.log(response, "response");
      }).then( response => {
        resolve(response)
      }).catch( error => {
        console.log(error);
      })
    })
}

// Створіть POST endpoint
app.post('/post-endpoint', (req, res) => {
    const data = req;
    console.log(req);
    res.json({
        message: 'Дані отримані успішно!',
        receivedData: data
    });

    queryApi()()
});

// Додайте GET endpoint для перевірки
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Запустіть сервер
app.listen(port, () => {
    console.log(`Сервер запущений на http://localhost:${port}`);
});
