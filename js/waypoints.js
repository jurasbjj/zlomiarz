// ABOUT_US
$('#about_us').waypoint(function(direction){
    if(direction == 'down'){
        $('#about_us header').addClass('js-animate');
        $('#about_us .text').addClass('js-animate');
        $('.swiper-container').addClass('js-animate');
        $('#about_us button').addClass('js-animate');
    }
    else{
        $('#about_us header').removeClass('js-animate');
        $('#about_us .text').removeClass('js-animate');
        $('.swiper-container').removeClass('js-animate');
        $('#about_us button').removeClass('js-animate');
    }

}, { offset: '70%'});

// SCHEDULE
$('#schedule').waypoint(function(direction){
    if(direction == 'down'){
        $('#schedule header').addClass('js-animate');
        $('#schedule img').addClass('js-animate');
    }
    else{
        $('#schedule header').removeClass('js-animate');
        $('#schedule img').removeClass('js-animate');
    }

}, { offset: '70%'});

// PRICE
$('#price').waypoint(function(direction){
    if(direction == 'down'){
        $('#price header').addClass('js-animate');
        $('#price .wraper').addClass('js-animate');
    }
    else{
        $('#price header').removeClass('js-animate');
        $('#price .wraper').removeClass('js-animate');
    }

}, { offset: '70%'});

// FAQ
$('#faq').waypoint(function(direction){
    if(direction == 'down'){
        $('#faq header').addClass('js-animate');
        $('#faq .tasks').addClass('js-animate');
    }
    else{
        $('#faq header').removeClass('js-animate');
        $('#faq .tasks').removeClass('js-animate');
    }

}, { offset: '70%'});

// contact
$('#contact').waypoint(function(direction){
    if(direction == 'down'){
        $('#contact header').addClass('js-animate');
        $('#contact .info').addClass('js-animate');
    }
    else{
        $('#contact header').removeClass('js-animate');
        $('#contact .info').removeClass('js-animate');
    }

}, { offset: '70%'});