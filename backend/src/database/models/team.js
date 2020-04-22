var mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
    name: String,
    shortName: String,
    description: String,
    score: Number
});

module.exports = mongoose.model("Team", teamSchema);