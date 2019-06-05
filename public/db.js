const mongoose = require('mongoose')
mongoose.connect(require('./config').db_url)
let db = mongoose.connection

db.on('error', function(){
    console.error('connection error')
})

db.once('open', function callback () {
    console.log("connected");
});

function generate_id(){
    return {
        type     : mongoose.SchemaTypes.ObjectId,
        required : true,
        default  : mongoose.Types.ObjectId
    }
}

let destination_list = mongoose.model('destination_list', mongoose.Schema({
    _id     : generate_id(),
    name    : String,
    city    : String,
    country : String
}), "destination_list")

let destination_info = mongoose.model('destination_info', mongoose.Schema({
    _id         : generate_id(),
    name        : String,
    address     : String,
    facility    : [String]
}), "destination_info")

let user = mongoose.model('user', mongoose.Schema({
    _id         : generate_id(),
    email       : String,
    username    : String,
    password    : String,
    info        : mongoose.SchemaTypes.ObjectId
}), "user")

let user_info = mongoose.model('user_info', mongoose.Schema({
    _id         : generate_id(),
    profile_img : Buffer,
    name        : String,
    email       : String,
    address     : String,
    is_man      : Boolean,
    is_admin    : Boolean,
}), "user_info")


let comment = mongoose.model('comment', mongoose.Schema({
    _id             : generate_id(),
    author          : generate_id(),
    comment_content : String,
    date            : {
        type    : Date,
        default : Date.now
    }
}), "comment")

    

module.exports = {
    destination_list: destination_list,
    destination_info: destination_info,
    user: user,
    user_info: user_info,
    comment: comment,
}