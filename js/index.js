const form = document.getElementById("form")
const input = document.getElementById("q")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const termo = input.value.trim()

    if(termo === ""){
        alert("O campo não pode ser vazio.");
        return;
    }

    const encontrado = window.find(termo);

    if(!encontrado){
        alert("Curso não encontrado.");
    }
})