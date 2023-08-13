//requiring express
const express = require('express');

//requiring morgan 
const morgan = require('morgan');  
//set up express app
const app = express();


//register view engine 
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//middleware
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) =>{
    const dogs =[
        /* {title: 'test', snippet: 'snippet'},
        {title: 'test2', snippet: 'snippet2'},
        {title: 'test3', snippet: 'snippet3'}, */

    ];
    res.render('index', {dogs});
})



app.get('/dogs/create', (req, res) => {
    res.render('create');
});

app.use((req, res) => {
    res.status(404).render('404');
})