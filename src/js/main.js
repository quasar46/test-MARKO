document.addEventListener('DOMContentLoaded', function () {
    const minViewPort = (min = 375) => {
        if (window.innerWidth <= min) {
            const viewport = document.querySelector('[name="viewport"]');
            if (viewport) viewport.setAttribute("content", `width=${min}, user-scalable=no`);
        }
    };

    minViewPort();


    if (window.innerWidth < 1024) {
        const headerElement = document.querySelector('.header__content');
        const parentElement = document.querySelector('.menu__box');
        parentElement.append(headerElement);
    }


    const mainBanner = document.querySelector('.main-banner');
    const headerHeight = document.querySelector('.header').offsetHeight;

    mainBanner.style.paddingTop = headerHeight + 'px';

    if (window.innerWidth < 768) {
        let sliderWraps = document.querySelectorAll('.jobs__item-slider');
        let blockSize = document.querySelector('.jobs__item-content').offsetWidth;
        sliderWraps.forEach(item => {
            item.style.width = blockSize + 'px';
        })
    }

    var swiper1th = new Swiper(".swiper-01-thumbs", {
        spaceBetween: 6,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper1 = new Swiper(".swiper-01", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next-01",
            prevEl: ".swiper-button-prev-01",
        },
        thumbs: {
            swiper: swiper1th,
        },
    });

    var swiper2th = new Swiper(".swiper-02-thumbs", {
        spaceBetween: 6,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".swiper-02", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next-02",
            prevEl: ".swiper-button-prev-02",
        },
        thumbs: {
            swiper: swiper2th,
        },
    });

    var swiper3th = new Swiper(".swiper-03-thumbs", {
        spaceBetween: 6,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper3 = new Swiper(".swiper-03", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next-03",
            prevEl: ".swiper-button-prev-03",
        },
        thumbs: {
            swiper: swiper3th,
        },
    });

    var swiper4th = new Swiper(".swiper-04-thumbs", {
        spaceBetween: 6,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper4 = new Swiper(".swiper-04", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next-04",
            prevEl: ".swiper-button-prev-04",
        },
        thumbs: {
            swiper: swiper4th,
        },
    });

    swiper1.on('slideChange', function () {
        change1();
    });

    swiper2.on('slideChange', function () {
        change2();
    });

    swiper3.on('slideChange', function () {
        change3();
    });

    swiper4.on('slideChange', function () {
        change4();
    });


    function change1() {
        var offer = document.querySelector('.numberSlides1');
        offer.innerHTML = '<span class="swiper-count__current">' + (swiper1.realIndex + 1) + '</span>&nbsp;<span class="swiper-count__total">' + (swiper1.slides.length) + '</span>';
        const wrapContent = document.querySelector('.jobs__item--01')
        const slideContentWrap = wrapContent.querySelectorAll('.jobs__item-content-wrap');
        slideContentWrap.forEach(wrap => {
            const slideContent = wrap.querySelectorAll('.jobs__item-content');
            slideContent.forEach((item, index) => {
                item.classList.remove('active');
                if (index === swiper1.realIndex) {
                    item.classList.add('active');
                }
            });
        })
    }

    change1();

    function change2() {
        var offer = document.querySelector('.numberSlides2');
        offer.innerHTML = '<span class="swiper-count__current">' + (swiper2.realIndex + 1) + '</span>&nbsp;<span class="swiper-count__total">' + (swiper2.slides.length) + '</span>';
        const wrapContent = document.querySelector('.jobs__item--02')
        const slideContentWrap = wrapContent.querySelectorAll('.jobs__item-content-wrap');
        slideContentWrap.forEach(wrap => {
            const slideContent = wrap.querySelectorAll('.jobs__item-content');
            slideContent.forEach((item, index) => {
                item.classList.remove('active');
                if (index === swiper2.realIndex) {
                    item.classList.add('active');
                }
            });
        })
    }

    change2();

    function change3() {
        var offer = document.querySelector('.numberSlides3');
        offer.innerHTML = '<span class="swiper-count__current">' + (swiper3.realIndex + 1) + '</span>&nbsp;<span class="swiper-count__total">' + (swiper3.slides.length) + '</span>';
        const wrapContent = document.querySelector('.jobs__item--03')
        const slideContentWrap = wrapContent.querySelectorAll('.jobs__item-content-wrap');
        slideContentWrap.forEach(wrap => {
            const slideContent = wrap.querySelectorAll('.jobs__item-content');
            slideContent.forEach((item, index) => {
                item.classList.remove('active');
                if (index === swiper3.realIndex) {
                    item.classList.add('active');
                }
            });
        })
    }

    change3();

    function change4() {
        var offer = document.querySelector('.numberSlides4');
        offer.innerHTML = '<span class="swiper-count__current">' + (swiper4.realIndex + 1) + '</span>&nbsp;<span class="swiper-count__total">' + (swiper4.slides.length) + '</span>';
        const wrapContent = document.querySelector('.jobs__item--04')
        const slideContentWrap = wrapContent.querySelectorAll('.jobs__item-content-wrap');
        slideContentWrap.forEach(wrap => {
            const slideContent = wrap.querySelectorAll('.jobs__item-content');
            slideContent.forEach((item, index) => {
                item.classList.remove('active');
                if (index === swiper4.realIndex) {
                    item.classList.add('active');
                }
            });
        })
    }

    change4();

    document.querySelector(".swiper-button-next-01").addEventListener("click", change1);
    document.querySelector(".swiper-button-prev-01").addEventListener("click", change1);

    document.querySelector(".swiper-button-next-02").addEventListener("click", change2);
    document.querySelector(".swiper-button-prev-02").addEventListener("click", change2);

    document.querySelector(".swiper-button-next-03").addEventListener("click", change3);
    document.querySelector(".swiper-button-prev-03").addEventListener("click", change3);

    document.querySelector(".swiper-button-next-04").addEventListener("click", change4);
    document.querySelector(".swiper-button-prev-04").addEventListener("click", change4);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    })
    wow.init();
})
