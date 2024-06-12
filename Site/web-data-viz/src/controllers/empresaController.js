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

function listarFuncionariosNaoAlocados(req, res) {
  var idEmpresa = req.params.idEmpresa;

  empresaModel.listarFuncionariosNaoAlocados(idEmpresa).then((resultado) => {
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

function listarMaquinasNaoAlocadas(req, res) {

  var idEmpresa = req.params.idEmpresa;

  empresaModel.listarMaquinasNaoAlocadas(idEmpresa).then((resultado) => {
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
      console.error(`Erro ao listar alocadas: ${erro}`);
      res.status(500).json({ mensagem: "Erro ao listar alocadas" });
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

function trazerParametros(req, res) {
  var fkEmpresa = req.body.fkEmpresaServer;

  empresaModel.trazerParametros(fkEmpresa)
      .then(
          function (resposta) {
              if (resposta.length == 0) {
                  res.status(403).send("Nenhum Paramêtro Cadastrado!");
              } else {
                  console.log("ENTREI NO TRAZER PARAMÊTROS")
                  res.status(200).json(resposta);
              }

          }
      ).catch(
          function (erro) {
              console.log(erro);
              console.log("\nHouve um erro na requisição dos Parâmetros. Erro: ", erro.sqlMessage);
              res.status(500).json(erro.sqlMessage);
          }
      );
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listarCargos,
  listarFuncionarios,
  listarFuncionariosNaoAlocados,
  listarMaquinas,
<<<<<<< HEAD
  listarAlocadas,
  trazerParametros
=======
  listarMaquinasNaoAlocadas,
  listarAlocadas
>>>>>>> 21494f7e26de09c70a26e782b40da6016baa4784
};
