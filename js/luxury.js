(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
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
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

/*
//Showroom slide show

let i = 0;
  let images = [];
  let time = 1000;
  //Images
  images[0] = "image/man-in-black-sleeveless-shirt-sitting-on-wooden-high-chair-996219.jpg";
  images[1] = "image/man-in-green-t-shirt-using-router-on-wooden-piece-3637798.jpg";
  images[2] = "image/man-on-cutting-table-3536424.jpg";
  images[3] = "image/man-working-on-a-machinery-3637827.jpg";
  images[4] = "image/man-working-on-a-wooden-board-3637800.jpg";  

function sliderImage(){
  
  document.slide.src = images[i];
  if(i < images.lenght - 1){
    i++;
  }else{
    i = 0;
  }
  setTimeout("sliderImage()", time);
}
window.onload = sliderImage;
*/


//Fade-in Animation

let faders = document.querySelectorAll('.fade-in');
let options = {
  threshold: 0.3
};
//call the intersectionOberserver
let fadeInOnScroll = new IntersectionObserver(fadeAnime, options);
//call your function
function fadeAnime(entries){
entries.forEach(entry => {
  if(!entry.isIntersecting){
    return;
  }else{
    entry.target.classList.add('appear');
    fadeInOnScroll.unobserve(entry.target);
  }
});
}
faders.forEach(fader =>{
  fadeInOnScroll.observe(fader);
})