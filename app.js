const http = require('http');

// Set up the HTTP request options
const options = {
  hostname: 'test-m3c6.onrender.com',
  port: 80,
  path: '/data',
  method: 'GET'
};

// Send the HTTP request
const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
