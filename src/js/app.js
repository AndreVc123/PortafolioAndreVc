document.addEventListener('DOMContentLoaded', function () {
    botones();
    texto();
    texto2();
    scrollInicial();
    scroll();
    navButtons();
})

function botones() {

    const close = document.getElementById('close');
    const barra = document.getElementById('barra');
    const links = document.getElementById('links');

    close.addEventListener('click', function(e) { 

        const mostrar = document.querySelector('.mostrar');
        
        if(mostrar){
            links.classList.remove('mostrar');
        }else {
            links.classList.add('ocultar');
        }
    })

    barra.addEventListener('click', function(e) { 

        const ocultar = document.querySelector('.ocultar');

        if(ocultar){
            links.classList.remove('ocultar');
        }else {
            links.classList.add('mostrar');
        }
    })
}

function texto() {
    var options = {
        strings: ['Freelancer','FullStack Developer', 'Ingeniero en Sistemas Computacionales'],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
    };

    var typed = new Typed('.typed', options);
}

function texto2() {
    var options = {
        strings: ['Freelancer','FullStack Developer', 'Ingeniero en Sistemas Computacionales'],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
    };

    var typed = new Typed('.typed2', options);
}

function scrollInicial() {
    var scroll = $(window).scrollTop();
    if(scroll > 583) {
        $('nav').addClass('colorFondo');
    }else {
        $('nav').removeClass('colorFondo');
    }
}

function scroll() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > 583) {
            $('nav').addClass('colorFondo');
        }else {
            $('nav').removeClass('colorFondo');
        }
    });
}

function navButtons(tipo) {

    switch (tipo) {
        case 'home':
            $('html').animate({
                scrollTop: 0
            }, 1000)
            break;
        
        case 'sobreMi':
            $('html').animate({
                scrollTop: 612
            }, 500)
            break;

        case 'servicios':
            $('html').animate({
                scrollTop: 1161
            }, 1000)
            break;

        case 'habilidades':
            $('html').animate({
                scrollTop: 1720
            }, 1000)
            break;

        case 'contacto':
            $('html').animate({
                scrollTop: 2315
            }, 1000)
            break;

        default:
            break;
    } 

}