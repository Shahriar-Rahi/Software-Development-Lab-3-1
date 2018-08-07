const mongoose = require('mongoose');

const Faculty = mongoose.model('Faculty',{
	name:{
		type: String,
		required: true
	},
	departmentsName:{
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

module.exports = { Faculty };
