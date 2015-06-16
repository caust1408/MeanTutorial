var express = require('express');
    stylus = require('stylus');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str,path) {
    return stulus(str).set('filename',path);
}


    app.set('views', __dirname + '/server/views');
    app.set('view engine','jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.middleware({
        src:__dirname + '/public',
        //compile:compile
    });
    

app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res) {
    res.render('index');
});

var port = 8080;
app.listen(port);