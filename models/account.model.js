"use strict";
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Constants = require("../constants");
//describes the data type
const AccountSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Email address is required",
        match: [Constants.EMAIL_REGEX, "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: true
    },
    permissions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permission"
    }],
    dietaryRestrictions: [{
        type: String
    }],
    shirtSize: {
        type: String,
        enum: Constants.SHIRT_SIZES,
        required: true
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    accountType: {
        type: String,
        enum: Constants.USER_TYPES,
        default: Constants.HACKER
    }
});

AccountSchema.methods.toJSON = function () {
    const as = this.toObject();
    delete as.__v;
    as.id = as._id;
    delete as._id;
    return as;
};
//deletes password
AccountSchema.methods.toStrippedJSON = function () {
    const as = this.toJSON();
    delete as.password;
    return as;
};
/**
 * Pass in an un-encrypted password and see whether it matches the 
 * encrypted password
 * @param {String} password 
 */
AccountSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

//export the model
module.exports = mongoose.model("Account", AccountSchema);