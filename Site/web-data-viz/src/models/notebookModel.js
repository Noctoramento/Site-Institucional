var database = require("../database/config");

function trazerInfoNotebooks(idEmpresa) {
    console.log(` Id da empresa recebido na model
     ${idEmpresa};
    `)
    var instrucaoSql = `
    SELECT * FROM Notebook WHERE fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarNotebooks(fkEmpresa) {
    var instrucaoSql = `
    SELECT numeroSerie FROM Notebook WHERE fkEmpresa = '${fkEmpresa}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function trazerInfoUsoEspecifico(fkEmpresa, fkNotebook) {
    var instrucaoSql = `
    SELECT * FROM RegistroUsoNotebook
    JOIN Notebook ON RegistroUsoNotebook.fkNotebook = Notebook.idNotebook
    WHERE RegistroUsoNotebook.fkEmpresa = '${fkEmpresa}' AND RegistroUsoNotebook.fkNotebook = '${fkNotebook}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function InfoUsoEspecifico(fkEmpresa, fkNotebook) {
    var instrucaoSql = `
    SELECT tempoAtividadeDisco FROM RegistroUsoNotebook
    JOIN Notebook ON RegistroUsoNotebook.fkNotebook = Notebook.idNotebook
    WHERE RegistroUsoNotebook.fkEmpresa = '${fkEmpresa}' AND RegistroUsoNotebook.fkNotebook = '${fkNotebook}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function trazerInfoKpis(numeroSerie) {
    var instrucaoSql = `
    SELECT tempoAtividadeDisco, usoDisco FROM RegistroUsoNotebook r
    JOIN Notebook ON r.fkNotebook = Notebook.idNotebook
    WHERE numeroSerie = '${numeroSerie}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosGrafico(numeroSerie) {
    var instrucaoSql = `
    SELECT usoCpu, usoDisco, usoMemoriaRam, tempoAtividadeDisco, qtdJanelasEmUso, CONVERT(VARCHAR, dtHoraCaptura, 108) as dataHora FROM RegistroUsoNotebook r
    JOIN Notebook ON r.fkNotebook = Notebook.idNotebook
    WHERE numeroSerie = '${numeroSerie}' ORDER BY idRegistroUsoNotebook;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function trazerInfoUsuario(numeroSerie) {
    var instrucaoSql = `
    SELECT emailUsuario FROM Notebook
    JOIN Alocacao ON Notebook.idNotebook = Alocacao.fkNotebook
    JOIN Usuario ON Alocacao.fkUsuario = Usuario.idUsuario
    WHERE numeroSerie = '${numeroSerie}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(numeroSerie) {
    var instrucaoSql = `
    SELECT usoCpu, usoDisco, tempoAtividadeDisco, usoMemoriaRam, qtdJanelasEmUso, CONVERT(VARCHAR, dtHoraCaptura, 108) as momento_grafico FROM RegistroUsoNotebook
    JOIN Notebook ON fkNotebook = idNotebook
    WHERE numeroSerie = '${numeroSerie}' ORDER BY idRegistroUsoNotebook DESC OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    // trazerInfoNotebooks,
    listarNotebooks,
    trazerInfoUsoEspecifico,
    InfoUsoEspecifico,
    trazerInfoKpis,
    obterDadosGrafico,
    trazerInfoUsuario,
    buscarMedidasEmTempoReal
};