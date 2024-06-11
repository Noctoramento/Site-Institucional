var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listarCargos() {
  var instrucaoSql = `SELECT * FROM Cargo`;

  return database.executar(instrucaoSql);
}


function listarFuncionarios(idEmpresa) {
  var instrucaoSql = `SELECT idUsuario, nomeUsuario, emailUsuario, fkEmpresa , fkCargo FROM Usuario WHERE fkEmpresa = ${idEmpresa}`;

  return database.executar(instrucaoSql);
}

function listarFuncionariosNaoAlocados(idEmpresa) {
  var instrucaoSql = `SELECT idUsuario, nomeUsuario, emailUsuario, fkEmpresa, fkCargo 
  FROM Usuario
  WHERE fkEmpresa = ${idEmpresa}
  AND idUsuario NOT IN (
  SELECT fkUsuario
  FROM Alocacao
  WHERE fkEmpresaUsuario = ${idEmpresa}
);`;

  return database.executar(instrucaoSql);
}


function listarMaquinas(idEmpresa) {
  var instrucaoSql = `SELECT idNotebook, numeroSerie, fabricante, modelo
  FROM Notebook WHERE fkEmpresa = ${idEmpresa};`;

  return database.executar(instrucaoSql);
}

function listarMaquinasNaoAlocadas(idEmpresa) {
  var instrucaoSql = `SELECT idNotebook, numeroSerie, fabricante, modelo
  FROM Notebook
   WHERE fkEmpresa = ${idEmpresa}
   AND idNotebook NOT IN (
   SELECT fkNotebook
   FROM Alocacao
   WHERE fkEmpresaNotebook = ${idEmpresa}
);`;

  return database.executar(instrucaoSql);
}

function listarAlocadas(idEmpresa) {
  var instrucaoSql = `SELECT dataUsoInicio, fkNotebook, fkUsuario, fkEmpresaUsuario
  FROM Alocacao WHERE fkEmpresaUsuario = ${idEmpresa};`;

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

function listarAlocadas() {
  var instrucaoSql = `SELECT 
    u.nomeUsuario, 
    c.nomeCargo, 
    n.numeroSerie, 
    n.modelo, 
    a.dataUsoInicio,
    a.fkNotebook,
    a.fkEmpresaNotebook,
    a.fkUsuario,
    a.fkEmpresaUsuario
FROM 
    Alocacao a
    JOIN Usuario u ON a.fkUsuario = u.idUsuario AND a.fkEmpresaUsuario = u.fkEmpresa
    JOIN Cargo c ON u.fkCargo = c.idCargo
    JOIN Notebook n ON a.fkNotebook = n.idNotebook AND a.fkEmpresaNotebook = n.fkEmpresa;`;

  return database.executar(instrucaoSql);
}


module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listarCargos, listarFuncionarios, listarFuncionariosNaoAlocados, listarMaquinas, listarMaquinasNaoAlocadas, listarAlocadas };
