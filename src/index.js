const express = require('express'); 
const morgan = require('morgan');
const app = module.exports = express();
const path = require('path');

// settings
app.set('port', 4000);
app.set('views',path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname,'public')));

// Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port >', app.get('port'));

});


