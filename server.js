const express = require('express');

const app = express();

const mongoose = require('mongoose');


// DB Stuff
mongoose.connect('mongodb://localhost:27017/tacos', {useMongoClient: true })
// Check said DB
mongoose.connection.once('open', (req, res)=>{
	console.log('Connected to Mongo')
})

// This is our NEW Route
app.get('/tacos/new', (req, res)=>{
	res.render('new.ejs', )
})










app.listen(3000, ()=>{
	console.log('listening on port 3000......')
})