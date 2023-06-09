const http = require('http');

const options = {
    hostname: 'https://test-m3c6.onrender.com',
    port: 5000,
    path: '/data',
    method: 'GET'
};

const server = http.createServer((req, res) => {
    // Send an HTTP GET request to the remote server
    let data = '';
    const request = http.request(options, (response) => {
        
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
        console.log(error);
    });

    // End the HTTP request
    request.end();

    // Send a response to the client
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
});

server.listen(5000, () => {
    console.log(`Server running at 5000`);
});
