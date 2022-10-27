const express = require('express')
const bodyParser = require('body-parser')

const router = require('./routes/app.routes');

// set ejs to be template view engine  
app.set('view engine', 'ejs')
app.use(
    bodyParser.urlencoded({
        extended: false
    }),
    express.static(path.join(__dirname, 'public')),
)

// routes
app.use('/', router)

// connect database & server
let PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`MongoDB & Server is listening: ${PORT}`);