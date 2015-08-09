var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Inventory = new Schema({
	pepElement: {
		type: String,
		required: true
	},
	productor: {
		type: String
	},
	zone: String,
	category: String,
	subCategory: String,
	activity: String,
	kind: String,
	ownThird: {
		type: String,
		enum: ['Propio', 'Tercero']
	},
	hoursMen: Number,
	machine: String,
	hoursMachine: Number,
	supplies: String,
	quantity: Number,
	measure: String,
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
}, {
	collection: 'inventory'
});

Inventory.pre('save', function(next) {
	this.updatedAt = new Date();
	next();
});

Inventory.methods.update = function(content, next) {
	this.set(content);
	this.save(next);
};

module.exports = mongoose.model('Inventory', Inventory);