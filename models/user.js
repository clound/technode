/**
 * Created by lenovo on 15-9-6.
 */
var mongoose = require('mongoose')
var schema = mongoose.Schema
var  User = new Schema({
    email:String,
    name:String,
    avataUrl:String
});
module.exports = User