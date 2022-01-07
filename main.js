'use strict'

// 마우스 생성
window.addEventListener("mousemove", (e) => {

  let img = document.querySelector(".home__container");

    let mouse = document.querySelector(".mouse");
    let pageX = e.pageX;
    let pageY = e.pageY;
    let standardX = 0,
        standardY = 0,
        maxX = 0,
        maxY = 0,
        angleX = 0,
        angleY = 0,
        softX = 0,
        softY = 0;

        standardX = window.innerWidth/2 - pageX;
        standardY = window.innerHeight/2 - pageY;

        let mousewidth = mouse.clientWidth / 2;
        let mouseheigth = mouse.clientHeight / 2;

        // 최솟값, 최댓값을 설정
        maxX = Math.max(-850, Math.min(850, standardX));
        maxY = Math.max(-250, Math.min(250, standardY));

        // 각도를 줄이는 설정
        angleX = maxX * 0.12;
        angleY = maxY * 0.12;

        // 부그럽게 설정
        softX += (angleX - softX) * 0.4;
        softY += (angleY - softY) * 0.4;

    const move = document.querySelector(".home__container");
    move.style.transform = "translate(0%, -10%) perspective(600px) rotateX("+ softY +"deg) rotateY("+ -softX +"deg)";
    move.style.borderRadius = softX + "deg";

    gsap.to(".mouse", {duration: 0.3, left:pageX - mousewidth , top:pageY - mouseheigth});

    img.addEventListener("mouseenter", () => {
        mouse.classList.add("active");
    });
    img.addEventListener("mouseleave", () => {
        mouse.classList.remove("active");
    });

    // 이미지 클릭 시 화면 나오기
img.addEventListener("click", () => {
    document.querySelectorAll(".none").forEach((el) => {
        el.classList.remove("none");
    });
});
    
});

const scrollReveal = function() {
    let scrollTop = (window.pageYOffset || document.documentElement.scrollTop || window.scrollY) + window.innerHeight / 2;
    const reveal = document.querySelectorAll(".reveal");
    reveal.forEach(el => {
        const revealDelay = el.dataset.delay;
        // parentElement : el(.reveal)의 부모
        // if(scrollTop >= el.parentElement.offsetTop) {
        //     el.classList.add("show");
        // }
        if(scrollTop >= el.parentElement.offsetTop) {
            if(revealDelay == undefined) {
                el.classList.add("show");
            } else {
                setTimeout(() => {
                    el.classList.add("show");
                }, revealDelay);
            }
        }
    });
}

window.addEventListener("scroll", scrollReveal);

// About 이동

gsap.defaults({duration: 50, ease:"none"});

var windowWrap = gsap.utils.wrap(0, window.innerWidth),
    windowYoyo = gsap.utils.wrapYoyo(0, window.innerWidth);

gsap.to(".major1", {
    x: 10000,
    modifiers: {
        x: x => windowWrap(parseFloat(x)) + "px"
    }
});

gsap.to(".major2", {
    x: 10000,
    modifiers: {
        x: x => windowYoyo(parseFloat(x)) + "px"
    }
});

gsap.to(".major3", {
    x: 10000,
    modifiers: {
        x: x => windowWrap(parseFloat(x)) + "px"
    }
});


// 눈 내리기
// tsParticles.load("tsparticles", {
//   fpsLimit: 60,
//   background: {
//     color: "#000"
//   },
//   interactivity: {
//     events: {
//       onClick: { enable: true, mode: "push" },
//       onHover: {
//         enable: true,
//         mode: "repulse"
//       },
//       resize: true
//     },
//     modes: {
//       push: { quantity: 4 },
//       repulse: { distance: 200, duration: 0.4 }
//     }
//   },
//   particles: {
//     color: { value: "#ffffff" },
//     move: {
//       bounce: false,
//       direction: "none",
//       enable: true,
//       outModes: "out",
//       random: false,
//       speed: 2,
//       straight: false
//     },
//     number: { density: { enable: true, area: 800 }, value: 80 },
//     opacity: {
//       value: 0.5
//     },
//     shape: {
//       type: "star",
//       options: {
//         star: {
//           sides: 5
//         }
//       }
//     },
//     size: {
//       value: { min: 1, max: 5 }
//     }
//   }
// });



// // Make navbar transparent when it is on the top
// const navbar = document.querySelector('#navbar');
// // getBoundingClientRect: DOMReact요소의 크기와 뷰포트에 상대적인 위치에 대한 정보를 제공하는 객체를 반환
// const navbarHeight = navbar.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//     if(window.scrollY > navbarHeight) {
//         navbar.classList.add('navbar--dark'); // navbar에 navbar--dark라는 class를 만든다 
//     } else {
//         navbar.classList.remove('navbar--dark');
//     }
// });

//  Handle scrolling when tapping on the navbar menu
// const navbarMenu = document.querySelector('.navbar__menu');
// navbarMenu.addEventListener('click', (event) => {
//     // console.log(event.target.dataset.link);  HTML에 data-link를 설정해 놓고 그 안에 설정한 id를 불러온다
//     const target = event.target;
//     const link = target.dataset.link;
//     if(link == null) {
//         return;
//     }
//     // const scrollTo = document.querySelector(link);
//     // scrollTo.scrollIntoView({behavior: 'smooth'});

