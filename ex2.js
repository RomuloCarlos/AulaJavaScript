function validar() {
    var nome = cadastro.nome.value;
    var cpf = cadastro.cpf.value;
    var email = cadastro.email.value;
    var senha = cadastro.senha.value;
    var confirma = cadastro.confirma.value;

    if(nome==""){
        alert("Nome é campo de preenchimento obrigatorio!");
        cadastro.nome.focus();
        return false;
    }

    if(cpf==""){
        alert("CPF é campo de preenchimento obrigatorio!");
        cadastro.cpf.focus();
        return false;
    }

    if(cpf.length!=14){
        alert("CPF invalido!");
        cadastro.cpf.focus();
        return false;
    }
    if(email==""){
        alert("Campo E-mail é campo de preenchimento obrigatorio!");
        cadastro.email.focus();
        return false;
    }

    if(senha==""){
        alert("Campo Senha é de preenchimento obrigatorio!");
        cadastro.senha.focus();
        return false;
    }
    
    if(senha.length < 6 || senha.length > 10 ){
        alert("A senha deve ter no minimo 6 e no max 10 números");
        cadastro.senha.focus();
        return false;
    }
    if(isNaN(senha)){
        alert("A senha deve conter apenas numeros");
        cadastro.senha.focus();
        return false;
    }
    if(confirma==""){
        alert("É obrigatorio confirmar a senha");
        cadastro.senha.focus();
        return false;
    }

    if(confirma != senha){
        alert("Senhas não conferem!");
        cadastro.confirma.focus;
        return false;
    }

}