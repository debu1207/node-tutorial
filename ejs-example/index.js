const express = require('express');
const path = require('path');
const app = express();

app.engine('.html', require('ejs'.__express));

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');

const users = [
    { name: 'tobi', email: 'tobi@learnboost.com' },
    { name: 'loki', email: 'loki@learnboost.com' },
    { name: 'jane', email: 'jane@learnboost.com' }
]

app.get('/', function(req, res){
    res.render('users', {
      users: users,
      title: "EJS example",
      header: "Some users"
    });
  })

app.listen(3000, ()=> {console.log('Listening on port 3000')});