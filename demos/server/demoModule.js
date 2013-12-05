function respondWithTime(request, response){

    response.end('Hello World ' + new Date());

}

module.exports = {
    respondWithTime: respondWithTime
};