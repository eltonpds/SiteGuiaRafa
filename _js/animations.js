$(document).ready(function() {    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) === false) {
        $(window).scroll( function(){   
            $('.hideme').each( function(i){            
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},1000);                    
                }            
            });     
        });  
      } 
      else {
        $('.hideme').fadeTo(1000, 1);
      }
});

