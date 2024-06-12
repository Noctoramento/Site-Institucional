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
  empresaModel.listarFuncionarios().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listarMaquinas(req, res) {
  empresaModel.listarMaquinas().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listarAlocadas(req, res) {
  empresaModel.listarAlocadas().then((resultado) => {
    res.status(200).json(resultado);
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
  listarMaquinas,
  listarAlocadas,
  trazerParametros
};
