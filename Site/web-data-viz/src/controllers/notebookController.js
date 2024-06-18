var notebookModel = require("../models/notebookModel");

function listarNotebooks(req, res) {
    console.log("Controller acessado: listarNotebooks");
    var fkEmpresa = req.params.fkEmpresa;
    console.log("fkEmpresa recebida: " + fkEmpresa);

    notebookModel.listarNotebooks(fkEmpresa)
        .then(function (resposta) {
            console.log("Resposta do model: ", resposta);
            if (resposta.length == 0) {
                res.status(403).send("Nenhum notebook cadastrado");
            } else {
                res.status(200).json(resposta);
            }
        })
        .catch(function (erro) {
            console.log("Erro no controller: ", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterUsuarioNotebook(req, res) {
    var fkUsuario = req.params.fkUsuario;
    console.log("TO NO CONTROLLER DO OBTER USUARIOOO");
    notebookModel.obterUsuarioNotebook(fkUsuario)
        .then(
            function (resposta) {
                if (resposta.length == 0) {
                    res.status(403).send("Deu ruim na function obterUsuarioNotebook() no controller!");
                } else {
                    res.status(200).json(resposta);
                }

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro na requisição dos usuarios de cada notebook. Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// function obterDadosEspecificosKpis(req, res) {
//     var numeroSerie = req.params.numeroSerie;
//     console.log(numeroSerie);

//     notebookModel.obterDadosEspecificosKpis(numeroSerie)
//         .then(
//             function (resposta) {
//                 if (resposta.length == 0) {
//                     res.status(403).send("Deu ruim na function obterDadosEspecificosKpis() no controller!");
//                 } else {
//                     res.status(200).json(resposta);
//                 }

//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("\nHouve um erro na requisição dos dados das máquinas cadastradas. Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

// function obterDadosFixosEspecificos(req, res) {
//     var numeroSerie = req.params.numeroSerie;

//     notebookModel.obterDadosFixosEspecificos(numeroSerie)
//         .then(
//             function (resposta) {
//                 if (resposta.length == 0) {
//                     res.status(403).send("Deu ruim na function obterDadosFixosEspecificos() no controller!");
//                 } else {
//                     res.status(200).json(resposta);
//                 }

//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("\nHouve um erro na requisição dos dados fixos das máquinas cadastradas. Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

function obterDadosGraficos(req, res) {
    var numeroSerie = req.params.numeroSerie;
    console.log(numeroSerie);
    notebookModel.obterDadosGraficos(numeroSerie)
        .then(
            function (resposta) {
                if (resposta.length == 0) {
                    res.status(403).send("Deu ruim na function obterDadosGraficos() no controller!!");
                } else {
                    res.status(200).json(resposta);
                }

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro na requisição dos registros de uso de notebooks específicos. Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarMedidasEmTempoReal(req, res) {
    var numeroSerie = req.params.numeroSerie;
    console.log("ENTREI NO BESCAR MEDIDAS .. CONTROLLER");
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
    listarNotebooks,
    obterUsuarioNotebook,
    // obterDadosEspecificosKpis,
    // obterDadosFixosEspecificos,
    obterDadosGraficos,
    buscarMedidasEmTempoReal
};