// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Hello Programmers !')
//     res.end()
// })
// server.listen(8080, function(err, done){
//     if(err){
//         console.log('Error on port 8080...');
//     }else{
//         console.log('Listening to port 8080...');
//         console.log('Press CTRL + C to exit');
//     }
// });

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('Client connected to server');
//     console.log('Request url:', req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     if(req.url === '/'){
//         res.write('Hello Programmers !')
//         res.end()
//     } else {
//         if(req.url === '/api/courses'){
//             res.write(JSON.stringify([1,2,3]))
//             res.end()
//         }
//     }
//     res.end();
// })
// server.listen(3000, (err, done) => {
//     if(err){
//         console.log('Error on port 3000...');
//     }else{
//         console.log('Listening to port 3000...');
//         console.log('Press CTRL + C to exit');
//     }
// });
