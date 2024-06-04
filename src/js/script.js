const btn = document.querySelector(".btn-plataformas");
const ul = document.getElementById("plataformas2");

btn.addEventListener("click", () =>{
    if(ul.classList.contains("ativo")){
        ul.classList.remove("ativo");
    } else {
        ul.classList.add("ativo")
    }
})