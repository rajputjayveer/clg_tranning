// const http = require('http');

//hello world server
// const server = http.createServer((req, res) => {
//     res.end('Hello from node js');
// });
// server.listen(3000, () => {
//     console.log('JSON API running on http://localhost:3000');
// });


// const fs = require('fs');
//***reading */
// fs.readFile('sample.txt','utf8',(err,data) =>{
//     if(err) return console.error(err);
//     console.log(data);
// });


//**writing */
// fs.writeFile('output.txt','hello ,this is written by node' ,(err) =>{
//             if(err) throw err;
//             console.log('File has been written');
// });



// JSON API SRVER
// const http = require('http');
// const data = {
//     name: 'Node.js',
//     type: 'Runtime',
//     language: 'JavaScript'
// };

// http.createServer((req,res) =>{
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(data));
// }).listen(3000, () => {
//     console.log('JSON API running on http://localhost:3000');
// });


//console timer
// console.log('starting timer...');
// setTimeout(() => {
//     console.log('3 second passed');
// }, 3000);

