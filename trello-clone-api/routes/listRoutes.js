module.exports = function(app){
    var listController = require('../controllers/listController');

    app.route('/lists/board/:boardId')
        .get(listController.getAllByBoard)
        .post(listController.post)

    app.route('/lists/:listId')
        .put(listController.put)
        .delete(listController.delete)
}