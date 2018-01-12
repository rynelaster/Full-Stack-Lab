const mongoose = require('mongoose');

const tacoSchema = new mongoose.Schema({
	name: {type: String, required: true},
	type: {type: String, required: true},
	isSpicy: Boolean
})


// creating a model here
const Taco = mongoose.model('Taco', tacoSchema);

// export the model
module.exports = Taco;