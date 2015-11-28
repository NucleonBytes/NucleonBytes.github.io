$(window).scroll(function(){
  var height = $(window).scrollTop();
  if(height  > 55) {
    $("nav").addClass("shrinknav");
  }
  else {
    $("nav").removeClass("shrinknav");
  }
});

$(document).ready(function() {
  $('body').css('display', 'none');
  $('body').fadeIn(1000);

  $('nav ul li a').click(function() {
    event.preventDefault();
    newLocation = this.href;
    if (endsWith(newLocation,"#")==false){
      $('body').fadeOut(1000, newpage);
    }
  });

  if ($(window).width() <988){
    $(".col33").removeClass("paddright2");
    $(".col33").removeClass("paddleft2");
  }

  $(window).resize(function() {
    if ($(window).width() <988){
      $(".col33").removeClass("paddright2");
      $(".col33").removeClass("paddleft2");
    }
    else{
      if ($(".col33").hasClass("paddleft2")==false){
        $(".col33").addClass("paddright2");
        $(".col33").addClass("paddleft2");
      }
    }
  });

  function newpage() {
    window.location = newLocation;
  }
});

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
