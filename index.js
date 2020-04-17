const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use('/assets',express.static('assets')); // Static files (should be separated from the server code)

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: __dirname
    })
})

app.listen(3001);