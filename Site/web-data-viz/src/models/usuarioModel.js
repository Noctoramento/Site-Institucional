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

function cadastrarMaquina(numeroVar, fabricanteVar, modeloVar, SoVar, idEmpresa) {

    var instrucaoSql = `

    INSERT INTO Notebook (numeroSerie, marca, fkEmpresa) VALUES ('${numeroVar}', '${fabricanteVar}', '${idEmpresa}');

    `

    var instrucaoSql2 =  `

    INSERT INTO InfoNotebook (fabricante, modelo, sistemaOperacional, fkEmpresa, fkNotebook) VALUES ('${fabricanteVar}', '${modeloVar}', '${SoVar}' , '${idEmpresa}', '2');
    `
;

    console.log("Executando a instrução SQL: /n" + instrucaoSql)
    console.log("Executando a instrução SQL: /n" + instrucaoSql2)

    return database.executar(instrucaoSql)

}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarFuncionario,
    cadastrarMaquina
}