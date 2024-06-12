var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    empresaController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  empresaController.buscarPorId(req, res);
});

router.get("/listarCargos", function (req, res) {
  empresaController.listarCargos(req, res);
});

router.get("/listarFuncionarios/:idEmpresa", function (req, res) {
  empresaController.listarFuncionarios(req, res);
});

router.get("/listarFuncionariosNaoAlocados/:idEmpresa", function (req, res) {
  empresaController.listarFuncionariosNaoAlocados(req, res);
});


router.get("/listarMaquinas/:idEmpresa", function (req, res) {
  empresaController.listarMaquinas(req, res);
});

router.get("/listarMaquinasNaoAlocadas/:idEmpresa", function (req, res) {
  empresaController.listarMaquinasNaoAlocadas(req, res);
});

router.get("/listarAlocadas/:idEmpresa", function (req, res) {
  empresaController.listarAlocadas(req, res);
});

router.post("/trazerParametros", function (req, res) {
  console.log("Estou na rota trazer parametros");
  empresaController.trazerParametros(req, res);
});

module.exports = router;