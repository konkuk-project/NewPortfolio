'use strict'

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar__dark');
    } else {
        navbar.classList.remove('navbar__dark');
    }
})

// Hand Scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    scrollIntoView(link);
})

//Hand Scrolling when tapping on contact button
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", (event) => {
    scrollIntoView("#contact");
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

// Home Section is fading while Hand Scrolling
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    const opacityNumber = 1 - ( window.scrollY / homeHeight );
    home.style.opacity = opacityNumber;
})

// Arrow Button is appeared when hand scrolling
const arrowBtn = document.querySelector("#arrow__button");
document.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY;
    if(scrollHeight > (homeHeight / 2)) {
        arrowBtn.classList.add("appear");
    } else {
        arrowBtn.classList.remove("appear");
    }
})

// Arrow Button is scroll to home section
arrowBtn.addEventListener("click", () => {
    scrollIntoView("#home");
})



