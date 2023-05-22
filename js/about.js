var owl = $('.certificate-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    // margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    dots: true,
    // center:true,
    responsive: {
        375: {
            items: 1
        },
        425: {
            items: 1
        },
        1024: {
            items: 1
        },
        1440: {
            items: 2
        },
        1920: {
            items: 3
        }
    }
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})
var owl_2 = $('.techniques-carousel');
owl_2.owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    dots: true,
    // center:true,
    responsive: {
        375: {
            items: 1
        },
        425: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 4
        },
        1440: {
            items: 6
        }
    }
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})


$('.hamburger-menu').click(function () {
    $('.hamburger-menu').toggleClass('active-humb');
    if ($('.hamburger-menu').hasClass('active-humb')) {
        $("body").addClass('b-active')
        $('.c-background').addClass('fixed')

        $('.mobile-menu').css({
            transform: 'translateX(0)',
            transition: '.5s'
        });
    }
    else {
        $('c-background').removeClass('fixed')
         $("body").removeClass('b-active')
        $('.mobile-menu').css({
            transform: 'translateX(200%)',
            transition: '.5s'
        });

    }
})
