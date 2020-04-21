var mongoose = require("mongoose");

var memberSchema = new mongoose.Schema({
    name: String,
    realName: String,
    email: String,
    password: String,
    wpp: String,
    team: String,
    image: String,
    course: String,
    hasCar: Number,
    coord: Boolean
});

module.exports = mongoose.model("Member", memberSchema);