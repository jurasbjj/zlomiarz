 //desktop aktywacja nawigacji
 if(mediaQueryDesktop.matches){
  $(window).scroll(function () {
     if ($(window).scrollTop() > 64) {
        $('nav').addClass('active');
     } else {
        $('nav').removeClass('active');
     }
  });
 }

// ###################################################### FAQ ######################################################
const quests = document.querySelectorAll('.question')

 quests.forEach(function(quest){
     quest.addEventListener('click', function(){
        //  console.log(this.dataset.id)
         quests[this.dataset.id].classList.toggle('active');
         for (i = 0; i < quests.length; i++){
             if (i == this.dataset.id) continue;
             quests[i].classList.remove('active');
         }
     })
 })

// ###################################################### KONIEC FAQ ######################################################

// ###################################################### SLIDER ABOUT_US ######################################################
// MOBILE 
  var swiper = new Swiper('.swiper-container', {
    speed: 800,
    effect: 'slide',
    slidesPerView: '1',
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
       breakpoints:{
           800:{
                slidesPerView: 3,
                spaceBetween: 0,
                loop: true,
                centeredSlides: true,

               autoplay:{
                   delay: 6000,
               },

           }
       }
  });
 // #about_us SLIDER WRAP BUTTON
 $('#about_us button').click(function(){
     $('.wrap-text').toggleClass('active')
     $('#about_us button').toggleClass('active');
     if ($("#about_us button").hasClass("active")) {
         $("#about_us button span").text('Czytaj mniej');
       }
     else {
         $('#about_us button span').text('Czytaj więcej')
     }
 })

// ###################################################### SLIDER ABOUT_US ######################################################





//  ###################################################### MOBILE TEXT CONTENT ###################################################
if (mediaQueryMobile.matches){
    // h2[0].textContent = "Kim jesteśmy? Kilka słów o klubie Złomiarz Team Gdańsk."
    // h2[1].textContent = "Sprawdź aktualny rozkład treningów."
    // h1[1].textContent = "Grafik zajęć"
     h2[2].textContent = "Składki członkowskie"
    // h2[3].textContent = 'Najczęściej zadawane pytania i nasze odpowiedzi.'
     h2[4].textContent = 'Masz jakiekolwiek pytania? Napisz do nas.'
    footerText[0].textContent = 'Copyright © Złomiarz Team Gdańsk'
    footerText[1].textContent = "";
}

if(mediaQueryDesktop.matches){
    $(".swiper-slide#s1 img").attr("src","img/about_us/onas1.webp");
    $(".swiper-slide#s2 img").attr("src","img/about_us/onas2.webp");
    $(".swiper-slide#s3 img").attr("src","img/about_us/onas3.webp");
    $(".swiper-slide#s4 img").attr("src","img/about_us/onas4.webp");
    $(".swiper-slide#s5 img").attr("src","img/about_us/onas5.webp");
    $(".swiper-slide#s6 img").attr("src","img/about_us/onas6.webp");

    $(".page-header .kick").attr("src", $(".page-header .kick").data().src);
    $(".page-header .bjj").attr("src", $(".page-header .bjj").data().src);
    $(".bg-logo").attr("src", $(".bg-logo").data().src);
    $(".card .desktop").attr("src", $(".card .desktop").data().src);

    
}


//  ################################################### KONIEC MOBILE TEXT CONTENT ###############################################


// ###################################################### CONTACT ###############################################################



// SLIDER HEADER PAGE
i = 0

// 
// automatyczna zmiana
setTimeout(
    function()
    {
        $('header .bg img:nth-of-type(1)').addClass('active');

    }, 100);
setInterval(
    function()
    {
        $('header img').toggleClass('active');
        if(i == 0){
            i++
        }
        else{
            i--
        }

    }, 10000);
  



$('.right').click(function(){
    if (i == 0){
        $('header img').toggleClass('active')
        i++
    }
})
$('.left').click(function(){
    if (i == 1){
        $('header img').toggleClass('active')
        i--
    }
})
// KONIEC  SLIDER HEADER PAGE 



