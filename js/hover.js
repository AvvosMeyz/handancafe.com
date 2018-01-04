$(document).ready( function() {
    $(' #meal ').on('mouseenter',function() {
        $('#products .container .columns .column .image #plate').stop().animate({opacity:'0.30'});
        $('#products .container .columns .column #arrow, #caption').css('display', 'block');
        
    })
    $('#meal').on('mouseout', () => {
        $('#products .container .columns .image #plate').stop().animate({opacity:'1'});
        $('#products .container .columns .column #arrow, #caption').css('display', 'none');
        
    })

    

    // Smooth Scrolling
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        }
    }
    });

   

}); 

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
  
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });



/*$(document).ready(function(){
    $(".columns .image").click(function(){
        $(this).hide();
    });
}); */