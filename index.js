const ham = document.querySelector(".hamburger");
const menu = document.querySelector("header ul");
const menuItem = document.querySelectorAll(".menu-item");

ham.addEventListener("click", () => {
    toggle();
});

menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (menuBtn.classList.contains("open")) {
            toggle();
        }
    });
});

function toggle() {
    ham.classList.toggle("open");
    menu.classList.toggle("open");
}