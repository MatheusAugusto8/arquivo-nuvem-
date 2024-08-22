document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links do menu de navegação
    const navLinks = document.querySelectorAll("nav ul li a");

    // Adiciona um evento de clique a cada link
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // Previne o comportamento padrão do link
            event.preventDefault();

            // Obtém o ID da seção de destino
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Realiza a rolagem suave até a seção de destino
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});