var express = require("express");
var router = express.Router();

var notebookController = require("../controllers/notebookController");

router.post("/listarNotebooks", function (req, res) {
    notebookController.listarNotebooks(req, res);
});

module.exports = router;

// {rota direciona pro controller, ontroler controla o que vei do sql e o que vai pra aplicacao,
//  sql trouze isso eu vou retornar isso. 
//  O model e onde vou conectar com o banco, onde vai meu select}
// O post envia informação pro banco e o get puxa de lá