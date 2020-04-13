var mongoose = require("mongoose");

var eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    team: String,
    eventGroup: String,
    date: mongoose.Schema.Types.Date,
    conclusion: String
});

module.exports = mongoose.model("Event", eventSchema);