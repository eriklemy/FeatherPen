var cadastro = [];
window.onload = function(){
    cadastro = JSON.parse(window.localStorage.getItem("cadastro"));
}

function acessar(){
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    console.log(nome);
    console.log(senha);

    if(nome == cadastro[0] && senha == cadastro[4]){
        alert("login realizado com sucesso!!");
        window.location.href = "produtos.html";
    } else alert("usuario ou senha incorreto!!");
}