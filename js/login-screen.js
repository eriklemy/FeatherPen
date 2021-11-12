var cadastro = [];
window.onload = function(){
    cadastro = JSON.parse(window.localStorage.getItem("cadastro"));
}

let darkMode = window.localStorage.getItem("darkMode");
if(darkMode === 'enabled'){
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const entrar = document.querySelector('#entrar');

entrar.addEventListener('click', () => {
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;

    if(username === cadastro[3] && senha === cadastro[4]){
        alert("login realizado com sucesso!!");
        cadastro[5] = true;
        window.location.href = "produtos.html";
    } else alert("usuario ou senha incorreto!!");
});

