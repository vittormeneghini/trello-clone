var mongoose = require('mongoose'),
    List = mongoose.model('lists')


exports.getAllByBoard = function(req, res){
    const {boardId} = req.params
    List.find({"boardId": boardId}, (err, list) => {
        if(err)
            res.send(err)
        res.json(list)
    })
}

exports.post = function(req, res){
    const {boardId} = req.params
    let new_list = new List(req.body)
    new_list.save(function(err, list){
        if(err)
            res.send(err)
        res.json(list)
    })
}

exports.put = function (req, res){
    const {listId} = req.params;
    List.findOneAndUpdate({_id: listId}, req.body, {new: true}, function(err, board){
        if(err)
            res.send(err)
        res.json(board)
    })
}

exports.delete = function(req, res){
    const {listId} = req.params;
    List.findByIdAndRemove({
        _id: listId
    }, function(err, board){
        if(err)
            res.send(err)
        res.json({message: 'List was successfully deleted'})
    })
}