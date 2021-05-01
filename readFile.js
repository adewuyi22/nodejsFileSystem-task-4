var rdFile = require('fs');
var http = require('http');

//creating a simple server to display the contents from an html file 
http.createServer((req, res) => {

    //Reading from a  file
   // let file = "./result/myfile2.txt";
    let file = "./result/POST.js";

    rdFile.readFile(file, (err, data) => {
    if (err) throw err;
    
    console.log('Reading file...');
    //res.writeHead(200, {'Content-Type' : 'text/html'});
    res.writeHead(200, {'Content-Type' : 'text/json'});
    //res.writeHead(200, {'Content-Type' : 'text/plain'});

    res.write(data);

    res.end();
    
})

}).listen(8090);