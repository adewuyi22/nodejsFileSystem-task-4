
    //Reading from a  file
    console.log('Reading from JSON file...');
    res.writeHead(200, {'Content-Type' : 'text/json'});
    
    res.write(data);

    res.end(`{
        Reading from JSON POST

    }`);
    