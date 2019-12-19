var mongoose = require('mongoose'),
    Board = mongoose.model('boards')


exports.getAll = function (req, res) {
    Board.find({}, function (err, board) {
        if (err)
            res.send(err)
        res.json(board)
    })
}

exports.get = function (req, res) {
    const {boardId} = req.params;
    Board.findOne({"_id": boardId}, function(err, board){
        if(err)
            res.send(err)
        res.json(board)
    })
}

exports.post = function(req, res){
    let new_board = new Board(req.body)
    new_board.save(function(err, board){
        if(err)
            res.send(err)
        res.json(board)
    })
}

exports.put = function (req, res){
    const {boardId} = req.params;
    Board.findOneAndUpdate({_id: boardId}, req.body, {new: true}, function(err, board){
        if(err)
            res.send(err)
        res.json(board)
    })
}

exports.delete = function(req, res){
    const {boardId} = req.params;
    Board.findByIdAndRemove({
        _id: boardId
    }, function(err, board){
        if(err)
            res.send(err)
        res.json({message: 'Board was successfully deleted'})
    })
}