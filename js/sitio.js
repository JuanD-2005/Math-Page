/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
  speed: 1000, // Integer. How fast to complete the scroll in milliseconds
  offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
  $(window).scroll(function () {
    var scrolltop = $(this).scrollTop();
    if (scrolltop >= 50) {
      $(".ir-arriba").fadeIn();
    } else {
      $(".ir-arriba").fadeOut();
    }

     if($(this).scrollTop() > 500) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
  });

});

/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {

  var nav = $('.encabezado');

  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    nav.addClass("fondo-menu");
    $("#menu-principal li a").css({
      'background': '#064e4e'
    });

  } else {
    nav.removeClass("fondo-menu");
    $("#menu-principal li a").css({
      'background': '#072146'
    });

  }
});
/* -----------------------------
 MENU DESPLEGABLE
 --------------------------------- */

function SL_SFMegaMenu(id, containerClass) {
  var hasClass = function (el, className) {
    var classNames = el.className.replace('  ', '').trim().split(' ');

    if (classNames.indexOf(className) == -1) {
      return false;
    } else {
      return true;
    }
  }


  var els = document.getElementById(id).getElementsByTagName('li');
  var container = null;

  if (containerClass) {
    container = document.getElementById(id).parentNode;

    while (!hasClass(container, containerClass) && container.parentNode && container.tagName != 'HTML') {
      container = container.parentNode;
    }

    if (!hasClass(container, containerClass)) {
      container = null;
    }
  }


  var mouseOver = function () {
    if (!hasClass(this, 'haschild-over')) {
      this.className += ' haschild-over';

      if (container) {
        var child = this.children[1];
        var childRect = child.getBoundingClientRect();
        var containerRect = container.getBoundingClientRect();
        var parentRect = this.getBoundingClientRect();

        if (childRect.width < containerRect.width) {
          if (childRect.right > containerRect.right) {
            child.style.left = (parseFloat(window.getComputedStyle(child).left) + containerRect.right - childRect.right) + 'px';
          } else {

          }
        } else {
          child.style.left = (parseFloat(window.getComputedStyle(container).left) - parseFloat(window.getComputedStyle(child).left)) + 'px';
        }
      }
    }
  }

  var mouseOut = function () {
    this.className = this.className.replace(new RegExp(" haschild-over\\b"), "");
  }

  for (var i = 0; i < els.length; i++) {
    var el = els[i];

    if (hasClass(el, 'haschild')) {
      if (el.addEventListener) {
        el.addEventListener('mouseover', mouseOver, false);
        el.addEventListener('mouseout', mouseOut, false);
      } else if (el.attachEvent) {
        el.attachEvent('onmouseover', mouseOver);
        el.attachEvent('onmouseout', mouseOut);
      } else {
        el.onmouseover = mouseOver;
        el.onmouseout = mouseOut;
      }
    }
  }
}


/*---------------------------------
-------------SCROLL----------------
----------------------------------*/
$(function () {
  $(window).scroll(function () {
    var scrolltop = $(this).scrollTop();
    if (scrolltop >= 50) {
      $("#miscroll").fadeIn();
    } else {
      $("#miscroll").fadeOut();
    }
  });
  $(".arriba").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 400);
  });

});

/*-------------------------------------
-------------SONIDO TELEFONO------------
---------------------------------------*/
$(function () {
  var beepOne = $("#ring")[0];
  $(".phone_no")
    .mouseenter(function () {
      beepOne.play();
      beepOne.volume = 0.01;
    });
});

/*-------------------------------------
-------------------------
---------------------------------------*/


$("#card2").hover(function () {

  $("#card2").css({
    'color': 'black',
    'background': 'orange'
  });

}, function () {

  $("#card2").css({
    'color': 'white',
    'background': '#222'
  });

});


$("#card3").hover(function () {

  $("#card3").css({
    'color': 'black',
    'background': 'white'
  });

}, function () {

  $("#card3").css({
    'color': 'white',
    'background': '#222'
  });

});



$("#card4").hover(function () {

  $("#card4").css({
    'color': 'white',
    'background': '#072146'
  });

}, function () {

  $("#card4").css({
    'color': 'white',
    'background': '#222'
  });

});
