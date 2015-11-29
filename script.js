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

  if ($(window).width() < 900){
    $("#navhome").html('<i class="material-icons">home</i>');
    $("#navplans").html('<i class="material-icons">local_atm</i>');
    $("#navpreview").html('<i class="material-icons">ondemand_video</i>');
    $("#navcontact").html('<i class="material-icons">touch_app</i>');
  }
  else {
    $("#navhome").html('HOME');
    $("#navplans").html('PLANS');
    $("#navpreview").html('PREVIEW');
    $("#navcontact").html('GET IN TOUCH');
  }

  $('nav ul li a').click(function() {
    event.preventDefault();
    newLocation = this.href;
    if (endsWith(newLocation,"#")==false){
      $('body').fadeOut(1000, newpage);
    }
  });

  $('.handle').on('click', function() {
  		$('nav ul').toggleClass('autoShow');
  	})
  $('nav ul li').on('click', function(){
  	$('nav ul').toggleClass('autoShow');
  })

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

    if ($(window).width() < 900){
      $("#navhome").html('<i class="material-icons">apps</i>');
      $("#navplans").html('<i class="material-icons">local_atm</i>');
      $("#navpreview").html('<i class="material-icons">ondemand_video</i>');
      $("#navcontact").html('<i class="material-icons">touch_app</i>');
    }
    else {
      $("#navhome").html('HOME');
      $("#navplans").html('PLANS');
      $("#navpreview").html('PREVIEW');
      $("#navcontact").html('GET IN TOUCH');
    }
  });

  function newpage() {
    window.location = newLocation;
  }
});

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
