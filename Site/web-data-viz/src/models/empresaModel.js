var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listarCargos() {
  var instrucaoSql = `SELECT * FROM Cargo`;

  return database.executar(instrucaoSql);
}


function listarFuncionarios() {
  var instrucaoSql = `SELECT nomeUsuario, emailUsuario, fkCargo
  FROM Usuario;`;

  return database.executar(instrucaoSql);
}

function listarMaquinas() {
  var instrucaoSql = `SELECT numeroSerie, fabricante, modelo
  FROM Notebook;`;

  return database.executar(instrucaoSql);
}



function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(razaoSocial, cnpj) {
  var instrucaoSql = `INSERT INTO empresa (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listarCargos, listarFuncionarios, listarMaquinas };
