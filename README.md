# Portfolio

```JavaScript
// 스크롤을 내릴시 navbar에 어두운 색 navbar가 생성
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark'); // navbar에 navbar--dark라는 class를 만든다 
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

```

![image description](./imgs/readme/Portfoliodarknavbar.png)
***

 ```JavaScript
//  메뉴 버튼을 누를시 해당 페이지로 이동 할 수 있는 기능
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }

    navbarMenu.classList.remove('open');
    scrollIntoView(link);
    selectNavItem(target);
});

// 메뉴 클릭시 스크롤이 smooth하게 이동하게 되고 
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
    selectNavItem(navItems[sectionIds.indexOf(selector)]);
};

// Home페이지에 Contact me 클릭시 Contact 페이지로 이동
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});

// 선택된 메뉴에 ㅁ 표시가 유지된다
let selectedNavIndex;
let selectedNavItem = navItems[0];
function selectNavItem(selected) {
    selectedNavItem.classList.remove('active');
    selectedNavItem = selected;
    selectedNavItem.classList.add('active');
};

```

![image description](./imgs/readme/movescrolling.png)
***

```JavaScript
// 반응형 웹에서 토글 버튼 클릭시 메뉴창 생성
const navbarToggleBtn = document.querySelector('.navbar__toggle__btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

```

![image description](./imgs/readme/toggle.png)
***

```JavaScript
// 창이 아래로 스크롤될 때 Home페이지가 천천히 투명
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

```

![image description](./imgs/readme/homeopacity.png)
***
