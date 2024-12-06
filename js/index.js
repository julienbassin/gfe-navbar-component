document.addEventListener("DOMContentLoaded", () =>{
    const menuButton = document.getElementById("mobile-menu-button");
    const closeButton = document.getElementById("mobile-close-menu-button");
    const slideOutMenu = document.getElementById("slideout-menu");

    menuButton?.addEventListener("click", () => {
        slideOutMenu.style.display  = "block";
    });

    // close the menu

    closeButton?.addEventListener("click", () => {
        slideOutMenu.style.display = "none";
    });
})
