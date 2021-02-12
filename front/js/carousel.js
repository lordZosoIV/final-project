var carousel = null;
var indicators = []
var slides = []
var switcher = null;
var speed = 5000; // 5 seconds

function carouselHide(num) {
    indicators[num].setAttribute('data-state', '');
    slides[num].setAttribute('data-state', '');

    slides[num].style.opacity = 0;
}

function carouselShow(num) {
    indicators[num].checked = true;
    indicators[num].setAttribute('data-state', 'active');
    slides[num].setAttribute('data-state', 'active');

    slides[num].style.opacity = 1;
}

function setSlide(slide) {
    return function () {
        for (var i = 0; i < indicators.length; i++) {
            indicators[i].setAttribute('data-state', '');
            slides[i].setAttribute('data-state', '');

            carouselHide(i);
        }

        indicators[slide].setAttribute('data-state', 'active');
        slides[slide].setAttribute('data-state', 'active');
        carouselShow(slide);

        clearInterval(switcher);
    };
}

function switchSlide() {
    var nextSlide = 0;

    for (var i = 0; i < indicators.length; i++) {
        if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length - 1))) {
            nextSlide = i + 1;
        }
        carouselHide(i);
    }
    carouselShow(nextSlide);
}

export function startSlideShow() {
    carousel =  document.getElementById('carousel');
    if (carousel) {
        slides = carousel.querySelectorAll('.slide');
        indicators = carousel.querySelectorAll('.indicator');

        switcher = setInterval(function () {
            switchSlide();
        }, speed);

        for (var i = 0; i < indicators.length; i++) {
            indicators[i].addEventListener("click", setSlide(i));
        }
    }
}


