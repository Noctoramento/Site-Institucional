var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var emailVar = req.body.emailServer;
    var senhaVar = req.body.senhaServer;

    if (emailVar == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaVar == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(emailVar, senhaVar)
            .then(
                function (resposta) {
                    if (resposta.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(200).json(resposta);
                    }

                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    /* corpo que puxa as informações da input */
    var razaoSocialVar = req.body.razaoSocialServer;
    var cnpjVar = req.body.cnpjServer;
    var emailVar = req.body.emailServer;
    var senhaVar = req.body.senhaServer;

    if (razaoSocialVar == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cnpjVar == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (senhaVar == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (emailVar == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else {


        /*enviar para o select*/
        usuarioModel.cadastrar(razaoSocialVar, cnpjVar, emailVar, senhaVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarFuncionario(req, res) {
    var nomeVar = req.body.nomeServer;
    var emailFuncVar = req.body.emailFuncServer;
    var cargoVar = req.body.cargoServer;
    var idEmpresa = req.body.empresaServer

    if (nomeVar == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailFuncVar == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cargoVar == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else if (idEmpresa == undefined) {
        res.status(400).send("Seu idEmpresa está undefined!");
    }
    else {

        usuarioModel.cadastrarFuncionario(nomeVar, emailFuncVar, cargoVar, idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarMaquina(req, res) {
    var numeroVar = req.body.numeroServer;
    var fabricanteVar = req.body.fabricanteServer;
    var modeloVar = req.body.modeloServer
    var SoVar = req.body.SoEscolhidoServer;
    var idEmpresa = req.body.empresaServer;

    if (numeroVar == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fabricanteVar == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (modeloVar == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else if (SoVar == undefined) {
        res.status(400).send("Seu idEmpresa está undefined!");
    } else if (idEmpresa == undefined) {
        res.status(400).send("Seu idEmpresa está undefined!");
    }
    else {

        usuarioModel.cadastrarMaquina(numeroVar, fabricanteVar, modeloVar, SoVar, idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarFuncionario,
    cadastrarMaquina
}