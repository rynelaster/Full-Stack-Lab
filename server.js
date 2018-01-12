const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser')

const methodOverride = require('method-override')


// DB Stuff
mongoose.connect('mongodb://localhost:27017/tacos', {useMongoClient: true })
// Check said DB
mongoose.connection.once('open', (req, res)=>{
	console.log('Connected to Mongo')
})

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


// This is our MODEL
const Taco = require('./models/tacos.js');

// INDEX Route
app.get('/tacos', (req, res)=>{
	Taco.find({}, (err, allTacos)=>{
		if(err)console.log(err)
			console.log(allTacos)
		res.render('index.ejs', {tacos: allTacos})
	})
})

// This is our NEW Route
app.get('/tacos/new', (req, res)=>{
	res.render('new.ejs', )
})

// POST Route
app.post('/tacos/', (req, res) =>{
	if (req.body.isSpicy === 'on') {
		req.body.isSpicy = true
	} else {
		req.body.isSpicy = false
	}


// create a new TACO
Taco.create(req.body, (err, createdTaco) =>{
	if(err) console.log(err)
	// res.send(req.body)
	console.log(req.body)
	res.redirect('/tacos')
	})

})




// SHOW Route
app.get('/tacos/:id', (req, res)=>{
	Taco.findById(req.params.id, (err, foundTaco)=>{
	res.render('show.ejs', {taco: foundTaco})
	
	})

})



app.listen(3000, ()=>{
	console.log('listening on port 3000......')
})