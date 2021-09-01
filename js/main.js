// sticky menu-bar
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('header__nav');
    if (window.pageYOffset >= 1) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// hamburger menu-bar
function openMenu() {
    document.getElementById('nav__items').style.left = '0rem';
}

function closeMenu() {
    document.getElementById('nav__items').style.left = '-30rem';
}

// banner image slider
let flag = 0;
slideShow(flag);

function controller(_x) {
    flag = flag + _x;
    slideShow(flag);
}

function slideShow(_num) {
    let slides = document.getElementsByClassName('slider__container');
    if (_num == slides.length) {
        flag = 0;
        _num = 0;
    }
    if (_num < 0) {
        flag = slides.length - 1;
        _num = slides.length - 1;
    }
    for (let y of slides) {
        y.style.display = 'none';
    }
    slides[_num].style.display = 'block';
}