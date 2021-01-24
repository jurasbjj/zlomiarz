// ################################################### PRELOADER #############################################################
const preload = document.querySelector('.loader-wrapper');

preload.classList.add('show-preloader');
$(window).load(function() {
    setTimeout(
      function()
      {
          $(".loader-wrapper").fadeOut();
      }, 500);
});
// ################################################### KONIEC PRELOADER ###################################################


// ###################################################### SCROLL ###################################################### 
    // IMG powrót
    $("nav img").click(function() {
        window.location.href = 'index.html'
      });
    
        // SCROLL 
    $(document).ready(function () {
      $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
    
          var target = this.hash,
              $target = $(target);
    
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top - 67
          }, 800, 'swing', function () { // czas scrolowania
              // window.location.hash = target;
          });
      });
    });
    
    //BURGER
    $('.burger, fade').click(function(){
        $('nav.mobile, .fade').toggleClass('active')
    })
    
    $('.fade').click(function(){
        $('nav.mobile, .fade').removeClass('active')
    })
    
    $('nav li a').click(function(){
        $('nav.mobile, .fade').removeClass('active')
    })
    
// ###################################################### KONIEC SCROLL ######################################################


// ################################# SLIDER #################################################################

// swiper array content 

// text content array
const coachesH1 = ['Daniel Wrześniewski', 'Adam Górny', 'Anrzej Iwat', 'Marcin Soszyński', 'Joanna Zabulewicz', 'Michał Miranowski', 'Mateusz Kowalski', 'Marcin Grabowski']
const coachesH3 = ['BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU', 'BRAZYLIJSKIE JIU-JITSU KIDS', 'BRAZYLIJSKIE JIU-JITSU', 'KICKBOXING', 'ZAPASY']
const coachesP = ['Współzałożyciel klubu Złomiarz Team i główny jego trener. Czarny pas bjj od 2012 roku pod Vagner „Boca” Guimaraes. Ze sportem związany od 7 roku życia, zaś z samym BJJ od 17 lat. Na polskiej scenie BJJ znany jako doświadczony trener i topowy zawodnik. Wielokrotny, podwójny Mistrz Polski BJJ. Multimedalista zarówno polskiej jak i zagranicznej sceny BJJ. Na co dzień nauczyciel wychowania fizycznego oraz trener grupy zaawansowanej w naszym klubie. Ceni sobie wytrwałość i ciężką pracę.', 'Współzałożyciel klubu Złomiarz Team. Czarny pas BJJ od 2014 roku, trenuje BJJ od 2001 roku. W brazylijskim jiu-jitsu najbardziej ceni wszechstronność tej dyscypliny oraz fakt, że dzięki opanowanej technice można zdominować większego i silniejszego od siebie przeciwnika. Regularnie startujący zawodnik z wieloma sukcesami zarówno w kimonach jak i bez. Wielokrotny medalista Mistrzostw Polski BJJ, No-Gi oraz ADCC. W klubie prowadzi treningi bjj grupy początkującej i wszystkich grup bjj dla dzieci.', 'W klubie Złomiarz Team Gdańsk jest trenerem grupy no-gi. Przekazywanie wiedzy innym motywuje go do głębszego zrozumienia technik i daje możliwość  skupienia się na szczegółach. Objął opieką trenerską wielu byłych i aktualnych Mistrzów Polski ADCC. Należy do Kadry Polski Ju-Jitsu NeWaza. Każdego roku zbiera masę osiągnięć, a jego kalendarz wypełniony jest startami w zawodach. Wielokrotny, złoty medalista Mistrzostw Polski BJJ, Mistrz Polski ADCC PRO oraz medalista ADCC Europe.', 'Purpurowy pas BJJ, wielokrotny medalista zawodów krajowych i zagranicznych. Specjalizuje się w zajęciach grupowych oraz indywidualnych dla dorosłych i dzieci na terenie Trójmiasta. Zaprasza wszystkich zainteresowanych współpracą.', 'Z brazylijskim jiu-jitsu związana od 2017 roku. Bardzo szybko okazało się, że to jej największa pasja i właśnie w tym sporcie pragnie się rozwijać. Wielokrotna złota medalistka Mistrzostw Polski BJJ, ADCC, V-ce Mistrzyni Europy IBJJF. Należy do Kadry Narodowej Grapplingu. Trenerka brazylijskiego jiu-jitsu dla dzieci w naszym klubie. Prywatnie magister i pasjonatka fizjoterapii.', 'Brazylijskie jiu-jitsu trenuje od 15 roku życia. Aktualnie purpurowy pas BJJ, ma na koncie wiele doświadczeń i sukcesów zawodniczych. Wicemistrz Europy Ju-Jitsu NeWaza, wielokrotny medalista Mistrzostw Polski BJJ i ADCC. Spędził cały miesiąc trenując w klubie Cicero Costha Jiu Jitsu w São Paulo, co dało mu ogromną motywację do rozwoju i zdobywania kolejnych doświadczeń. Dąży do ustalonych sobie celów, wkładając w to całe serce. W klubie prowadzi treningi bjj na poziomie średnio-zaawansowanym. Wierzy, że w jiu-jitsu każdy może obrać własną drogę, wykształcić swój styl i sposób walki. BJJ uczy poszukiwania rozwiązań i pozwala uczyć się na błędach.', 'Z kickboxingiem związany od 13 lat. Aktualnie czynny i ambitny zawodnik oraz trener. Na koncie ma wiele sukcesów takich jak trzykrotne Mistrzostwo Polski w Kickboxingu oraz wielokrotne zwycięstwo Pucharu Polski. Z wielką pasją dzieli się swoją wiedzą i umiejętnościami podczas prowadzenia zajęć w naszym klubie. Swoim niegasnącym entuzjazmem buduje liczne i ambitne grupy trenujących osób, zarówno początkujących jak i zaawansowanych.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet felis et ante suscipit aliquam. Donec ultrices eros sit amet sapien elementum, vitae pulvinar neque dignissim. Sed hendrerit egestas justo, vel vulputate sem porttitor at. Etiam libero lacus, finibus at enim et, ornare tristique orci. Praesent faucibus ut lacus vitae pretium. Fusce porttitor turpis sed lectus sollicitudin cursus.']

