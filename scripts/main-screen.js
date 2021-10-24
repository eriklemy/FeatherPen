var listaProdutos = [[0, 'O preço da verdade', 'preco_da_verdade.jpg', false],
                     [1, 'Coringa', 'coringa.jpg', false],
                     [2, 'Dunkirk', 'dunkirk.jpg', true],
                     [3, 'Coringa', 'coringa.jpg', false],
                     [4, 'Dunkirk', 'dunkirk.jpg', true],
                     [5, 'Coringa', 'coringa.jpg', false],
                     [6, 'Dunkirk', 'dunkirk.jpg', true],
                     [7, 'Resgate', 'resgate.jpg', false]];

var lista = [];
window.onload = function(){
    for(var i = 0; i < listaProdutos.length; i++){
        lista.push(listaProdutos[i]);
        window.localStorage.setItem("produtos", JSON.stringify(lista));
    }
}

function mudarPaginaCart(){
    // converter para JSON antes de colocar no storage p/reconhecer como objeto
    window.location.href = "produtos.html";
}
