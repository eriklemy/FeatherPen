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

// mudar de paginas mantendo o storage
function mudarPaginaLogin(){
    window.location.href = "pages/login.html";
}

// converter para JSON antes de colocar no storage p/reconhecer como objeto
function mudarPaginaCart(){
    window.location.href = "pages/produtos.html";
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

// // dark mode 
// function darkModeToggle() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }