'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark'); // navbar에 navbar--dark라는 class를 만든다 
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//  Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    // console.log(event.target.dataset.link);  HTML에 data-link를 설정해 놓고 그 안에 설정한 id를 불러온다
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    console.log(event.target.dataset.link); 
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
});