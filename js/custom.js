$(document).ready(function() {
  var number_of_slides = 114
  var time = 0
  var total_time = parseInt($('#audio-slideshow').attr('data-audio-duration'))
  for (i = 1, len = number_of_slides, text = ""; i < len; i++) {
    time = time + (total_time/number_of_slides)
    var img =  $("<img src='images/" + i + ".jpg' data-slide-time='"+time+"'>")
    $('.audio-slides').append(img)
  }
  $('#audio-slideshow').audioSlideshow();
});