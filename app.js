const http = require('http');

const options = {
    hostname: 'test-m3c6.onrender.com',
    port: 80,
    path: '/data',
    method: 'GET'
};

http.get(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
}).on('error', (error) => {
    console.error(error);
});