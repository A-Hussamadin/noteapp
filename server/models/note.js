const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const noteSchema = new Schema({
    title: {
        type: String,
        trim: true,
        default: 'Untitled Note',
    },
    text: {
        type: String,
        trim: true,
        default: null,
    },
    createdAt: {
        type: Number,
        default: new Date().getTime()
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
});

const Note = mongoose.model('Note', noteSchema);


module.exports = {
    Note,
}