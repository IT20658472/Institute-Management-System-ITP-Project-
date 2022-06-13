const mongoose = require("mongoose")

const ClassSchema = new mongoose.Schema({
    tScheduleID: {
        type: String,
        required:true,
        unique: true
    },
    day : {
        type:String,
        required:true
    },
    sTime : {
        type:String,
        required:true
    },
    eTime : {
        type:String,
        required:true
    },
    grade : {
        type: String,
        required:true
    },
    subject : {
        type:String,
        required:true
    },
    teacher : {
        type: String,
        required:true
    },
    hallNo : {
        type:String,
        required:true
    },
    wLink : {
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Class", ClassSchema);