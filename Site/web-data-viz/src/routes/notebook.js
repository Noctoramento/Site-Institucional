var express = require("express");
var router = express.Router();

var notebookController = require("../controllers/notebookController");

router.post("/trazerInfoNotebooks", function (req, res) {
    console.log("Estou na ROTAAAA");
    notebookController.trazerInfoNotebooks(req, res);
});

router.get("/trazerInfoKpis/:numeroSerie", function (req, res) {
    notebookController.trazerInfoKpis(req, res);
});

router.get("/obterDadosGrafico/:numeroSerie", function (req, res) {
    notebookController.obterDadosGrafico(req, res);
});

router.get("/trazerInfoUsuario/:numeroSerie", function (req, res) {
    notebookController.trazerInfoUsuario(req, res);
});

router.get("/tempo-real/:numeroSerie", function (req, res) {
    notebookController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;

// {rota direciona pro controller, ontroler controla o que vei do sql e o que vai pra aplicacao,
//  sql trouze isso eu vou retornar isso. 
//  O model e onde vou conectar com o banco, onde vai meu select}
// O post envia informação pro banco e o get puxa de lá