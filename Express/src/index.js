const bodyParser = require("body-parser");
const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users',require('./routes/users'));
app.use('/api/charac',require('./routes/characters'));
app.use('/api/relation',require('./routes/user_char'));

app.listen(app.get('port'), ()=>{
    console.log('server in port ', app.get('port'));
});
