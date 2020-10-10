
$(function() {
  $('.intro').addClass('go');

  $('.reload').click(function() {
    $('.intro').removeClass('go').delay(200).queue(function(next) {
      $('.intro').addClass('go');
      next();
    });

  });
})

function scrollWin() {
  window.scrollBy(0, 900);
}

$(document).ready(function() {
   $(window).scroll( function(){
    $('#about').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},900);
        }
    }); 
  });
});

  $("grid").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

  function showNumber() {
    alert("Call me 07759394747");
  }