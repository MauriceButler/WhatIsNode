var http = require('http'),
    port = process.env.PORT || 8080,
    server = http.createServer();


server.on('request', function(request, response){

    response.end('Hello World ' + new Date());

});


server.listen(port, function(error){
    if(error){
        logger.error(error);
        return process.exit(1);
    }

    console.log('Listening on port: ' + port);
});