// manter storage atualizado 
var listaCarrinho = []
window.onload = function(){
    // retornar para o formato js 
    listaCarrinho = JSON.parse(window.localStorage.getItem("carrinho"));
}

function mudarPaginaCart(){
    window.location.href = "produtos.html";
}
