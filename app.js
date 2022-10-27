const express = require('express')
const bodyParser = require('body-parser')

app.use(
    bodyParser.urlencoded({
        extended: false
    }),
    express.static(path.join(__dirname, 'public')),
)

// connect database & server
let PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`MongoDB & Server is listening: ${PORT}`);