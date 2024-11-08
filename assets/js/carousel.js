$(document).ready(function () {
    // Function to initialize Owl Carousel with custom responsive settings
    function initializeCarousel(owlSelector, responsiveSettings) {
        var owl = $(owlSelector);

        owl.owlCarousel({
            loop: true,
            margin: 10,
            nav: false, // Disable default next/prev buttons
            dots: false, // Disable Owl-dots since we're using custom ones
            responsive: responsiveSettings
        });

        // Event listener to update dots on carousel change
        owl.on('changed.owl.carousel', function (event) {
            var index = event.item.index - event.relatedTarget._clones.length / 2;
            var itemCount = event.item.count;
            var activeIndex = (index % itemCount + itemCount) % itemCount;

            var dotSelector = owlSelector === '#new' ? '.custom-dots-new' :
                              owlSelector === '#recommend' ? '.custom-dots-recommend' :
                              '.custom-dots-graphy'; // Added for 'graphy'
            $(dotSelector + ' .dot').removeClass('active');
            $(dotSelector + ' .dot[data-position="' + activeIndex + '"]').addClass('active');
        });

        // Set the first dot to active by default
        var dotSelector = owlSelector === '#new' ? '.custom-dots-new' :
                          owlSelector === '#recommend' ? '.custom-dots-recommend' :
                          '.custom-dots-graphy'; // Added for 'graphy'
        $(dotSelector + ' .dot:first').addClass('active');
    }

    // Function to handle custom buttons and dots
    function initializeCustomButtons(owlSelector, nextBtn, prevBtn, dotsSelector) {
        var owl = $(owlSelector);

        // Custom Next Button
        $(nextBtn).click(function () {
            owl.trigger('next.owl.carousel');
        });

        // Custom Previous Button
        $(prevBtn).click(function () {
            owl.trigger('prev.owl.carousel');
        });

        // Custom Dots Click Event
        $(dotsSelector + ' .dot').click(function () {
            var position = $(this).data('position');
            owl.trigger('to.owl.carousel', [position]);

            // Add active class to the clicked dot and remove from others
            $(dotsSelector + ' .dot').removeClass('active');
            $(this).addClass('active');
        });
    }

    // Initialize carousels with custom responsive settings
    initializeCarousel("#new", {
        0: { items: 4 },
        600: { items: 4 },
        1000: { items: 5 }
    });

    initializeCarousel("#recommend", {
        0: { items: 4 },
        600: { items: 4 },
        1000: { items: 5 }
    });

    initializeCarousel("#graphy", {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 }
    });

    // Set up custom buttons and dots for #new carousel
    initializeCustomButtons("#new", "#customNextBtnNew", "#customPrevBtnNew", ".custom-dots-new");

    // Set up custom buttons and dots for #recommend carousel
    initializeCustomButtons("#recommend", "#customNextBtnRecommend", "#customPrevBtnRecommend", ".custom-dots-recommend");

    // Set up custom buttons and dots for #graphy carousel
    initializeCustomButtons("#graphy", "#customNextBtnGraphy", "#customPrevBtnGraphy", ".custom-dots-graphy");
});



















const swiper = new Swiper(".swiper-slider", {
    // Optional parameters
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
        enabled: true
    },

    // Enabled autoplay mode
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false
    // },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true
    },

    // If we need navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 1.25,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});






























const header = $('.header_funcbar_sp');

function headerScrollFunc() {
    const headerScroll = window.scrollY;
    if (headerScroll > 620) {
        header.addClass('header-scrolled');
    } else {
        header.removeClass('header-scrolled');
    }
};
window.addEventListener('scroll', headerScrollFunc);