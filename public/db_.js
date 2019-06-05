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