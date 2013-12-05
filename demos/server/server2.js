var http = require('http'),
    port = process.env.PORT || 8080,
    server = http.createServer(),
    demoModule = require('./demoModule');


server.on('request', demoModule.respondWithTime);


server.listen(port, function(error){
    if(error){
        logger.error(error);
        return process.exit(1);
    }

    console.log('Listening on port: ' + port);
});