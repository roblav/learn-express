//var util = require('util');
var db = require('./../db.js');

exports.index = function(req, res) {
    res.render('empty', {title: 'Customers page', firstPara: 'This is the home page content'} );
};

exports.show = function(req, res) {
    res.render('customers', {title: 'Customers page', firstPara: 'This is the customer page content', customers: db.listCustomers()} );
};

exports.create = function(req, res) {
    res.render('create', {title: 'Add new customer'} );
};

exports.createCustomer = function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var telephone = req.body.telephone;
    db.addCustomer({name: name, email: email, telephone: telephone});
    res.redirect('/customer');
};

exports.details = function (req, res) {
    var id = req.params.id;
    res.render('user', {customer: db.getCustomerById(id)} );
}