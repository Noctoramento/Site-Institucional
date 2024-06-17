var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});


router.post("/cadastrarFuncionario", function (req, res) {
    usuarioController.cadastrarFuncionario(req, res);
});

router.post("/cadastrarMaquina", function (req, res) {
    usuarioController.cadastrarMaquina(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/atualizarFuncionario", function (req, res) {
    usuarioController.atualizarFuncionario(req, res);
});

router.post("/apagarFuncionario", function (req, res) {
    usuarioController.apagarFuncionario(req, res);
});

router.post("/atualizarMaquina", function (req, res) {
    usuarioController.atualizarMaquina(req, res);
});

router.post("/apagarMaquina", function (req, res) {
    usuarioController.apagarMaquina(req, res);
});

router.post("/alocarFuncionario", function (req, res) {
    usuarioController.alocarFuncionario(req, res);
});

router.post("/apagarAlocacao", function (req, res) {
    usuarioController.apagarAlocacao(req, res);
});

router.get("/trazerInfosNotebooks/:idEmpresa", function (req, res) {
    console.log("Estou na ROTAAAA");
    usuarioController.trazerInfoNotebooks(req, res);
});

module.exports = router;