var cadastro = [];

const cadastrar = document.querySelector('#confirmar');

cadastrar.addEventListener('click', () => {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;
    var senhaVerf = document.getElementById("senhaVerf").value;

    cadastro.push(nome);
    cadastro.push(sobrenome);
    cadastro.push(email);
    cadastro.push(username);
    if (verificaSenha(senha, senhaVerf) && !verificaEntrada(cadastro)) {
        cadastro.push(senha);

        window.localStorage.setItem("cadastro", JSON.stringify(cadastro));
        alert("cadastro realizado com sucesso!!");
        window.location.href = "../index.html";
    } else alert("cadastro não efetuado!!");
});

function verificaSenha(senha, senhaVerf) {
    if(senha === senhaVerf && senha != "")
        return true;
    else return false;
}

function verificaEntrada(cadastro) {
    var cont = 0;
    for(var i = 0; i < cadastro.length; i++){
        if(cadastro[i] == "")
            cont += 1;
    }
    return (cont == cadastro.length); 
}