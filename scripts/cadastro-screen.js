var cadastro = [];

function cadastroUser(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;
    var senhaVerf = document.getElementById("senhaVerf").value;

    if (verificaSenha(senhaVerf) == true){
        cadastro.push(nome);
        cadastro.push(sobrenome);
        cadastro.push(email);
        cadastro.push(username);
        cadastro.push(senha);

        window.localStorage.setItem("cadastro", JSON.stringify(cadastro));
        alert("cadastro realizado com sucesso!!");
        window.location.href = "produtos.html";
    } else alert("cadastro não efetuado!!");
}

function verificaSenha(senhaVerf){
    if(senha == senhaVerf)
        return true;
    else return false;
}
