var mongoose = reqire('mongoose');
var signin = new mongoose.Schema({
    name:String,
    password:String
});
var singin = new ('user',signin);
module.exports = signin;