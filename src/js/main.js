const nav_menu = document.getElementById('nav-menu');
const nav_toggle = document.getElementById('nav-toggle');
const nav_close = document.getElementById('nav-close');

if (nav_toggle) {
    nav_toggle.addEventListener('click', () => {
        if (nav_menu.classList.contains('show-menu')) {
            nav_menu.classList.remove('show-menu');
        }
        else {
            nav_menu.classList.add('show-menu');
        }
    });
}

if (nav_close) {
    nav_close.addEventListener('click', () => {
        nav_menu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav_link');

let linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(navs => navs.addEventListener('click', linkAction));

const skills_content = document.getElementById('skills_content');
const skills_header = document.querySelectorAll('.skills_header');

function toggleSkills() {
    // console.log('inside toggle skills');
    let class_item = this.parentNode.className;
    // console.log(class_item);

    if (class_item === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open';
    }
    else if (class_item === 'skills_content skills_open') {
        this.parentNode.className = 'skills_content skills_close';
    }
};

skills_header.forEach((vals) => {
    vals.addEventListener('click', toggleSkills);
});

const tabs = document.querySelectorAll('[data-target]');
const tab_contents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tab_contents.forEach(tab_cont => {
            tab_cont.classList.remove('qualification_active')
        });
        target.classList.add('qualification_active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        });
        tab.classList.add('qualification_active');

    })
});

const modal_views = document.querySelectorAll('.services_modal');
const modal_buttons = document.querySelectorAll('.services_button');
const modal_closes = document.querySelectorAll('.services_modal_close');

modal_buttons.forEach((modal_button, i) => {
    modal_button.addEventListener('click', () => {
        modal_views[i].classList.add('active_modal');
    });
});

modal_closes.forEach((close_val) => {
    close_val.addEventListener('click', () => {
        modal_views.forEach((view) => {
            view.classList.remove('active_modal')
        });
    });
});

let slideIndex = 1;
slider_window(slideIndex, "carousel_item");

document.getElementById("prev_proj").addEventListener("click", () => increase_slide(-1));
document.getElementById("next_proj").addEventListener("click", () => increase_slide(1));

function slider_window(n, className) {
    let slides = document.getElementsByClassName(className);
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let increase_slide = (n) => {
    slider_window((slideIndex += n), "carousel_item");
}

const sections = document.querySelectorAll('section[id]')

let scrollActive = () => {
    let nav = document.getElementById("nav");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.style.padding = "30px 10px";
        nav.style.top = "4rem";
        nav.style.boxShadow = "0 -1px 4px rgba(0, 0, 0, 1)";
        document.getElementById("nav_logo").style.fontSize = "15px";
    } else {
        nav.style.padding = "60px 20px";
        nav.style.top = "0";
        // nav.style.boxShadow = "0 0 0 0";
        document.getElementById("nav_logo").style.fontSize = "25px";
    }

    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 70;
        let sectionId = current.getAttribute('id');

        // console.log(sectionId, sectionTop, 'current and section top');
        // console.log(scrollY, sectionHeight, 'scrollY and section Height');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_item a[href*=' + sectionId + ']').classList.add('active_link')
        } else {
            document.querySelector('.nav_item a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    });
    // let sectionId = "";
    // sections.forEach((section) => {
    //     const sectionTop = section.offsetTop;

    //     if (scrollY >= sectionTop - 110) {
    //         sectionId = section.getAttribute("id");
    //     }
    // });
    // const nav_menus = document.querySelector('.nav_item a[href*=' + sectionId + ']');

    // nav_menus.forEach((li) => {
    //     li.classList.remove("active_link");
    //     if (li.classList.contains(sectionId)) {
    //         li.classList.add("active_link");
    //     }
    // });
}
window.addEventListener('scroll', scrollActive);

let scrollHeader = () => {
    const nav = document.getElementById('header')
    if (this.scrollY >= 50) nav.classList.add('scroll_header');
    else nav.classList.remove('scroll_header')
}
window.addEventListener('scroll', scrollHeader);