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
    var senhaVar = req.body.senhaServer
    var cargoVar = req.body.cargoServer;
    var idEmpresa = req.body.empresaServer

    if (nomeVar == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailFuncVar == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaVar == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cargoVar == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else if (idEmpresa == undefined) {
        res.status(400).send("Seu idEmpresa está undefined!");
    }
    else {
        usuarioModel.cadastrarFuncionario(nomeVar, emailFuncVar,senhaVar, idEmpresa, cargoVar)
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
    var idEmpresa = req.body.empresaServer;

    if (numeroVar == undefined) {
        res.status(400).send("Seu numeroVar está undefined!");
    } else if (fabricanteVar == undefined) {
        res.status(400).send("Seu fabricanteVar está undefined!");
    } else if (modeloVar == undefined) {
        res.status(400).send("Seu modeloVar está undefined!");
    } else if (idEmpresa == undefined) {
        res.status(400).send("Seu idEmpresa está undefined!");
    }
    else {

        usuarioModel.cadastrarMaquina(numeroVar, fabricanteVar, modeloVar, idEmpresa)
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

function atualizarFuncionario(req, res) {
    var nomeVar = req.body.novoNomeServer;
    var emailVar = req.body.novoEmailFuncServer;
    var senhaVar = req.body.novaSenhaServer
    var cargoVar = req.body.novoCargoServer
    var idVar = req.body.idServer

    if (nomeVar == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailVar == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaVar == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (cargoVar == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else if (idVar == undefined) {
        res.status(400).send("Seu idEmpresa está undefined!");
    }
    else {

        usuarioModel.atualizarFuncionario(nomeVar, emailVar, senhaVar, cargoVar, idVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar ao atualizar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function apagarFuncionario(req, res) {
    
    var idVar = req.body.idServer
    
    if (idVar == undefined) {
        res.status(400).send("Seu idVar está undefined!");
    }
    else {
        
        usuarioModel.apagarFuncionario(idVar)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao apagar o funcionário! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function atualizarMaquina(req, res) {
    var numeroVar = req.body.novoNumeroServer;
    var fabricanteVar = req.body.novoFabricanteServer;
    var modeloVar = req.body.novoModeloServer;
    var idVar = req.body.idServer;

    if (numeroVar == undefined) {
        res.status(400).send("Seu numeroVar está undefined!");
    } else if (fabricanteVar == undefined) {
        res.status(400).send("Seu fabricanteVar está undefined!");
    } else if (modeloVar == undefined) {
        res.status(400).send("Seu modeloVar está undefined!");
    } else if (idVar == undefined) {
        res.status(400).send("Seu idVar está undefined!");
    }
    else {

        usuarioModel.atualizarMaquina(numeroVar, fabricanteVar, modeloVar, idVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar ao atualizar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function apagarMaquina(req, res) {
    
    var idVar = req.body.idServer
    
    if (idVar == undefined) {
        res.status(400).send("Seu idVar está undefined!");
    }
    else {
        
        usuarioModel.apagarMaquina(idVar)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao apagar o funcionário! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function alocarFuncionario(req, res) {
    var idVar = req.body.idServer;
    var funcionarioVar = req.body.funcionarioServer
    var idEmpresa = req.body.empresaServer;

    if (idVar == undefined) {
        res.status(400).send("Seu idVar está undefined!");
    } else if (funcionarioVar == undefined) {
        res.status(400).send("Seu funcionarioVar está undefined!");
    } else if (idEmpresa == undefined) {
        res.status(400).send("Seu idEmpresa está undefined!");
    }
    else {

        usuarioModel.alocarFuncionario(idVar, funcionarioVar, idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar ao alocar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
  
function apagarAlocacao(req, res) {
    
    var fkNotebook = req.body.fkNotebook
    var fkEmpresaNotebook = req.body.fkEmpresaNotebook
    var fkUsuario = req.body.fkUsuario
    var fkEmpresaUsuario = req.body.fkEmpresaUsuario
    
    if (fkNotebook == undefined) {
        res.status(400).send("Seu fkNotebook está undefined!");
    } else if (fkEmpresaNotebook == undefined) {
        res.status(400).send("Seu fkEmpresaNotebook está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    }else if (fkEmpresaUsuario == undefined) {
        res.status(400).send("Seu fkEmpresaUsuario está undefined!");
    }
    else {
        
        usuarioModel.apagarAlocacao(fkNotebook, fkEmpresaNotebook, fkUsuario, fkEmpresaUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao apagar o funcionário! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function trazerInfoNotebooks(req, res) {
    var idEmpresa = req.params.idEmpresa;
    console.log(idEmpresa + "id da empresa no controller de notebook")

    
    usuarioModel.trazerInfoNotebooks(idEmpresa)
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

module.exports = {
    autenticar,
    cadastrar,
    cadastrarFuncionario,
    cadastrarMaquina,
    atualizarFuncionario,
    apagarFuncionario,
    atualizarMaquina,
    apagarMaquina,
    alocarFuncionario,
    apagarAlocacao,
    trazerInfoNotebooks,
}