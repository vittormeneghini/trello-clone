var mongoose = require('mongoose')
var Schema = mongoose.Schema

const BoardSchema = new Schema({
    name: {
        type: String,
        required: 'Please the name'
    },
    favorite: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('boards', BoardSchema)