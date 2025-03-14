$(document).ready(function() {    
  $('.tile').hide();        
    if(navigator.userAgent.match(/Windows/i) !== null
    && navigator.userAgent.match(/Android/i) === null) {
      $(window).scroll( function(){   
      $('.hideme').each( function(i){    
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){ 
                $(this).fadeIn(2000);   
                loadMosaic();
              }  

        });     
        });  
      } 
      else  if (navigator.userAgent.match(/Windows/i) === null 
      && navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/Nexus/i)) {
        $('.hideme').fadeIn();    
        loadMosaic();   
      }
});

function loadMosaic() {
  $('.tile').each( function(i) {
    $('#img1').delay(1500).fadeIn(1000);
    $('#img2').delay(1700).fadeIn(1000);
    $('#img3').delay(1900).fadeIn(1000);
    $('#img4').delay(2100).fadeIn(1000);
    $('#img5').delay(2200).fadeIn(1000);
    $('#img6').delay(2300).fadeIn(1000);
    $('#img7').delay(2400).fadeIn(1000);
    $('#img8').delay(2500).fadeIn(1000);
  });
}