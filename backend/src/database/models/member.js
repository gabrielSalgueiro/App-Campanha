var mongoose = require("mongoose");

var memberSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    wpp: String,
    team: String,
    image: String,
    course: String
});

module.exports = mongoose.model("Member", memberSchema);