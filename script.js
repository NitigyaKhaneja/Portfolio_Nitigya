document.addEventListener("DOMContentLoaded", function() {
    const backToTop = createBackToTopButton();
    const carousel = document.querySelector(".carousel");
    let scrollAmount = 0;

    window.addEventListener("scroll", toggleBackToTopVisibility);
    backToTop.addEventListener("click", scrollToTop);


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScrollAnchor);
    });

    function toggleBackToTopVisibility() {
        backToTop.style.display = (window.scrollY > 300) ? "block" : "none";
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function autoScrollCarousel() {
        scrollAmount = (scrollAmount < carousel.scrollWidth - carousel.clientWidth) ? scrollAmount + 300 : 0;
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }

    function smoothScrollAnchor(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }
    function createBackToTopButton() {
        const backToTopButton = document.createElement('button');
        backToTopButton.innerText = "↑";
        backToTopButton.id = "back-to-top";
        document.body.appendChild(backToTopButton);
        backToTopButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px;
            font-size: 20px;
            border-radius: 100%;
            background: black;
            color: rgb(0, 255, 213);
            cursor: pointer;
            display: none;
            border: none;
        `;
        return backToTopButton;
    }
});
