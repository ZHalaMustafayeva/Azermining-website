
window.onload = function () {
    let heading = document.getElementsByClassName('our-services')[0];
    let workList = document.getElementsByClassName('c-work-list')[0].children;

    for (let i = 0; i < workList.length; i++) {
        workList[i].addEventListener('click', function (e) {
            heading.innerHTML = e.target.children[0].innerText
        })
    }
};


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

