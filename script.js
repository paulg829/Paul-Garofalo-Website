
document.addEventListener("mousemove", (event) => {
    document.body.style.setProperty("--x", event.clientX + "px");
    document.body.style.setProperty("--y", event.clientY + "px");
});

const stars = document.querySelector(".stars");

for (let i = 0; i < 200; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.height = Math.random() * 3 + "px";
    star.style.width = Math.random() * 3 + "px";


    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);
}

const sections = document.querySelectorAll("section");
const nextArrow = document.getElementById("nextArrow");

window.addEventListener("scroll", () => {
    let currentSection = 0;
    
    sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (window.scrollY >= top - height / 2) {
            currentSection = index;
        }
    });

    let nextSection = (currentSection + 1) % sections.length;

    nextArrow.href = "#" + sections[nextSection].id;
});

const navLinks = document.querySelectorAll(".navlinks a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