// social array
const socialFB = ['Daniel Wrześniewski BJJ', 'Adam Górny BJJ', 'Psuj jitsu', 'Marcin Soszyński BJJ', 'Asia Zabulewicz', 'Michał Miranowski', 'Mateusz Kowalski', 'Marcin Grabowski' ]
const socialIG = ['danielwrzesniewskibjj', 'kleszczbjj', 'psuj_jitsu', 'marcinsoszynski_bjj', 'asia_zabulewicz', 'miranov_bjj', 'kowalkick', 'marcingrabekgrabowski']
const socialPhone = ['607 548 866', '691 839 697', '601 673 076', '791 499 009', 'asia_zabulewicz', '601 673 076', '507 006 766', 'lul']

// social href array
const socialFbHref = ['https://www.facebook.com/danielwrzesniewskibjj', 'https://www.facebook.com/adamgornybjj', 'https://www.facebook.com/PsujBJJ', 'https://www.facebook.com/Marcin-Soszy%C5%84ski-BJJ-627764904062903', 'https://www.facebook.com/asia.zabulewicz', 'https://www.facebook.com/profile.php?id=100002267867488', 'https://www.facebook.com/Kowalski.Kickboxing', 'https://www.facebook.com/marcin.grabowski.5876060']
const socialIgHref = ['https://www.instagram.com/danielwrzesniewski.bjj/', 'https://www.instagram.com/kleszczbjj/', 'https://www.instagram.com/psuj_jitsu/', 'https://www.instagram.com/marcinsoszynski_bjj/', 'https://www.instagram.com/asia_zabulewicz/', 'https://www.instagram.com/miranov_bjj/', 'https://www.instagram.com/kowalkick/', 'https://www.instagram.com/marcingrabekgrabowski/']
const socialPhoneHref = ['tel:+48607548866', 'tel:+48691839697', 'tel:+48601673076', 'tel:+48791499009', 'asia_zabulewicz', 'tel:+48601673076', 'tel:+48123', 'tel:+48123']

const mediaQueryMobile = window.matchMedia('(max-width: 800px')
const mediaQueryDesktop = window.matchMedia('(min-width: 800px')

// img src desktop
if (mediaQueryDesktop.matches){
    
    $(".swiper-slide:nth-of-type(1) img").attr("src","img/coaches/daniel.jpg");
    $(".swiper-slide:nth-of-type(2) img").attr("src","img/coaches/adam.jpg");
    $(".swiper-slide:nth-of-type(3) img").attr("src","img/coaches/andrzej.jpg");
    $(".swiper-slide:nth-of-type(4) img").attr("src","img/coaches/marcin.jpg");
    $(".swiper-slide:nth-of-type(5) img").attr("src","img/coaches/asia.jpg");
    $(".swiper-slide:nth-of-type(6) img").attr("src","img/coaches/michał.jpg");
    $(".swiper-slide:nth-of-type(7) img").attr("src","img/coaches/mateusz.jpg");
    $(".swiper-slide:nth-of-type(8) img").attr("src","img/coaches/zapasior.jpg");
}
 //img src  mobile
 if (mediaQueryMobile.matches){
         $(".swiper-slide:nth-of-type(1) img").attr("src","img/coaches/mobile/daniel.jpg");
         $(".swiper-slide:nth-of-type(2) img").attr("src","img/coaches/mobile/adam.jpg");
         $(".swiper-slide:nth-of-type(3) img").attr("src","img/coaches/mobile/andrzej.jpg");
         $(".swiper-slide:nth-of-type(4) img").attr("src","img/coaches/mobile/marcin.jpg");
         $(".swiper-slide:nth-of-type(5) img").attr("src","img/coaches/mobile/asia.jpg");
         $(".swiper-slide:nth-of-type(6) img").attr("src","img/coaches/mobile/michał.jpg");
         $(".swiper-slide:nth-of-type(7) img").attr("src","img/coaches/mobile/mateusz.jpg");
         $(".swiper-slide:nth-of-type(8) img").attr("src","img/coaches/zapasior.jpg");
}



    // swiper init
