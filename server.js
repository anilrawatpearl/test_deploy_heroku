const express = require('express')
var app = express()

app.use(express.static(__dirname + '/dist'));

var data = {
    user: {
        first_name: "John",
        last_name: "Appleseed"
    }
};

app.get('/api/json', function(req,res) {
    res.json(data);
});

app.get('/*', function(req,res) {
    res.sendFile(__dirname+'/dist/index.html');
});

app.listen(process.env.PORT || 3000);
