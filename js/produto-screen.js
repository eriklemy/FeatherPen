var listaProdutos = [];
var carrinho = [];
var cadastro = [];
// ao carregar a pagina
window.onload = function(){
    listaProdutos = JSON.parse(window.localStorage.getItem("produtos"));
    cadastro = JSON.parse(window.localStorage.getItem("cadastro"));
    checkInCart();
    montarCardProdutos();
}

function montarCardProdutos(){
    document.getElementById("div-produtos").innerHTML = "";
    for(var i = 0; i < listaProdutos.length; i++){
        var conteudo = "";
        conteudo += '<div class = "div-card-produtos">';
        conteudo += '<div class = "div-card-img">';
        conteudo += '<img src = "../images/' + listaProdutos[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div class = "div-card-description">';
        conteudo +=  '' + listaProdutos[i][1];
        conteudo += '</div>';
        conteudo +=  '<div> R$ ' + listaProdutos[i][3];
        conteudo += '</div>';

        if(listaProdutos[i][4] == false){
            conteudo += '<div class = div-card-button-comprar onclick = "comprar(' + listaProdutos[i][0] + ')">';
            conteudo += 'Adicionar ao carrinho';
            conteudo += '</div>';    
        } else {
            conteudo += '<div class = div-card-button-carrinho>';
            conteudo += 'produto no carrinho';
            conteudo += '</div>';    
        }
        conteudo += '</div>';

        document.getElementById("div-produtos").innerHTML += conteudo;
    }
}

function comprar(id){
    if(cadastro[5] == true){
        listaProdutos[id][4] = true;
        carrinho.push(listaProdutos[id]);
        
        // converter para JSON antes de colocar no storage p/reconhecer como objeto
        window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
        montarCardProdutos();
    } else alert("É necessario estar logado para comprar!!");
}

function checkInCart(){
    for(var i = 0; i < listaProdutos.length; i++){
        if(listaProdutos[i][4] == true){
            carrinho.push(listaProdutos[i]);
            window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
        }
        else continue;
    }
}

function mudarPaginaCart(){
    window.location.href = "carrinho.html";
}