var listaProdutos = [[0, 'O preço da verdade', 'preco_da_verdade.jpg', false],
                     [1, 'Dunkirk', 'dunkirk.jpg', true],
                     [2, 'Resgate', 'resgate.jpg', false],
                     [3, 'Dunkirk', 'dunkirk.jpg', true],
                     [4, 'Resgate', 'resgate.jpg', false],
                     [5, 'Resgate', 'resgate.jpg', false]];

var carrinho = [];

// ao carregar a pagina
window.onload = function(){
    viewMostSell();
    const theme = localStorage.getItem('dark-mode');
    if(theme) {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
}

function viewMostSell(){
    document.getElementById("div-produtos").innerHTML = "";
    for(var i = 0; i < 4; i++){
        var conteudo = "";
        conteudo += '<div class = "div-card">';
        conteudo += '<div class = "div-card-img">';
        conteudo += '<img src = "images/' + listaProdutos[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div class = "div-card-description">';
        conteudo +=  'Filme: ' + listaProdutos[i][1];
        conteudo += '</div>';

        if(listaProdutos[i][3] == false){
            conteudo += '<div class = div-card-button-comprar onclick = "comprar(' + listaProdutos[i][0] + ')">';
            conteudo += 'Adicionar ao carrinho';
            conteudo += '</div>';    
        } else {
            conteudo += '<div class = div-card-button-carrinho>';
            conteudo += 'produto ja no carrinho';
            conteudo += '</div>';    
        }
        conteudo += '</div>';

        document.getElementById("div-produtos").innerHTML += conteudo;
    }
}

function montarCardProdutos(){
    document.getElementById("div-produtos").innerHTML = "";
    for(var i = 0; i < listaProdutos.length; i++){
        var conteudo = "";
        conteudo += '<div class = "div-card">';
        conteudo += '<div class = "div-card-img">';
        conteudo += '<img src = "images/' + listaProdutos[i][2] + '" />';
        conteudo += '</div>';
        conteudo += '<div class = "div-card-description">';
        conteudo +=  'Filme: ' + listaProdutos[i][1];
        conteudo += '</div>';

        if(listaProdutos[i][3] == false){
            conteudo += '<div class = div-card-button-comprar onclick = "comprar(' + listaProdutos[i][0] + ')">';
            conteudo += 'Adicionar ao carrinho';
            conteudo += '</div>';    
        } else {
            conteudo += '<div class = div-card-button-carrinho>';
            conteudo += 'produto ja no carrinho';
            conteudo += '</div>';    
        }
        conteudo += '</div>';

        document.getElementById("div-produtos").innerHTML += conteudo;
    }
}

function comprar(id){
    // alert("colocou no carrinho " + id + " => " + listaProdutos[id][1]);
    listaProdutos[id][3] = true;
    carrinho.push(listaProdutos[id]);

    // converter para JSON antes de colocar no storage p/reconhecer como objeto
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
    montarCardProdutos();
}

function mudarPaginaCart(){
    window.location.href = "index.html";
}