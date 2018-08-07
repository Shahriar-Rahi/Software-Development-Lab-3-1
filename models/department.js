const mongoose = require('mongoose');

const Department = mongoose.model('Department',{
	name:{
		type: String,
		required: true
	},
	facultyName:{
		type: String,
		required: true
	},
	location:{
		type: String,
		required: true
	},
	numberOfStud:{
		type: Number,
		required: true
	},
	numberOfTea:{
		type: Number,
		required: true
	}
});

module.exports = { Department };
