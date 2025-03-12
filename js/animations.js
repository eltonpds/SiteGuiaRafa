$(document).ready(function() {    
    if(navigator.userAgent.match(/Android/i) === false
        || navigator.userAgent.match(/webOS/i) === false
        || navigator.userAgent.match(/AppleWebKit/i) === false
        || navigator.userAgent.match(/Mobile Safari/i) === false
        || navigator.userAgent.match(/iPhone/i) === false
        || navigator.userAgent.match(/iPad/i) === false
        || navigator.userAgent.match(/iPod/i) === false
        || navigator.userAgent.match(/BlackBerry/i) === false 
        || navigator.userAgent.match(/Windows Phone/i) === false) {
        $(window).scroll( function(){   
           $('.hideme').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);                    
            }            
        });     
        });  
      } 
      else {
        $('.hideme').fadeTo(1000, 1);
      }
});

