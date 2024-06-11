
// var cnpj = input_cnpj.value;
// var razaoSocial = input_razaoSocial.value;
// var email = input_email.value;
// var senha = input_senha.value;
// var confirmacao = input_confirmacao.value;

function cadastrar(){
    var razaoSocial = input_razao_social.value;
    var email = input_email.value;
    var cnpj = input_cnpj.value;
    var senha = input_senha.value;
    var confirmacao = input_confirmacao.value;
    // console.log(razaoSocial)
    // console.log(email)
    // console.log(cnpj)
    // console.log(senha)
    // console.log(confirmacao)

    permiteCadastro = true;
  
  
  var validacaoRazaoSocial = razaoSocial.length >= 3;
  var validacaoEmail = email.indexOf('@') >= 0 && (email.indexOf('.com') >= 0 || email.indexOf('.br') >= 0);
  var validacaoCNPJ = cnpj.length == 14;
  var validacaoSenha = senha.length >= 8 && (senha.indexOf('#') >= 0 || senha.indexOf('!') >= 0 || senha.indexOf('@') >= 0 || senha.indexOf('$') >= 0 || senha.indexOf('%') >= 0 || senha.indexOf('&') >= 0 || senha.indexOf('*') >= 0);
  var validacaoConfirmacao = (confirmacao == senha) && (confirmacao.length >= 8); 


  if(validacaoRazaoSocial == true && validacaoEmail == true && validacaoCNPJ == true && validacaoSenha == true && validacaoConfirmacao == true){
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
            if(permiteCadastro){
              window.location.href = `../login.html`
          }
          }
          else{
            swal ( "Opa" ,  "Algo deu errado!" ,  "erro");
            //alert("Algum dos campos cadastrados foi preenchido errado")
            // div_nomeErrado.innerHTML = `O nome deve ter mais de dois digitos`;
            // div_emailErrado.innerHTML = `O email deve conter "@.com" ou "@.br"`;
            // div_senhaErrada.innerHTML = `A senha deve ter ao menos 7 digitos <br> e um caracter especial`;
            // div_confirmacaoErrada.innerHTML = `A confirmação deve estar igual <br> a senha cadastrada`;
            // div_cnpjErrado.innerHTML = `O CNPJ deve ter exatamente 14 digitos`;
            // div_telefone_errado.innerHTML = 'O telefone deve ter exatamente 11 digitos';
          }


} 

