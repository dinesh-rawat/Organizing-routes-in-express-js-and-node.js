var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.use('/users', require('../routes/users'));
};