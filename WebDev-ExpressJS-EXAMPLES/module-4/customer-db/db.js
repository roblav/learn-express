var customerDb = {
    1: {
        name: 'Rob Lav',
        email: 'rob@mail.com'
    },
    2: {
        name: 'Jim Bob',
        email: 'jim@mail.com'
    }
};

var id_inc = 0;

exports.listCustomers = function () {
    return customerDb;
};

exports.addCustomer = function (customer) {
    id_inc = id_inc + 1;
    customer.id = id_inc;
    customerDb[customer.id] = customer;
};


exports.getCustomerById = function (id) {
    return customerDb[id];
};

exports.deleteCustomer = function (id) {
    customerDb[id].remove();
};

exports.updateCustomer = function (customer) {
    customerDb[customer.id] = customer;
}
