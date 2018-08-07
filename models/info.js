const mongoose = require('mongoose');

const Info = mongoose.model('Info',{
	departmentNames:{
		type: String,
		required: true
	},
	facultyNames:{
		type: String,
		required: true
	},
	numberOfDepts:{
		type: Number,
		required: true
	},
	numberOfFacs:{
		type: Number,
		required: true
	}
});

module.exports = { Info };
