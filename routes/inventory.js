var express = require('express');
var router = express.Router();
var Inventory = require('../models/inventory');

/* GET users listing. */
router.get('/', function (req, res, next) {
	Inventory.find({}, function (err, inventory) {
  	res.render('showInv', {
  		err: err,
  		inventory: inventory || []
  	});
	});
});

router.post('/', function (req, res, next) {
	// console.log('post...');
	Inventory.create(req.body, function (err, saved) {
		console.log(err, saved);
		res.render('addedInv', {
			err: err,
			data: saved || []
		});
	});
});

module.exports = router;
