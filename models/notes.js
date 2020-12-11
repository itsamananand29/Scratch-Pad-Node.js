const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    note:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        
    }
        
})
module.exports = mongoose.model('Note', notesSchema);