var mongoose = require('mongoose')
var Schema = mongoose.Schema

const CardSchema = new Schema({
    listId: {
        type: String,
        required: 'Please fill the listId'
    },
    title: {
        type: String,
        required: 'Please fill the titles'
    }
})

module.exports = mongoose.model('cards', CardSchema)