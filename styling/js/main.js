var myhamburger = document.querySelector(".hamburger");
var mymobilemenu = document.querySelector(".mobile");
var myoverlay = document.querySelector(".overlay");

myhamburger.addEventListener("click", onHamburgerClicked);
myoverlay.addEventListener("click", onHamburgerClicked);

function onHamburgerClicked() {
    console.log("onHamburgerClicked");
    myhamburger.classList.toggle("is-active");
    myoverlay.classList.toggle("show-overlay");
    mymobilemenu.classList.toggle("show-mobile");
}

