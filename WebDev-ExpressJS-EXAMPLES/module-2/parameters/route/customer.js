
exports.index = function (req, res) {
    res.send('Welcome to customers!');
};

exports.create = function (req, res) {
    res.send('This page is to create customers');
};

exports.userid = function (req, res) {
    res.send('Customer ID: ' + req.params.id); // could also be req.params['id']
};

exports.queryid = function (req, res) {
    res.send('Customer ID: ' + req.query.id);
};