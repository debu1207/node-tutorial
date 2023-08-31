const express = require('express');
const app = express();
const port = 3000;

// set ejs as the templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let data = {
        name: 'Trevor',
        hobbies: ['Playing Guitar', 'Reading books', 'Singing']
    }

    res.render('home', {data: data});
})

app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`);
});