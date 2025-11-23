const form = document.getElementById("formContato")

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const msg = document.getElementById("mensagem")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const msgValue = msg.value.trim();

    if(nomeValue === "" || emailValue === "" || msgValue === ""){
        alert("Os campos: nome, email e mensagem. NÃO podem estar vazios.")
    }
})