var mongoose = require("mongoose");

var frequencySchema = new mongoose.Schema({
    memberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }
});

module.exports = mongoose.model("Frequency", frequencySchema);