
_386 = {fastLoad:true,onePass:true, speedFactor:4.0};

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

var furry_egg = new Konami(function() {$(".trash").css("display","inline-block");});

var i = 0;
var txt = '【alloud】'; /* The text */
var txtj = 'TEMP';
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    $("#myname").html($("#myname").html() + txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();