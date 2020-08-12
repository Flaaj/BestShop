var navigationBurger = document.querySelector(".navigation_burger");
var navigationList = document.querySelector(".navigation_list");
var maxWidth460 = window.matchMedia("(max-width: 460px)");

document.body.addEventListener("touchstart", function () {});

maxWidth460.addListener(function () {
    navigationList.classList.remove("show-menu");
    navigationBurger.classList.remove("burger_crossed");
});

navigationBurger.addEventListener("click", function () {
    navigationList.classList.toggle("show-menu");
    navigationBurger.classList.toggle("burger_crossed");
});

document.addEventListener("click", function (mousePosition) {
    if (mousePosition.clientY > 260) {
        navigationList.classList.remove("show-menu");
        navigationBurger.classList.remove("burger_crossed");
    }
});

document.addEventListener("touchstart", function (touchPosition) {
    // console.log(touchPosition.changedTouches[0].screenY);
    if (touchPosition.changedTouches[0].screenY > 430) {
        navigationList.classList.remove("show-menu");
        navigationBurger.classList.remove("burger_crossed");
    }
});
