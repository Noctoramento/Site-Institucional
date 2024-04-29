var database = require("../database/config")

function autenticar(emailVar, senhaVar) {
   
    var instrucaoSql = `
        SELECT IDEMPRESA, CNPJ, RAZAOSOCIAL, EMAIL, SENHA FROM EMPRESA WHERE EMAIL = '${emailVar}' AND SENHA = '${senhaVar}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(cnpjVar, razaoSocialVar, emailVar, senhaVar) {
   
    
 
    var instrucaoSql = `
        INSERT INTO EMPRESA (CNPJ, RAZAOSOCIAL, EMAIL, SENHA) VALUES ('${cnpjVar}', '${razaoSocialVar}', '${emailVar}', '${senhaVar}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
}