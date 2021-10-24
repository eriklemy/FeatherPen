var listaProdutos = [[0, 'Capricci Crown', 'capricci-crown.jpg', '149.40', false],
                     [1, 'Compactor gold', 'compactor-gold.jpeg', '239.99', true],
                     [2, 'Faber Castell Loom', 'faber-castell-loom.jpg', '99.99', false],
                     [3, 'Jinho 650', 'Jinhao-650.jpg', '60.99', false],
                     [4, 'Pelikan jazz', 'pelikan-jazz.jpg', '87.10', false],
                     [5, 'Pilot Kakuno', 'pilot-kakuno.jpg', '119.00', false],
                     [6, 'Monteverde Invincia', 'monteverde-invincia.jpg', '613.86', false],
                     [7, 'Xezo Maestro', 'xezo-maestro.jpg', '1,546.78', false]];

var lista = [];
window.onload = function(){
    for(var i = 0; i < listaProdutos.length; i++){
        lista.push(listaProdutos[i]);
        window.localStorage.setItem("produtos", JSON.stringify(lista));
    }
}

function mudarPaginaCart(){
    // converter para JSON antes de colocar no storage p/reconhecer como objeto
    window.location.href = "pages/produtos.html";
}
