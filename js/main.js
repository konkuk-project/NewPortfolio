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
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
})

// click toggle button navbar menu is appear

const toggleBtn = document.querySelector("#toggle-btn");
const toggleMenu = document.querySelector(".navbar__menu");
toggleBtn.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
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

// Category Button click then projects are appeared
// 카테고리 버튼 클릭시 => 그 특성(id값)에 해당하는 포트폴리오 나타나야함
// => 포트폴리오 data값 id와 일치시 나타나게 함 
// 기본 모드는 전부 다 나타나게 한다

const categoryBtns = document.querySelectorAll(".category__btn");
const projectContainer = document.querySelector(".work__projects");

function searchProject(categoryId) {
    const projects = document.querySelectorAll(".projects");
    projectContainer.classList.add("anime-out");
    setTimeout(() => {
        projects.forEach(project => {
            const projectId = project.dataset.type;
            if (projectId.includes(categoryId)) {
                project.classList.remove("invisible");
            } else {
                project.classList.add("invisible");
            }
        });
        projectContainer.classList.remove("anime-out");
    }, 300)
    
}

categoryBtns.forEach(categoryBtn => {
    categoryBtn.addEventListener("click", () => {
        const categoryId = event.target.dataset.filter || 
        event.target.parentNode.dataset.filter;
        searchProject(categoryId);
        
        
    })
});

//change the color and focus while click the category
// 카테고리 버튼 선택 시 그 버튼 active 부여 그 전 버튼 active 삭제


categoryBtns.forEach(categoryBtn => {
    categoryBtn.addEventListener("click", () => {
        const selectedBtn = document.querySelector(".category__btn.active");
        selectedBtn.classList.remove("active");
        const clickBtn = event.target.nodeName === "BUTTON" ? event.target :
        event.target.parentNode;
        clickBtn.classList.add("active");
    })
});






// when navbar menu is clicked menu highlight + border
// 기본 home 선택된 상태 다른 메뉴 클릭시 그 메뉴만 선택 다른 메뉴 비선택

const navbarItems = document.querySelectorAll(".navbar__menu__item");

navbarItems.forEach(navbarItem => {
    navbarItem.addEventListener("click", () => {
        const activeItem = document.querySelector(".active");
        activeItem.classList.remove("active");
        // 클릭 된 시점에서 active된 item찾아 active 제거
        // 클릭 되기 전 시점의 active item 찾으면 home item으로 고정됨
        const clickedItem = event.target;
        clickedItem.classList.add("active");
    })
});




