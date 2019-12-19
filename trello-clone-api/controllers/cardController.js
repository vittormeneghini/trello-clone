var mongoose = require('mongoose'),
    Card = mongoose.model('cards')


exports.getAllByList = function(req, res){
    const {listId} = req.params
    Card.find({"listId": listId}, (err, list) => {
        if(err)
            res.send(err)
        res.json(list)
    })
}

exports.post = function(req, res){
    const {listId} = req.params
    let new_card = new Card(req.body)
    new_card.save(function(err, list){
        if(err)
            res.send(err)
        res.json(list)
    })
}

exports.put = function (req, res){
    const {cardId} = req.params;
    Card.findOneAndUpdate({_id: cardId}, req.body, {new: true}, function(err, board){
        if(err)
            res.send(err)
        res.json(board)
    })
}

exports.delete = function(req, res){
    const {cardId} = req.params;
    Card.findByIdAndRemove({
        _id: cardId
    }, function(err, board){
        if(err)
            res.send(err)
        res.json({message: 'Card was successfully deleted'})
    })
}