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

var menuNavbar = document.getElementById("menuNavbar");
menuNavbar.style.maxHeight = "0px";

function menuToggle(){
    if(menuNavbar.style.maxHeight == "0px"){
        menuNavbar.style.maxHeight = "200px";
    } else {
        menuNavbar.style.maxHeight = "0px";
    }
}