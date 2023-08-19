//requiring express
const express = require('express');

//requiring morgan 
const morgan = require('morgan');  

//requiring mongoose 
const mongoose = require('mongoose');

//requiring Dog Schema
const Dog = require('./models/dog'); 
 
//set up express app
const app = express();

//connect to Mongo DB

const dbURI = 'mongodb+srv://tiafields128:RUvSrUcwS775bWvZ@furryfriends.zcyiu2d.mongodb.net/DogProfiles?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine 
app.set('view engine', 'ejs');



//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) =>{
    res.redirect('/dogs' );
})

//dog routes 

app.get('/dogs', (req, res) => {
    Dog.find().sort({dogName: 1})
    .then((result) => {
        res.render('index', {dogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
});

app.post('/dogs', (req, res) => {
    const dog = new Dog(req.body);

    dog.save()
        .then((result) => {
            res.redirect('/dogs');
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/dogs/create', (req, res) => {
    res.render('create');
});

app.get('/dogs/:id', (req, res) => {
    const id = req.params.id; 
    Dog.findById(id)
    .then(result => {
        res.render('details', {dog: result});
    })
    .catch(err => {
        console.log(err);
    });
});
 


app.use((req, res) => {
    res.status(404).render('404');
})