$(window).load(function () {

    setTimeout(function () {
        $('.page-header-logo').addClass('active');
    }, 500)
})



//desktop aktywacja nawigacji
if (mediaQueryDesktop.matches) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 64) {
            $('nav').addClass('active');
        } else {
            $('nav').removeClass('active');
        }
    });
}
if (mediaQueryMobile.matches) {
  $('nav a:nth-of-type(1),nav a:nth-of-type(6), nav a:nth-of-type(7)').click(function(){
     $('nav, .fade').removeClass('active')
  })
}

// ###################################################### FAQ ######################################################
const quests = document.querySelectorAll('.question')

quests.forEach(function (quest) {
    quest.addEventListener('click', function () {
        //  console.log(this.dataset.id)
        quests[this.dataset.id].classList.toggle('active');
        for (i = 0; i < quests.length; i++) {
            if (i == this.dataset.id) continue;
            quests[i].classList.remove('active');
        }
    })
})

// ###################################################### KONIEC FAQ ######################################################

// ###################################################### SLIDER ABOUT_US ######################################################
// MOBILE 
var swiper = new Swiper('.swiper-container-gallery', {
    speed: 800,
    effect: 'slide',
    slidesPerView: '1',
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    lazy: {
        loadPrevNext: true,
      },
    loop: false,
    pagination: {
        el: '.slide-number',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
        }
    },
    navigation: {
        nextEl: '.right',
        prevEl: '.left',
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        801: {
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,

            autoplay: {
                delay: 6000,
            },

        }
    }
});
// #about_us SLIDER WRAP BUTTON
$('#about_us button').click(function () {
    $('.wrap-text').toggleClass('active')
    $('#about_us button').toggleClass('active');
    if ($("#about_us button").hasClass("active")) {
        $("#about_us button span").text('Czytaj mniej');
    } else {
        $('#about_us button span').text('Czytaj więcej')
    }
})

// ###################################################### SLIDER ABOUT_US ######################################################





//  ###################################################### MOBILE TEXT CONTENT ###################################################
if (mediaQueryMobile.matches) {
    h2[2].textContent = 'Masz jakiekolwiek pytania? Napisz do nas.'
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";
}
//  ################################################### KONIEC MOBILE TEXT CONTENT ###############################################


// ###################################################### CONTACT ###############################################################
var swiper = new Swiper('.swiper-container-review', {
    speed: 800,
    effect: 'slide',
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 20,
    pagination: {
        el: '#review .slide-number',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
        }
    },
    navigation: {
        nextEl: '#review .right',
        prevEl: '#review .left',
    },
    breakpoints: {
        801: {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: false,

        }
    }
});
// fix mobile swiper 
if (mediaQueryMobile.matches) {
    swiper.snapGrid[swiper.snapGrid.length - 1] = swiper.slidesGrid[swiper.slidesGrid.length - 1];
}
