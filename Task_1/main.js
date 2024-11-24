const menuBTN= document.getElementById("menu-btn");
const navLinks= document.getElementById("nav-links");
const menuBTNIcon= menuBTN.querySelector("i");


menuBTN.addEventListener("click", (e) =>{
    e.preventDefault();
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

 menuBTNIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line" );
    });

    navLinks.addEventListener("click", (e) =>{
        navLinks.classList.remove("open");
        menuBTNIcon.setAttribute("class", "ri-menu-line");
        });


const scrollRevealOption = {
            distance: "60px",
            origin: "bottom",
            duration: 1000,
            
        };
ScrollReveal().reveal(".header-image",{
    ...scrollRevealOption,
    origin: "right",

} );

ScrollReveal().reveal(".header-content h1",{
    ...scrollRevealOption,
    delay: 500,
} );
ScrollReveal().reveal(".header-content p",{
    ...scrollRevealOption,
    delay:1000,
} );
ScrollReveal().reveal(".header-content form",{
    ...scrollRevealOption,
    delay:1500,

} );

ScrollReveal().reveal(".header-content bar",{
    ...scrollRevealOption,
    delay:2500,

} );

ScrollReveal().reveal(".header-image-card",{
    duration: 1000,
    interval: 500,
    delay: 500,

} );
