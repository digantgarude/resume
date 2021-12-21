$(document).ready(function() { // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });


  var leading_typewriter_para = document.getElementById('leading-typewriter-para');

  var typewriter = new Typewriter(leading_typewriter_para, {
      loop: true
  });

  typewriter.typeString("I am a problem solver.")
      .pauseFor(2500)
      .deleteAll()
      .typeString('I like working on <b>Software Development</b>')
      .pauseFor(2500)
      .deleteChars(20)
      .typeString('<b>Machine Learning</b>')
      .pauseFor(2500)
      .deleteChars(16)
      .typeString('<b>Blockchain Development</b>')
      .start();


}); // End of use strict
