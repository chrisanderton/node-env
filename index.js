const express = require('express')
const app = express()

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.contentType('application/json');
    res.send(process.env);
})

app.listen(port, function () {
    console.log('Listening on port ' + port)
})
