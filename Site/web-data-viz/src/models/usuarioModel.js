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

function cadastrarFuncionario(nomeVar, emailFuncVar, idEmpresa, cargoVar) {

    var instrucaoSql = `
    INSERT INTO USUARIO (NOMEUSUARIO, EMAILUSUARIO, fkEmpresa, fkCargo) VALUES ('${nomeVar}', '${emailFuncVar}', '${idEmpresa}' , '${cargoVar}');
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

function atualizarFuncionario(nomeVar, emailVar, cargoVar, idVar) {

    var instrucaoSql = `

    UPDATE Usuario SET nomeUsuario = '${nomeVar}', emailUsuario = '${emailVar}', fkCargo = '${cargoVar}'
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



module.exports = {
    autenticar,
    cadastrar,
    cadastrarFuncionario,
    cadastrarMaquina,
    atualizarFuncionario,
    apagarFuncionario
}