var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height")
}
let set = document.querySelector(".settimee")
let btn = document.querySelector("button")
btn.onclick = function () {
    setInterval(() => {
        set.innerHTML -=1;
    }, 1000);
}