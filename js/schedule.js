$('.table-schedule td').addClass('active');






$('.select-type div').click(function () {
  $('.table-schedule tr:not(:nth-of-type(1)) td').removeClass('active');
  $('.select-type .dot').removeClass('active')

})

$('.select-type div:nth-of-type(1)').click(function () {
  $('.select-type div:nth-of-type(1) .dot').addClass('active')
  $('.select-selected').text("Wszystkie zajęcia")
  $('.table-schedule tr:not(:nth-of-type(1)) td').addClass('active');
})
$('.select-type div:nth-of-type(2)').click(function () {
  $('.select-type div:nth-of-type(2) .dot').addClass('active')
  $('.select-selected').text("BRAZYLIJSKIE JIU-JITSU")
  $('.table-schedule tr:not(:nth-of-type(8)) td').addClass('active');
  $('.table-schedule tr:nth-of-type(4) td:nth-of-type(6)').removeClass('active');;
})
$('.select-type div:nth-of-type(3)').click(function () {
  $('.select-type div:nth-of-type(3) .dot').addClass('active')
  $('.select-selected').text("BJJ wszyscy")
  $('.table-schedule tr td#bjj-all').addClass('active');
})
$('.select-type div:nth-of-type(4)').click(function () {
  $('.select-type div:nth-of-type(4) .dot').addClass('active')
  $('.select-selected').text("Wszystkie początkujący")
  $('.table-schedule tr td#bjj-beginners').addClass('active');
})
$('.select-type div:nth-of-type(5)').click(function () {
  $('.select-type div:nth-of-type(5) .dot').addClass('active')
  $('.select-selected').text("BJJ średnio-zaawansowani")
  $('.table-schedule tr td#bjj-intermediate').addClass('active');
})
$('.select-type div:nth-of-type(6)').click(function () {
  $('.select-type div:nth-of-type(6) .dot').addClass('active')
  $('.select-selected').text("BJJ NO-GI")
  $('.table-schedule tr td#bjj-no-gi').addClass('active');
})
$('.select-type div:nth-of-type(7)').click(function () {
  $('.select-type div:nth-of-type(7) .dot').addClass('active')
  $('.select-selected').text("BJJ zaawansowani")
  $('.table-schedule tr td#bjj-advanced').addClass('active');
})
$('.select-type div:nth-of-type(8)').click(function () {
  $('.select-type div:nth-of-type(8) .dot').addClass('active')
  $('.select-selected').text("BJJ sparingi GI & NO-GI")
  $('.table-schedule tr td#bjj-sparring').addClass('active');
})
$('.select-type div:nth-of-type(9)').click(function () {
  $('.select-type div:nth-of-type(9) .dot').addClass('active')
  $('.select-selected').text("BJJ młodziki")
  $('.table-schedule tr td#bjj-kids-young, .table-schedule tr td#bjj-kids-old').addClass('active');
})
$('.select-type div:nth-of-type(10)').click(function () {
  $('.select-type div:nth-of-type(10) .dot').addClass('active')
  $('.select-selected').text("Zapasy")
  $('.table-schedule tr td#wrestling').addClass('active');
})
$('.select-type div:nth-of-type(11)').click(function () {
  $('.select-type div:nth-of-type(11) .dot').addClass('active')
  $('.select-selected').text("KICKBOXING")
  $('.table-schedule tr:nth-of-type(8) td').addClass('active');
  $('.table-schedule tr:nth-of-type(4) td:nth-of-type(6)').addClass('active');
})
$('.select-type div:nth-of-type(12)').click(function () {
  $('.select-type div:nth-of-type(12) .dot').addClass('active')
  $('.select-selected').text("Kickboxing początkujący")
  $('.table-schedule tr td#kick-beginners').addClass('active');

})
$('.select-type div:nth-of-type(13)').click(function () {
  $('.select-type div:nth-of-type(13) .dot').addClass('active')
  $('.select-selected').text("Kickboxing średnio-zaawansowani")
  $('.table-schedule tr td#kick-intermediate').addClass('active');
})
$('.select-type div:nth-of-type(14)').click(function () {
  $('.select-type div:nth-of-type(14) .dot').addClass('active')
  $('.select-selected').text("Kickboxing trening obwodowy")
  $('.table-schedule tr td#kick-circut').addClass('active');
})
$('.select-type div:nth-of-type(15)').click(function () {
  $('.select-type div:nth-of-type(15) .dot').addClass('active')
  $('.select-selected').text("Kickboxing sparingi")
  $('.table-schedule tr td#kick-sparring').addClass('active');
})


 $('.select-selected, .select img').click(function(){
   $('.select, .select-fade').toggleClass('active');
 })
$('.select-type').click(function(){
  $('.select, .select-fade').removeClass('active');
})


$(document).click(function(e){
if(!$('.select').is(e.target) && $('.select').has(e.target).length === 0){// if div is not target nor its descendant
  $('.select, .select-fade').removeClass('active');
}
});