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

// Middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

// This is our NEW Route
app.get('/tacos/new', (req, res)=>{
	res.render('new.ejs', )
})

// Post Route
app.post('/tacos/', (req, res) =>{
	if (req.body.isSpicy === 'on') {
		req.body.isSpicy = true
	} else {
		req.body.isSpicy = false
	}
	res.send(req.body)
})








app.listen(3000, ()=>{
	console.log('listening on port 3000......')
})