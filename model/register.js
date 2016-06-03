var mongoose = require('mongoose');
var Schema = mongoose.Schema;




var registerSchema = new Schema({

	fname:{
		type:String,
		required:true
	},
	lname:{
		type:String,
		required:true
	},
	number: {
		type:Number,
		required:true
	},
	status: {
		type:String,
		required:true
	},
	
	linumber:{
		type:String,
		required:true
	},
	vehtype:{
		type:String,
		required:true
	},
	address: {
		type:String,
		required:true
	}

},{
	timestamps: true
});

var Registers = mongoose.model('Register',registerSchema);

module.exports = Registers;