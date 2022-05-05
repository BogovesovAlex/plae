$(window).ready(function(){
  $('.banner_text').delay(1000).animate({'opacity':'1'},1500);
});

$(window).ready(function(){
  $('.logo').delay(1000).animate({'opacity':'1'},1500);
});
$(window).ready(function(){
  $('#nav').delay(1000).animate({'opacity':'.4'},1500);
});

$(document).ready(function(){

    $(window).bind('scroll',function(e){
      redrawDotNav();
    });

    $('.block_first').click(function(){
      $('html, body').animate({
        scrollTop:0
      }, 500, function() {
      });
      return false;
    });
    $('.block_second').click(function(){
      $('html, body').animate({
        scrollTop:$('#about_plae').offset().top
      }, 500, function() {
      });
      return false;
    });
    $('.block_third').click(function(){
      $('html, body').animate({
        scrollTop:$('#customers_say_first').offset().top
      }, 500, function() {
      });
      return false;
    });
    $('.block_fourth').click(function(){
      $('html, body').animate({
        scrollTop:$('#customers_say_second').offset().top
      }, 500, function() {
      });
      return false;
    });
    $('.block_fifth').click(function(){
      $('html, body').animate({
        scrollTop:$('#range').offset().top
      }, 500, function() {
      });
      return false;
    });
    $('.block_sixth').click(function(){
      $('html, body').animate({
        scrollTop:$('#why_plae').offset().top
      }, 500, function() {
      });
      return false;
    });

  function redrawDotNav(){
    var block1Top =  0;
    var block2Top =  $('#about_plae').offset().top - (($('#customers_say_first').offset().top - $('#about_plae').offset().top) / 2);
    var block3Top =  $('#customers_say_first').offset().top - (($('#customers_say_second').offset().top - $('#customers_say_first').offset().top) / 2);
    var block4Top =  $('#customers_say_second').offset().top - (($('#range').offset().top - $('#customers_say_second').offset().top) / 2);
    var block5Top =  $('#range').offset().top - (($('#why_plae').offset().top - $('#range').offset().top) / 2);
    var block6Top =  $('#why_plae').offset().top - (($('#find').offset().top - $('#why_plae').offset().top) / 2);
    var block7Top =  $('#find').offset().top - (($(document).height() - $('#find').offset().top) / 2);

    $('#nav a').removeClass('active');
    if($(document).scrollTop() >= block1Top && $(document).scrollTop() < block2Top){
      $('#nav .block_first').addClass('active');
    } 
    else if ($(document).scrollTop() >= block2Top && $(document).scrollTop() < block3Top){
      $('#nav .block_second').addClass('active');
    } 
    else if ($(document).scrollTop() >= block3Top && $(document).scrollTop() < block4Top){
      $('#nav .block_third').addClass('active');
    }
    else if ($(document).scrollTop() >= block4Top && $(document).scrollTop() < block5Top){
      $('#nav .block_fourth').addClass('active');
    }
    else if ($(document).scrollTop() >= block5Top && $(document).scrollTop() < block6Top){
      $('#nav .block_fifth').addClass('active');
    }
    else if ($(document).scrollTop() >= block6Top && $(document).scrollTop() < block7Top){
      $('#nav .block_sixth').addClass('active');
    }
  }


  $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
      if (!e.namespace) return
      var carousel = e.relatedTarget
    $('#number').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length)
    })
    $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 200,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
      0:{
          items:1
      }
    }
})

});