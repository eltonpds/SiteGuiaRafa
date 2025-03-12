$(document).ready(function() {    
    if(navigator.userAgent.match(/Windows/i) !== null
    && navigator.userAgent.match(/Android/i) === null) {
      $(window).scroll( function(){   
      $('.hideme').each( function(i){            
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){ 
                $(this).fadeIn(2000);   
            }            
        });     
        });  
      } 
      else  if (navigator.userAgent.match(/Windows/i) === null 
      && navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/Nexus/i)) {
        $('.hideme').show();
      }
});