//requiring express
const express = require('express');

//set up express app
const app = express();

//register view engine 
app.set('view engine', ejs);

//listen for requests
app.listen(3000);

app.get('/', (req, res) =>{
    res.render('index');
})