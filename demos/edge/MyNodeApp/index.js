var edge = require('edge');

var getSecretValueFromNode = edge.func({
    assemblyFile: '../ClassLibrary1/ClassLibrary1/bin/Debug/ClassLibrary1.dll',
    typeName: 'ClassLibrary1.Class1',
    methodName: 'getSecretValueFromNode'
});

setTimeout(function(){
    console.log('Calling getSecretValueFromNode... \n');

    getSecretValueFromNode(1234, function(error, result){
        if(error){
            return console.log(error);
        }

        console.log(result);
    });

    console.log('Continue processing... \n');
}, 5000);