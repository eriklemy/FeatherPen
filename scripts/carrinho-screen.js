// manter storage atualizado 
var listaCarrinho = []
window.onload = function(){
    // retornar para o formato js 
    listaCarrinho = JSON.parse(window.localStorage.getItem("carrinho"));
    montarCardProdutos();
}

function montarCardProdutos(){
    document.getElementById("div-carrinho").innerHTML = "";
    for(var i = 0; i < listaCarrinho.length; i++){
        var conteudo = "";
        conteudo += '<div class = "div-card">';
        conteudo += '<div class = "div-card-img">';
        conteudo += '<img src = "../images/' + listaCarrinho[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div class = "div-card-description">';
        conteudo +=  '' + listaCarrinho[i][1];
        conteudo += '</div>';
        conteudo +=  '<div> <br>R$ ' + listaProdutos[i][3];
        conteudo += '</div>';

        if(listaCarrinho[i][4] == true){
            conteudo += '<div class = div-card-button-carrinho>';
            conteudo += 'produto ja no carrinho';
            conteudo += '</div>';    
        }
        conteudo += '</div>';

        document.getElementById("div-carrinho").innerHTML += conteudo;
    }
}

function mudarPaginaCart(){
    window.location.href = "../index.html";
}