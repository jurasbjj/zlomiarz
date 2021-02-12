
// ###################################################### SCROLL ###################################################### 
   // SCROLL NAWIGACJA AKTYWACJA
$(window).scroll(function () {
    if ($(window).scrollTop() > 64) {
       $('nav.desktop').addClass('active');
    } else {
       $('nav.desktop').removeClass('active');
    }
});
// ###################################################### KONIEC SCROLL ###################################################### 


// ######################################################  MOBILE TEXT CONTENT ################################################ 

if (mediaQueryMobile.matches){
    h2[0].textContent = "Kilka słów o dyscyplinach, treningach"
}
// ##################################################### KONIEC MOBILE TEXT CONTENT ############################################# 

//###################################################### CLASSES #############################################################
const activitys = document.querySelectorAll('.activity')
activitys.forEach(function(activity){
    activity.addEventListener('click', function(){
        // console.log(this)
        activitys[this.dataset.id].classList.toggle('active');
        for (i = 0; i < activitys.length; i++){
            if (i == this.dataset.id) continue;
            activitys[i].classList.remove('active');
        }
    })
})

// ###################################################### KONIEC CLASSES #####################################################

// ###################################################### SLIDER ################################################################
i = 0

// 
// automatyczna zmiana
setTimeout(
    function()
    {
        $('header .bg picture:nth-of-type(1)').addClass('active');

    }, 100);
setInterval(
    function()
    {
        $('header picture').toggleClass('active');
        if(i == 0){
            i++
        }
        else{
            i--
        }
        $('.slide-number').text('0'+(i+1) + ' / 02')

    }, 10000);
  



$('.right').click(function(){
    if (i == 0){
        $('header picture').toggleClass('active')
        i++
        $('.slide-number').text('0'+(i+1) + ' / 02')
    }
})
$('.left').click(function(){
    if (i == 1){
        $('header picture').toggleClass('active')
        i--
        $('.slide-number').text('0'+(i+1) + ' / 02')
    }
})




// ###################################################### KONIEC SLIDER ##########################################################


