const express = require('express');
const hbs = require('hbs');
var port = process.env.PORT || 3000;

app = express();
app.set('view-engine','hbs');
hbs.registerPartials(__dirname + '/views/partials')
 app.get('/hey',(req,res)=> {
     res.send('hey there');
 });
 app.get('/', (req,res)=> {
     res.render('index.hbs');
     });
 app.listen(port);