var database = require("../database/config")

function listarNotebooks(fkEmpresa) {
    console.log("OLHA EU AQUI NO MODEL")
    var instrucaoSql = `
    SELECT numeroSerie FROM Notebook WHERE fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterUsuarioNotebook(numeroSerie) {
    var instrucaoSql = `
    SELECT emailUsuario FROM Notebook 
    JOIN Alocacao ON fkNotebook = idNotebook
    JOIN Usuario ON fkUsuario = idUsuario
    WHERE numeroSerie = '${numeroSerie}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function obterDadosEspecificosKpis(numeroSerie) { não ajudou em nada, so quebrou o codigo
//     var instrucaoSql = `
//     SELECT usoDisco, tempoAtividadeDisco 
//     FROM RegistroUsoNotebook
//     JOIN Notebook ON RegistroUsoNotebook.fkNotebook = Notebook.idNotebook
//     WHERE Notebook.numeroSerie = '${numeroSerie}'
//     ORDER BY RegistroUsoNotebook.dtHoraCaptura DESC
//     LIMIT 1;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function obterDadosFixosEspecificos(fkEmpresa, fkNotebook) {
//     var instrucaoSql = `
//     SELECT maxDisco, maxMemoriaRam FROM InfoNotebook
//     JOIN Notebook ON InfoNotebook.fkNotebook = Notebook.idNotebook
//     WHERE InfoNotebook.fkEmpresaNotebook = ${fkEmpresa} AND InfoNotebook.fkNotebook = ${fkNotebook};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function obterDadosGraficos(numeroSerie) {
    var instrucaoSql = `
    SELECT usoCpu, usoDisco, usoMemoriaRam, qtdJanelasEmUso, 
    FORMAT(dtHoraCaptura, 'HH:mm') AS dtHoraCaptura, tempoAtividadeDisco
    FROM RegistroUsoNotebook
    JOIN Notebook ON fkNotebook = idNotebook
    WHERE numeroSerie = '${numeroSerie}' 
    ORDER BY idRegistroUsoNotebook;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(numeroSerie) {
    var instrucaoSql = `SELECT usoCpu, usoDisco, tempoAtividadeDisco, usoMemoriaRam, qtdJanelasEmUso, FORMAT(dtHoraCaptura, 'HH:mm') as momento_grafico FROM RegistroUsoNotebook
    JOIN notebook ON fkNotebook = idNotebook WHERE numeroSerie = '${numeroSerie}' ORDER BY idRegistroUsoNotebook DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarNotebooks,
    obterUsuarioNotebook,
    // obterDadosEspecificosKpis,
    // obterDadosFixosEspecificos,
    obterDadosGraficos,
    buscarMedidasEmTempoReal
};

