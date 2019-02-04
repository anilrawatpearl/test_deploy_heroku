const express = require('express')
var app = express()

app.use(express.static(__dirname + '/dist'));


app.get('/*', function(req,res) {
    res.sendFile(__dirname+'/dist/mypr/index.html');
});

app.listen(process.env.PORT || 3000);
