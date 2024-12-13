document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");
    const menu = document.getElementById("menu");

    // Ouvrir le menu
    menuToggle.addEventListener("click", () => {
        menu.setAttribute("aria-expanded", "true");
    });

    // Fermer le menu
    menuClose.addEventListener("click", () => {
        menu.setAttribute("aria-expanded", "false");
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.setAttribute("aria-expanded", "false");
        }
    });
});