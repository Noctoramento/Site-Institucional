var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listarCargos(req, res) {
  empresaModel.listarCargos().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listarFuncionarios(req, res) {
  var idEmpresa = req.params.idEmpresa;

  empresaModel.listarFuncionarios(idEmpresa).then((resultado) => {
      res.status(200).json(resultado);
  }).catch((erro) => {
      console.error(`Erro ao listar funcionários: ${erro}`);
      res.status(500).json({ mensagem: "Erro ao listar funcionários" });
  });
}


function listarMaquinas(req, res) {
  var idEmpresa = req.params.idEmpresa;

  empresaModel.listarMaquinas(idEmpresa).then((resultado) => {
      res.status(200).json(resultado);
  }).catch((erro) => {
      console.error(`Erro ao listar máquinas: ${erro}`);
      res.status(500).json({ mensagem: "Erro ao listar máquinas" });
  });
}

function listarAlocadas(req, res) {
  var idEmpresa = req.params.idEmpresa;

  empresaModel.listarAlocadas(idEmpresa).then((resultado) => {
      res.status(200).json(resultado);
  }).catch((erro) => {
      console.error(`Erro ao listar máquinas: ${erro}`);
      res.status(500).json({ mensagem: "Erro ao listar máquinas" });
  });
}


function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var cnpj = req.body.cnpj;
  var razaoSocial = req.body.razaoSocial;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listarCargos,
  listarFuncionarios,
  listarMaquinas,
  listarAlocadas
};
