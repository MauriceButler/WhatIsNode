var fs = require('fs'),
    http = require('http'),
    mongoose = require('mongoose'),
    userSchema = mongoose.Schema({
        name: String
    }),
    db = {
        User: mongoose.model('user', userSchema)
    };

mongoose.connect('mongodb://localhost/demo');



// -----------------------------------------------------------------



console.log('Start Demo Code \n');

// Read a file
console.log('Call Read File \n');
fs.readFile('./data.txt', function (error, data) {
    if (error) {
        console.log(error);
    }

    console.log('Read File Data: ' + data + ' \n');
});



// HTTP Request
console.log('Call HTTP Get \n');
http.get("http://www.google.com/index.html", function(response) {
    console.log('HTTP Get Status Code: ' + response.statusCode + ' \n');
}).on('error', function(error) {
    console.log(error);
});



// Database Query
console.log('Call Database \n');
db.User.findOne({name: 'barry'}, function(error, data){
    if (error) {
        console.log(error);
    }

    console.log('Database Data: ' + data + ' \n');
});


console.log('End Demo Code \n');