var mySwiper = new Swiper('.swiper-container', {

    // swiper settings
    speed: 800,
    spaceBetween: 0,
    slidesPerView: 'auto',
    loop: true,
    clickable: true,

    // swiper licznik
    pagination: {
      el: '.slide-number',
      type: 'custom',
       renderCustom: function (swiper, current, total) {
        return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
  }
    },

    //swiper nawigacja
    navigation: {
      nextEl: '.right',
      prevEl: '.left',
    },

        breakpoints: {
        800: {
            spaceBetween: 0,
            loop: false,

            pagination: {
                el: '.pagination',
            }
        }
    }
  });
  
  // disable mail
  $('#coaches .text span.coach-social:nth-of-type(2)').hide()
  
  // swiper change content
  mySwiper.on('slideChange', function(){
    console.log('ok')
    setTimeout(function(){
      console.log($('.swiper-slide-active').data().id)

      // text content
      $('#coaches .text h1').hide().text(coachesH1[$('.swiper-slide-active').data().id]).fadeIn(800);
      $('#coaches .text h3').hide().text(coachesH3[$('.swiper-slide-active').data().id]).fadeIn(800);
      $('#coaches .text p').hide().text(coachesP[$('.swiper-slide-active').data().id]).fadeIn(800);
      
      // social content
      $('#coaches .text span.coach-social:nth-of-type(1) span').hide().text(socialPhone[$('.swiper-slide-active').data().id]).fadeIn(800);
      $('#coaches .text span.coach-social:nth-of-type(3) span').hide().text(socialFB[$('.swiper-slide-active').data().id]).fadeIn(800);
      $('#coaches .text span.coach-social:nth-of-type(4) span').hide().text(socialIG[$('.swiper-slide-active').data().id]).fadeIn(800);
      $('#coaches .text span.coach-social img').hide().fadeIn(800);    

      // social href
      $('#coaches .text span.coach-social:nth-of-type(1) a').attr('href', socialPhoneHref[$('.swiper-slide-active').data().id])
      $('#coaches .text span.coach-social:nth-of-type(3) a').attr('href', socialFbHref[$('.swiper-slide-active').data().id])
      $('#coaches .text span.coach-social:nth-of-type(4) a').attr('href', socialIgHref[$('.swiper-slide-active').data().id])
      
      

      // specjalne ustawienia 

       // phone
       if($('.swiper-slide-active').data().id === 4){
        $('#coaches .text span.coach-social:nth-of-type(1)').hide()
       }
       else {
        $('#coaches .text span.coach-social:nth-of-type(1)').fadeIn(800)
       }
      
       // mail
       if($('.swiper-slide-active').data().id === 3){
        $('#coaches .text span.coach-social:nth-of-type(2)').fadeIn(800)
       }
       else {
        $('#coaches .text span.coach-social:nth-of-type(2)').hide()
       }

       // disable arrow
       if(mediaQueryDesktop.matches){
       if($('.swiper-slide-active').data().id === 7){
        $('.right').addClass('disable')
       }
       else{
           $('.right').removeClass('disable')
       }
       if($('.swiper-slide-active').data().id === 0){
        $('.left').addClass('disable')
       }
       else{
           $('.left').removeClass('disable')
       }
    }

  }, 0);

  })
// ######################################## KONIEC SLIDER #####################################################

// ######################################## MEDIA CONTENT #####################################################

const mediaQuery = window.matchMedia('(max-width: 800px')
const h2 = document.querySelectorAll('h2')
const h1 = document.querySelectorAll('h1')
const footerText = document.querySelectorAll('footer span')

if (mediaQuery.matches){
    h2[0].textContent = "Kilka słów o dyscyplinach, treningach"
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";
}


// ######################################## MEDIA CONTENT #####################################################


// ######################################## RE-SIZE REFRESH ########################################
var ww = $(window).width();
var limit = 800;
function refresh() {
   ww = $(window).width();
   var w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
}
var tOut;
$(window).resize(function() {
    var resW = $(window).width();
    clearTimeout(tOut);
    if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {
        tOut = setTimeout(refresh, 10);
    }
});

// ######################################## KONIEC RE-SIZE REFRESH ########################################