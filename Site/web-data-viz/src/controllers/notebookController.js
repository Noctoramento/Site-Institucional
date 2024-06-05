var notebookModel = require("../models/notebookModel");

// function listarNotebooks(req, res) {                                                                    burrice rsrs
//     notebookModel.listarNotebooks().then(function(resultado){
//         // precisamos informar que o resultado voltará para o front-end como uma resposta em json
//         res.status(200).json(resultado);
//     }).catch(function(erro){
//         res.status(500).json(erro.sqlMessage);
//     })
// }

function listarNotebooks(req, res) {
    
    var fkEmpresa = req.body.fkEmpresaServer;

        notebookModel.listarNotebooks(fkEmpresa)
            .then(
                function (resposta) {
                    if (resposta.length == 0) {
                        res.status(403).send("Nenhuma Máquina Cadastrada!");
                    } else {
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

module.exports = {
    listarNotebooks
}