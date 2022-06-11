function clicou() {
    let divMenu = document.querySelector("ul");
    if(divMenu.classList.contains("listMenu") == false) {
        divMenu.classList.add("listMenu");
    } else {
        divMenu.classList.remove("listMenu");
    }
};
document.querySelector(".menumobile").addEventListener('click', clicou);