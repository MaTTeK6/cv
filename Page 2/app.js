$(window).scroll(function(e) {
    var currentposition = $(document).scrollTop(0);//aktualna pozycja względem początku          
    var bannerheight = $(".nawigacja").height(0.7);//wysokość elementu, po którym menu ma stać się białe
     if(currentposition>bannerheight)//odwrotny warunek
      {        

          $(".nawigacja").addClass("lover");
      }
 });