const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    id:String,
    type:String,
    amount:Number,
    date: {
        type: Date,
        default: Date.now,
    },
    desc: String,
});
const userSchema = new mongoose.Schema({
    id:String,
    name: String,
    date: {
        type: Date,
        default: Date.now,
    },
    tra: {
        type: [transactionSchema],
        default: [],
    },
});

module.exports = mongoose.model("User", userSchema);