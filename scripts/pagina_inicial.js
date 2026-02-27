const toggle = document.getElementById("menu-toggle");

toggle.addEventListener("change", function () {
    if (this.checked) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
});