//     navbarMenu.classList.remove('open');
//     scrollIntoView(link);
//     selectNavItem(target);
// });

// // Navbar toggle button for small screen
// const navbarToggleBtn = document.querySelector('.navbar__toggle__btn');
// navbarToggleBtn.addEventListener('click', () => {
//     navbarMenu.classList.toggle('open');
// });


// // Handle click on "contact me" button on home
// const homeContactBtn = document.querySelector('.home__contact');
// homeContactBtn.addEventListener('click', (event) => {
//     // const link = event.target.dataset.link;
//     // const scrollTo = document.querySelector(link); or
//     scrollIntoView('#contact');
// });

// // Make home slowly fade to transparent as the window scrolls down
// const home = document.querySelector('.home__container');
// const homeHeight = home.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//     home.style.opacity = 1 - window.scrollY / homeHeight;
// });

// // Show "arrow up" button when scrolling down
// const arrowUp = document.querySelector('.arrow-up');
// document.addEventListener('scroll', () => {
//     if(window.scrollY > homeHeight / 2) {
//         arrowUp.classList.add('visible');
//     } else {
//         arrowUp.classList.remove('visible');
//     }
// });

// // Handle click on the "arrow up" button
// arrowUp.addEventListener('click', (event) => {
//     scrollIntoView('#home');
// });

// Projects
// const workBtnContainer = document.querySelector('.work__categories');
// const projectContainer = document.querySelector('.work__projects');
// const projects = document.querySelectorAll('.project');
// workBtnContainer.addEventListener('click', (event) => {
//     const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
//     if(filter == null) {
//         return;
//     }

//     // Remove selection from the previous item and select new one
//     const active = document.querySelector('.category__btn.selected');
//     active.classList.remove('selected');
//     const target = event.target.nodeName === "BUTTON" ? event.target :
//                     event.target.parentNode;
//     target.classList.add('selected');

//     projectContainer.classList.add('anim-out');

//     setTimeout(() => {
//         projects.forEach((project) => {
//             if(filter === '*' || filter === project.dataset.type) {
//                 project.classList.remove('invisible');
//             } else {
//                 project.classList.add('invisible');
//             }
//         });
//         projectContainer.classList.remove('anim-out');
//     }, 300)

// });

// // 1. 모든 섹션 요소들과 메뉴아이템을 가지고 온다
// const sectionIds = [
//     '#home',
//     '#about', 
//     '#skills', 
//     '#work', 
//     '#testimonials', 
//     '#contact'
// ];
// const sections = sectionIds.map(id => document.querySelector(id));
// const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));

// // 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
// let selectedNavIndex;
// let selectedNavItem = navItems[0];
// function selectNavItem(selected) {
//     selectedNavItem.classList.remove('active');
//     selectedNavItem = selected;
//     selectedNavItem.classList.add('active');
// };

// function scrollIntoView(selector) {
//     const scrollTo = document.querySelector(selector);
//     scrollTo.scrollIntoView({behavior: 'smooth'});
//     selectNavItem(navItems[sectionIds.indexOf(selector)]);
// };

// const observerOptions = {
//     // default: view(window창) => 어떤 걸 기준으로 요소들이 들어오고 나가는지를 확인하고 싶을 때 그 부모 컨테이너를 지정해 줄 수 있다
//     // ex: document.querySelector('.container') => 컨테이너에 들어왔을때 콜백함수 실행
//     root: null, 
//     rootMargin: '0px', // 부모의 영역을 넓힐 수 있다
//     threshold: 0.3
//     // 얼마만큼 보여져야 콜백함수가 호출될지를 결정 (0 ~ 1)
//     // threshold가 1로 설정 돼있으면 들어오때는 1값을 나갈때는 0값으로 설정된다
// };

// const observerCallback = (entries, observer) => {
//     // entry: 요소의 정보가 들어있다
//     entries.forEach(entry => {
//         // intersectionRatio: 얼마만큼 들어와있는지 확인 할 수 있다. 안에 전부 다 들어와 있다면 1
//         // isIntersecting: 요소가 안으로 들어오는 상태라면 true, window에 있다가 밖으로 나가는 상태라면 false
//         if(!entry.isIntersecting && entry.intersectionRatio > 0) {
//             const index = sectionIds.indexOf(`#${entry.target.id}`);
//             // 스크롤링이 아래로 되어서 페이지가 올라옴
//             if(entry.boundingClientRect.y < 0) {
//                 selectedNavIndex = index + 1;
//             } else {
//                 selectedNavIndex = index - 1;
//             }
//         }
//     });
// };
// // observerOptions: 타겟요소와 상위 요소 또는 최상위 document의 viewport 사이의 intersection내의 변화를 비동기적으로 관찰
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// sections.forEach(section => observer.observe(section));

// // 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다
// window.addEventListener('wheel', () => {
//     if(window.scrollY === 0) {
//         selectedNavIndex = 0;
//     } else if (
//         Math.round(window.scrollY + window.innerHeight) >= 
//         document.body.clientHeight) {
//             selectedNavIndex = navItems.length - 1;
//     } 
//     selectNavItem(navItems[selectedNavIndex]);
// });


