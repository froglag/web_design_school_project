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

    
    function getURLParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    
    const subcategories = {
        sport: {
            title: "Sport",
            description: "Explore the latest updates and insights in the world of sports, including football, basketball, and more."
        },
        technology: {
            title: "Technology",
            description: "Stay informed about the latest innovations and trends in the tech industry."
        },
        politics: {
            title: "Politics",
            description: "Get the latest news and analysis on global politics and policies."
        },
        entertainment: {
            title: "Entertainment",
            description: "Discover the newest trends and gossip in movies, music, and celebrity culture."
        }
    };
    
    const category = getURLParameter("category");
    
    const titleElement = document.getElementById("subcategory-title");
    const descriptionElement = document.getElementById("subcategory-description");
    
    if (category && subcategories[category]) {
        titleElement.textContent = subcategories[category].title;
        descriptionElement.textContent = subcategories[category].description;
    } else {
        titleElement.textContent = "Category Not Found";
        descriptionElement.textContent = "Please check the URL or select a valid category.";
    }
    
});
function goBack() {
    window.history.back();
}
