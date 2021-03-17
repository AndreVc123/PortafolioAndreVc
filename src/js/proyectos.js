document.addEventListener('DOMContentLoaded', function() {
    botonMenu();
    carrousel();
    scroll();
})

function botonMenu() {
    var menu = document.querySelector('.barra');

    menu.addEventListener('click', function() {
        var proyectos = document.querySelector('.proyectos');
        proyectos.classList.toggle('mostrar-menu');
    })
}

function carrousel() {

    const elementCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementCarousel, {
        duration: 1000,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true
    })
}

function scroll() {
    $(window).scroll(function(event) {
        var scrollTop = $(window).scrollTop();
        if(scrollTop >= 214) {
            $('.proyectos').addClass('fijar-menu');
        }else {
            $('.proyectos').removeClass('fijar-menu');
        }
    });
}