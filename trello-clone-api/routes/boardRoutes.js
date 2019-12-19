module.exports = function(app){
    var boardController = require('../controllers/boardController');

    app.route('/boards')
        .get(boardController.getAll)
        .post(boardController.post)

    app.route('/boards/:boardId')
        .get(boardController.get)
        .put(boardController.put)
        .delete(boardController.delete)
}