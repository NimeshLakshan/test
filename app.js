const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Retrieve the data you want to send to the Arduino
    let data = 'Hello, world!';

    // Send the data as a plain text response
    res.type('text/plain').send(data);
});

app.get('/data', (req, res) => {
    // Retrieve the data you want to send to the Arduino
    let data = 'Hello, Arduino!';

    // Send the data as a plain text response
    res.type('text/plain').send(data);
});

app.listen(5000, () => {
    console.log('Server listening on port 3000');
});