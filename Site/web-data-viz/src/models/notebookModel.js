var database = require("../database/config")

function trazerInfoNotebooks(fkEmpresa) {
    var instrucaoSql = `
    SELECT * FROM Notebook WHERE fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarNotebooks(fkEmpresa) {
    var instrucaoSql = `
    SELECT numeroSerie FROM Notebook WHERE fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function trazerInfoUsoEspecifico(fkEmpresa, fkNotebook) {
    var instrucaoSql = `
    SELECT * FROM RegistroUsoNotebook
    JOIN Notebook ON RegistroUsoNotebook.fkNotebook = Notebook.idNotebook
    WHERE RegistroUsoNotebook.fkEmpresa = ${fkEmpresa} AND RegistroUsoNotebook.fkNotebook = ${fkNotebook};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function InfoUsoEspecifico(fkEmpresa, fkNotebook) {
    var instrucaoSql = `
    SELECT tempoAtividadeDisco FROM RegistroUsoNotebook
    JOIN Notebook ON RegistroUsoNotebook.fkNotebook = Notebook.idNotebook
    WHERE RegistroUsoNotebook.fkEmpresa = ${fkEmpresa} AND RegistroUsoNotebook.fkNotebook = ${fkNotebook};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function trazerInfoKpis(numeroSerie) {
    var instrucaoSql = `
    SELECT tempoAtividadeDisco, usoDisco FROM RegistroUsoNotebook r
	JOIN notebook
    ON fkNotebook = idNotebook
    WHERE numeroSerie = ${numeroSerie};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDadosGrafico(numeroSerie) {
    var instrucaoSql = `
    SELECT usoCpu, usoDisco, usoMemoriaRam, tempoAtividadeDisco, qtdJanelasEmUso, DATE_FORMAT(dtHoraCaptura, '%H:%i') as dataHora FROM RegistroUsoNotebook r
	JOIN notebook
    ON fkNotebook = idNotebook
    WHERE numeroSerie = ${numeroSerie} ORDER BY idRegistroUsoNotebook;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function trazerInfoUsuario(numeroSerie) {
    var instrucaoSql = `
        select emailUsuario from notebook join alocacao ON fkNotebook = idNotebook JOIN usuario on fkUsuario = idUsuario WHERE numeroSerie = ${numeroSerie};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(numeroSerie) {

    var instrucaoSql = `SELECT usoCpu, usoDisco, tempoAtividadeDisco, usoMemoriaRam, qtdJanelasEmUso, DATE_FORMAT(dtHoraCaptura, '%H:%I') as momento_grafico FROM RegistroUsoNotebook
    JOIN notebook ON fkNotebook = idNotebook WHERE numeroSerie = ${numeroSerie} ORDER BY idRegistroUsoNotebook DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    trazerInfoNotebooks,
    listarNotebooks,
    trazerInfoUsoEspecifico,
    InfoUsoEspecifico,
    trazerInfoKpis,
    obterDadosGrafico,
    trazerInfoUsuario,
    buscarMedidasEmTempoReal
}
