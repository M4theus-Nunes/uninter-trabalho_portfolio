const botaoTema = document.getElementById("botaoTema");
const botaoMenu = document.getElementById("botaoMenu");
const menuMobile = document.getElementById("menuMobile");
const linksMenu = document.querySelectorAll(".navegacao__item a");
const formulario = document.getElementById("formularioContato");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema--escuro");

    // Muda o emoji do botão
    if (document.body.classList.contains("tema--escuro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});

botaoMenu.addEventListener("click", () => {
    menuMobile.classList.toggle("ativo");
});

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        menuMobile.classList.remove("ativo");
    });
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Formulário enviado com sucesso!");

    formulario.reset();
});