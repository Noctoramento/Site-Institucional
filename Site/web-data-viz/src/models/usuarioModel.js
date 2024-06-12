var database = require("../database/config")

function autenticar(emailVar, senhaVar) {

    var instrucaoSql = `
        SELECT IDEMPRESA, CNPJEMPRESA, RAZAOSOCIAL, EMAIL, SENHA FROM EMPRESA WHERE EMAIL = '${emailVar}' AND SENHA = '${senhaVar}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(cnpjVar, razaoSocialVar, emailVar, senhaVar) {

    var instrucaoSql = `
        INSERT INTO EMPRESA (CNPJEMPRESA, RAZAOSOCIAL, EMAIL, SENHA) VALUES ('${cnpjVar}', '${razaoSocialVar}', '${emailVar}', '${senhaVar}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarFuncionario(nomeVar, emailFuncVar, senhaVar, idEmpresa, cargoVar) {

    var instrucaoSql = `
    INSERT INTO USUARIO (NOMEUSUARIO, EMAILUSUARIO, senhaUsuario, fkEmpresa, fkCargo) VALUES ('${nomeVar}', '${emailFuncVar}', '${senhaVar}', '${idEmpresa}' , '${cargoVar}');
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarMaquina(numeroVar, fabricanteVar, modeloVar, idEmpresa) {

    var instrucaoSql = `

    INSERT INTO Notebook (numeroSerie, fabricante, modelo, fkEmpresa) VALUES ('${numeroVar}', '${fabricanteVar}', '${modeloVar}' ,'${idEmpresa}');
    `;

    console.log("Executando a instrução SQL: /n" + instrucaoSql)
    return database.executar(instrucaoSql)



}

function atualizarFuncionario(nomeVar, emailVar, senhaVar, cargoVar, idVar) {

    var instrucaoSql = `

    UPDATE Usuario SET nomeUsuario = '${nomeVar}', emailUsuario = '${emailVar}', senhaUsuario = '${senhaVar}', fkCargo = '${cargoVar}'
     WHERE idUsuario = ${idVar};

    `;

    console.log("Executando a instrução SQL: /n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function apagarFuncionario(idVar) {

    var instrucaoSql = `
    DELETE FROM Usuario WHERE idUsuario = '${idVar}';
    `;

    console.log("Executando a instrução SQL: /n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function atualizarMaquina(numeroVar, fabricanteVar, modeloVar, idVar) {

    var instrucaoSql = `

    UPDATE Notebook SET numeroSerie = '${numeroVar}', fabricante = '${fabricanteVar}', modelo = '${modeloVar}'
     WHERE idNotebook = ${idVar};

    `;

    console.log("Executando a instrução SQL: /n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function apagarMaquina(idVar) {

    var instrucaoSql = `
    DELETE FROM Notebook WHERE idNotebook = '${idVar}';
    `;

    console.log("Executando a instrução SQL: /n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function alocarFuncionario(idVar, funcionarioVar, idEmpresa) {


    const dataUsoInicio = new Date().toISOString().slice(0, 10);

    var instrucaoSql = `
    INSERT INTO Alocacao ( dataUsoInicio, fkNotebook, fkEmpresaNotebook, fkUsuario, fkEmpresaUsuario
    ) VALUES (
      '${dataUsoInicio}',
      ${idVar}, 
      ${idEmpresa}, 
      ${funcionarioVar}, 
      ${idEmpresa}
    );
  `;

    console.log("Executando a instrução SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function apagarAlocacao(fkNotebook, fkEmpresaNotebook, fkUsuario, fkEmpresaUsuario) {

    var instrucaoSql = `
     DELETE FROM Alocacao 
            WHERE fkNotebook = ${fkNotebook} 
              AND fkEmpresaNotebook = ${fkEmpresaNotebook} 
              AND fkUsuario = ${fkUsuario} 
              AND fkEmpresaUsuario = ${fkEmpresaUsuario}`;

    console.log("Executando a instrução SQL: /n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarFuncionario,
    cadastrarMaquina,
    atualizarFuncionario,
    apagarFuncionario,
    atualizarMaquina,
    apagarMaquina,
    alocarFuncionario,
    apagarAlocacao
}