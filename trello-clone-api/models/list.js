var moongose = require('mongoose')
var Schema = moongose.Schema

const ListSchema =  new Schema({
    boardId: {
        type: String,
        required: 'Please fill id of board'
    },
    name: {
        type: String,
        required: 'Please fill the name'
    },
    position: {
        type: String,
        default: 0
    }
})

module.exports = moongose.model('lists', ListSchema)