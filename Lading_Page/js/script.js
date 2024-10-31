document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll(".page-transition");
    pages.forEach(page => {
        page.classList.add("active");
    });
});
