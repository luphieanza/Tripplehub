const mongoose = require('mongoose')
mongoose.connect(require('./config').db_url)
let db = mongoose.connection

db.on('error', function(){
    console.error('connection error')
})

db.once('open', function callback () {
    console.log("connected");
});

function generate_id(required){
    return {
        type     : mongoose.SchemaTypes.ObjectId,
        required : required,
        default  : mongoose.Types.ObjectId
    }
}


let user_id = mongoose.model('user_id', mongoose.Schema({
    _id         : generate_id(true),
    email       : String,
    password    : String
}), "user_id")

let user_profile = mongoose.model('user_profile', mongoose.Schema({
    _id               : generate_id(true),
    f_profile_img_id  : generate_id(false),
    username          : String,
    address           : String,
    is_admin          : Boolean,
    last_online       : Date,
    f_comment         : [mongoose.SchemaTypes.ObjectId],
}), "user_profile")

let profile_img = mongoose.model('profile_img', mongoose.Schema({
    _id          : generate_id(),
    small        : Buffer,
    normal       : Buffer
}), "profile_img")


let comment = mongoose.model('comment', mongoose.Schema({
    _id         : generate_id(true),
    author      : generate_id(true),
    date        : Date,
    content     : String
}), "comment")


module.exports = {
    // destination_list: destination_list,
    // destination_info: destination_info,
    user_id: user_id,
    user_profile: user_profile,
    profile: profile_img,
    comment: comment,
}