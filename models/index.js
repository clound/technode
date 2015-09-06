/**
 * Created by lenovo on 15-9-6.
 */
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/technode')
exports.User = mongoose.model('User',require('./user'))