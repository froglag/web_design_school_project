document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("main-nav");
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    let lastScrollY = window.scrollY;


    nav.classList.add("compact");


    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {

            nav.classList.add("hidden-down");
            nav.classList.remove("hidden-up");
        } else {

            nav.classList.remove("hidden-down");
            nav.classList.add("hidden-up");


            if (currentScrollY === 0) {
                nav.classList.remove("compact");
            } else {
                nav.classList.add("compact");
            }
        }

        lastScrollY = currentScrollY;
    });


    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        navLinks.classList.toggle("active");


        if (navLinks.classList.contains("active")) {
            nav.classList.remove("compact");
        } else {
            nav.classList.add("compact");
        }
    });
});
function goBack() {
    window.history.back();
}