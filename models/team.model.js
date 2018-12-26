"use strict";
const mongoose = require("mongoose");

//describes the data type
const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    members: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hacker"
        }],
        validate: [validateTeamSize, "{PATH} exceeds the limit"]
    },
    devpostURL: {
        type: String,
        default: undefined,
    },
    projectName: String
});

function validateTeamSize(membersArr) {
    return membersArr.length <= MAX_TEAM_SIZE;
}

TeamSchema.methods.toJSON = function () {
    const ts = this.toObject();
    delete ts.__v;
    ts.id = ts._id;
    delete ts._id;
    return ts;
};
//export the model
module.exports = mongoose.model("Team", TeamSchema);