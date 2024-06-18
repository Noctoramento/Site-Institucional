var express = require("express");
var router = express.Router();

var notebookController = require("../controllers/notebookController");

router.get("/listarNotebooks/:fkEmpresa", function (req, res) {
    console.log("Rota acessada: /listarNotebooks");
    notebookController.listarNotebooks(req, res);
});

router.get("/obterUsuarioNotebook/:fkUsuario", function (req, res) { //obter o usuario de cada notebook: usuario da maquina 
    console.log("Estou na Rota /obterUsuarioNotebook");
    notebookController.obterUsuarioNotebook(req, res);
});

router.get("/obterDadosEspecificosKpis/:numeroSerie", function (req, res) { //obter para as kpis de cada notebook: o disco em uso e o tempo de atividade do disco
    console.log("Estou na Rota /obterDadosEspecificosKpis");
    notebookController.obterDadosEspecificosKpis(req, res);
})

// router.get("/obterDadosFixosEspecificos/:numeroSerie", function (req, res) { //obter de cada notebook para validações dos parametros: a capacidade do disco e a capacidade da memória ram
//     console.log("Estou na Rota /obterDadosFixosEspecificos");
//     notebookController.obterDadosFixosEspecificos(req, res);
// })

router.get("/obterDadosGraficos/:numeroSerie", function (req, res) { //obter de cada notebook para usar nos graficos: memoria em uso, cpu em uso, janelas ativas, capacidade da ram
    console.log("Estou na Rota /obterDadosGraficos");
    notebookController.obterDadosGraficos(req, res);
});

router.get("/buscarMedidasEmTempoReal/:numeroSerie", function (req, res) {
    console.log("Estou na Rota /buscarMedidasEmTempoReal");
    notebookController.buscarMedidasEmTempoReal(req, res);
});

module.exports = router;