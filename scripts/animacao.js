const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }

    });
}, {
    threshold: 0.2
});

function activateReveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    activateReveal();
});