var listaProdutos = [[0, 'Capricci Crown', 'capricci-crown.jpg', '149.40', false],
                     [1, 'Compactor gold', 'compactor-gold.jpeg', '239.99', true],
                     [2, 'Faber Castell Loom', 'faber-castell-loom.jpg', '99.99', false],
                     [3, 'Jinho 650', 'Jinhao-650.jpg', '60.99', false],
                     [4, 'Pelikan jazz', 'pelikan-jazz.jpg', '87.10', false],
                     [5, 'Pilot Kakuno', 'pilot-kakuno.jpg', '119.00', false],
                     [6, 'Monteverde Invincia', 'monteverde-invincia.jpg', '613.86', false],
                     [7, 'Xezo Maestro', 'xezo-maestro.jpg', '1,546.78', false]];

var lista = [];
var cadastro = [];
window.onload = function(){
    cadastro = JSON.parse(window.localStorage.getItem("cadastro"));
    for(var i = 0; i < listaProdutos.length; i++){
        lista.push(listaProdutos[i]);
        window.localStorage.setItem("produtos", JSON.stringify(lista));
    }
    viewMostSell();
}

// script menu mobile
var menuNavbar = document.getElementById("menuNavbar");
menuNavbar.style.maxHeight = "0px";

function menuToggle(){
    if(menuNavbar.style.maxHeight == "0px"){
        menuNavbar.style.maxHeight = "200px";
    } else {
        menuNavbar.style.maxHeight = "0px";
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

function feedBack(){
    var Feedback = [];
    var feed = document.getElementById("feed").value;
    if(feed != ""){
        Alert("Agradecemos o seu feedback");
        Feedback.push(feed);
        window.localStorage.setItem("FeedbackStorage",JSON.stringify(FeedbackStorage));
    }
}


// mudar de paginas mantendo o storage
function mudarPaginaLogin(){
    window.location.href = "pages/login.html";
}

// converter para JSON antes de colocar no storage p/reconhecer como objeto
function mudarPaginaProd(){
    window.location.href = "pages/produtos.html";
}


// darkmode configuration
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
};

if(darkMode === 'enabled') {
    enableDarkMode();
};

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
        console.log("ok");
    } else {
        console.log("ko");
        disableDarkMode();
    }
});