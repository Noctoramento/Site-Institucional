var database = require("../database/config")

function listarNotebooks(fkEmpresa) {
    var instrucaoSql = `
    SELECT * FROM Notebook WHERE fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarNotebooks
}
