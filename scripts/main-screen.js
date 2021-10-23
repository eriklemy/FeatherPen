var listaProdutos = [[0, 'O preço da verdade', 'preco_da_verdade.jpg', false],
                     [1, 'Coringa', 'coringa.jpg', false],
                     [2, 'Dunkirk', 'dunkirk.jpg', true],
                     [3, 'Resgate', 'resgate.jpg', false]];

function mudarPaginaCart(){
    window.location.href = "produtos.html";
}

const btn = document.querySelector(".btn-toggle");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
});