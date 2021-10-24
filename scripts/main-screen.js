// manter storage atualizado 
var listaCarrinho = []
window.onload = function(){
    // retornar para o formato js 
    listaCarrinho = JSON.parse(window.localStorage.getItem("carrinho"));
}

function mudarPaginaCart(){
    window.location.href = "produtos.html";
}

var menuNavbar = document.getElementById("menuNavbar");
menuNavbar.style.maxHeight = "0px";

function menuToggle(){
    if(menuNavbar.style.maxHeight == "0px"){
        menuNavbar.style.maxHeight = "200px";
    } else {
        menuNavbar.style.maxHeight = "0px";
    }
}

var theme = [];
alert(theme[0])

const theme = localStorage.getItem('dark-mode');
if(theme) {
    darkModeToggle(theme)
}

function darkModeToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    theme.push(document.body.classList.toggle("dark-mode"));
    window.localStorage.setItem("dark-mode", JSON.stringify(theme));
}