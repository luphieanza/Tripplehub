//Sticky Navbar 
$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#start-change');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $("#nav").css('background-color', '#82c8ff');
        } else {
            $('#nav').css('background-color', 'transparent');
        }
    });
     }
 });