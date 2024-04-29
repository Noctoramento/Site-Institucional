function cadastrar(){
    var razaoSocial = input_razaoSocial.value;
    var email = input_email.value;
    var cnpj = input_cnpj.value;
    var senha = input_senha.value;
    var confirmacao = input_confirmacao.value;
    // console.log(razaoSocial)
    // console.log(email)
    // console.log(cnpj)
    // console.log(senha)
    // console.log(confirmacao)


    fetch("/usuarios/cadastrar", {  /*Requisição */
             method: "POST",
             headers: {
             "Content-Type": "application/json",
             },
             body: JSON.stringify({ 
             razaoSocialServer: razaoSocial, 
             cnpjServer: cnpj,
             emailServer: email,
             senhaServer: senha
               }),
             }).then(function (resposta) {
              console.log("ESTOU NO THEN DO entrar()!");
              window.location = 'login.html'
            })
} 

