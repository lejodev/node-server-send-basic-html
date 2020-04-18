const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/assets',express.static('assets',
    {
        // Both etag and maxAge are two kind of "identifiers" that makes faster the resource retrieving by
        // saving a copy in the browser depending on the mechanism the developer use.
        etag: false, // Alfanumeric identifier that changes if the resource data changes
        maxAge: '5h' // Is a time setted by the developer. Cache will make a query to server after that time finishes
                    //  to check if the resource has changed if yes, thre will be a new "copy" of that resource
    })); // Static files (should be separated from the server code)

app.get('/', (req, res) => {
    // res.sendFile('index.html', { // get without view engine
    //     root: __dirname
    // })
    res.render('index');
})

app.listen(3001);