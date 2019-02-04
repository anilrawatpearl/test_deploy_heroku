const express = require('express')
var app = express()

app.use(express.static(__dirname + '/dist'));


var data = {
    a: 1,
    b: 2,
    c: 3
}

app.get('/json', function(req,res) {
    res.json(data);
});

app.get('/*', function(req,res) {
    res.sendFile(__dirname+'/dist/mypr/index.html');
});



app.listen(process.env.PORT || 3000);

