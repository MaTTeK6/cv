$(window).scroll(function(e) {
    var currentposition = $(document).scrollTop();//aktualna pozycja względem początku          
    var bannerheight = $(".row1").height();//wysokość elementu, po którym menu ma stać się białe
 
 
     if(currentposition == bannerheight)//odwrotny warunek
      {
            
            $(".nawigacja").addClass("lover");

      }

      else
         $(".nawigacja").removeClass("lover")
 });

 $(window).scroll(function(e) {
    var currentposition = $(document).scrollTop();//aktualna pozycja względem początku          
    var bannerheight = $(".row1").height();//wysokość elementu, po którym menu ma stać się białe
 
 
     if(currentposition == bannerheight)//odwrotny warunek
      {
            
            $('a').addClass("color");

      }

      else
         $('a').removeClass("color")
 });

 $(window).scroll(function(e) {
      var currentposition = $(document).scrollTop();//aktualna pozycja względem początku          
      var bannerheight = $(".row1").height();//wysokość elementu, po którym menu ma stać się białe
   
   
       if(currentposition == bannerheight)//odwrotny warunek
        {
              
              $('.dropdown-menu').addClass("klasa");
  
        }
  
        else
           $('.dropdown-menu').removeClass("klasa")
   });
   
  

   