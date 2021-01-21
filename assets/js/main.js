$(window).on('load', function(event) {

    $('.loading').removeClass('loadding--active');
    $('.loading').delay(1000).fadeOut('fast');
    new WOW().init();
    var Click = {
        Toggle: function(button, thing, excThing) {
            $(button).click(() => {
                $(thing).toggleClass(excThing);
            })

        },
        ActiveButton: (layout, button, excthing) => {
            const btns = document.querySelector(layout);
            let listbtn = btns.querySelectorAll(button);

            listbtn.forEach((btn, index) => {
                $(btn).click(() => {
                    listbtn.forEach(item => {
                        $(item).removeClass(excthing);
                    })
                    $(listbtn[index]).addClass(excthing);

                })
            });
        }
    }
    var Scroll = {
        ActiveElement: function() {
            $(window).scroll(() => {
                if (window.scrollY > 0) $('.header').addClass('header--active');
                else $('.header').removeClass('header--active');
            })
        }
    }

    Scroll.ActiveElement();
    Click.ActiveButton('.gallery__content-button', '.button-filter', 'button--active');
    Click.Toggle('.header__bars', '.header__menu', 'menu--active');
    Click.Toggle('.header__search-button', '.header__search-form', 'search--active');


    $grid = $('.gallery__content-filter').isotope({
        itemSelector: '.filter-img',
        layoutMode: 'fitRows',
    });

    $('.button-filter').on('click', function() {
        var filterValue = $(this).data('type');
        var type = '.' + filterValue;
        // use filterFn if matches value
        $grid.isotope({ filter: type });
    });

});