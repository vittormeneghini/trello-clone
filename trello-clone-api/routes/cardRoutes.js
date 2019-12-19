module.exports = function(app){
    var cardController = require('../controllers/cardController');

    app.route('/cards/list/:listId')
        .get(cardController.getAllByList)
        .post(cardController.post)

    app.route('/cards/:cardId')
        .put(cardController.put)
        .delete(cardController.delete)
}