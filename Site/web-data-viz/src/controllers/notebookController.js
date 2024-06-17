var notebookModel = require("../models/notebookModel");

// function trazerInfoNotebooks(req, res) {
//     var idEmpresa = req.params.idEmpresa;
//     console.log(idEmpresa + "id da empresa no controller de notebook")

    
//     notebookModel.trazerInfoNotebooks(idEmpresa)
//         .then(
//             function (resposta) {
//                 if (resposta.length == 0) {
//                     res.status(403).send("Nenhuma Máquina Cadastrada!");
//                 } else {
//                     console.log("ENTREI NO TRAZER")
//                     res.status(200).json(resposta);
//                 }

//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("\nHouve um erro na requisição de máquinas cadastradas. Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

function trazerInfoKpis(req, res) {
    var numeroSerie = req.params.numeroSerie;

    notebookModel.trazerInfoKpis(numeroSerie)
        .then(
            function (resposta) {
                if (resposta.length == 0) {
                    res.status(403).send("Nenhuma Máquina Cadastrada!");
                } else {
                    console.log("ENTREI NO TRAZER")
                    res.status(200).json(resposta);
                }

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro na requisição de máquinas cadastradas. Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function trazerInfoUsoEspecifico(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;
    var fkNotebook = req.body.fkNotebookServer; 

    notebookModel.trazerInfoUsoEspecifico(fkEmpresa, fkNotebook)
        .then(
            function (resposta) {
                if (resposta.length == 0) {
                    res.status(403).send("Nenhuma Máquina Cadastrada!");
                } else {
                    console.log("ENTREI NO TRAZER USO ESPECIFICO")
                    res.status(200).json(resposta);
                }

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro na requisição de dos registros de uso de notebooks específicos. Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function obterDadosGrafico(req, res) {
    var numeroSerie = req.params.numeroSerie;

    notebookModel.obterDadosGrafico(numeroSerie)
        .then(
            function (resposta) {
                if (resposta.length == 0) {
                    res.status(403).send("Nenhuma Máquina Cadastrada!");
                } else {
                    console.log("ENTREI NO TRAZER USO ESPECIFICO")
                    res.status(200).json(resposta);
                }

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro na requisição de dos registros de uso de notebooks específicos. Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function trazerInfoUsuario(req, res) {
    var numeroSerie = req.params.numeroSerie;

    notebookModel.trazerInfoUsuario(numeroSerie)
        .then(
            function (resposta) {
                if (resposta.length == 0) {
                    res.status(403).send("Nenhuma Máquina Cadastrada!");
                } else {
                    console.log("ENTREI NO TRAZER USO ESPECIFICO")
                    res.status(200).json(resposta);
                }

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro na requisição de dos registros de uso de notebooks específicos. Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarMedidasEmTempoReal(req, res) {

    var numeroSerie = req.params.numeroSerie;

    console.log(`Recuperando medidas em tempo real`);

    notebookModel.buscarMedidasEmTempoReal(numeroSerie).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    // trazerInfoNotebooks,
    trazerInfoUsoEspecifico,
    trazerInfoKpis,
    obterDadosGrafico,
    trazerInfoUsuario,
    buscarMedidasEmTempoReal
}