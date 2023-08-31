const express = require('express');
const app = express();
const port = 3000;

// set ejs as the templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // the render methods takes the name of the html page
    // to be rendered as input 
    // this page should be in the views folder in the root directory.

    res.render('home');
})

app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`);
});