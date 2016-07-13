var util = require('util');
var db = require('./../db.js');

exports.index = function(req, res) {
    res.render('empty', {title: 'Customers page', firstPara: 'This is the home page content'} );
};

exports.show = function(req, res) {
    res.render('customers', {title: 'Customers page', firstPara: 'This is the customer page content', customers: db.listCustomers()} );
};
