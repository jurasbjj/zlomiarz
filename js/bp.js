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
               slidesPerView: 'auto',
               spaceBetween: 32,
               loop: false,

               autoplay:{
                   delay: 6000,
               },

           }
       }
  });