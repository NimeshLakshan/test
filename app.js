const express = require('express');
const app = express();

// Set up CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin to access the server
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // Allow specific HTTP methods
  res.header("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers
  next();
});

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
    console.log('Server listening on port 5000');
});
