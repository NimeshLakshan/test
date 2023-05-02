const http = require('http');

const options = {
    hostname: 'test-m3c6.onrender.com',
    port: 80,
    path: '/data',
    method: 'GET'
};

const server = http.createServer((req, res) => {
    // Send an HTTP GET request to the remote server
    const request = http.request(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            // Log the response from the remote server
            console.log(`Response from ${options.hostname}: ${data}`);
        });
    });

    // Handle errors with the HTTP request
    request.on('error', (error) => {
        console.error(error);
    });

    // End the HTTP request
    request.end();

    // Send a response to the client
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!\n');
});

server.listen(5000, () => {
    console.log(`Server running at 5000`);
});