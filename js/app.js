var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    // autoplay: false,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1024: {
            items: 2
        },
        1440: {
            items: 3
        },
        1920: {
            items: 4
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



