 $('.count').each(function () {
           $(this).prop('Counter',0).animate({
               Counter: $(this).text()
           }, {
               duration: 4000,
               easing: 'swing',
               step: function (now) {
                   $(this).text(Math.ceil(now));
               }
           });
         });
         
          function openNav() {
            document.getElementById("myNav").style.height = "100%";
          }

          function closeNav() {
            document.getElementById("myNav").style.height = "0%";
          }

          $('.menu li a').click(function() {
            $('#myNav').css("height","0%");
          });
                  $(document).ready(function() {
        $(".tab").click(function () {
            $(".menu li").removeClass("active");
            $(this).addClass("active");   
        });
        });
                  
         $(function() {
         $('#ChangeToggle').click(function() {
           $('#navbar-hamburger').toggleClass('hidden');
           $('#navbar-close').toggleClass('hidden');  
         });
        });

         // When the user clicks on the button, scroll to the top of the document
         $(document).ready(function() {
             $("#scroll_btn").click(function(event) {
                 event.preventDefault();
                 $("html, body").animate({ scrollTop: 0 }, "slow");
                 return false;
             });

         });         
/* Scroll Top Function end */
/* Scroll Down Start  */
      $(document).ready(function(){
        $(".ct-btn-scroll").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
              window.location.hash = hash;
            });
          } 
        });
      });
/* Scroll Down end */


$(window).scroll(function(){
   if($(this).scrollTop()>80){
      $('.navbar').addClass("sticky");
      $('.navbar').css({"background-color":"#fff", "transition":"0.5s all"})
   }
   else{
       $('.navbar').removeClass("sticky");
       $('.navbar').css("background-color","transparent");
   }
});

            $(function() {
         $('#ChangeToggle').click(function() {
           $('#navbar-hamburger').toggleClass('hidden');
           $('#navbar-close').toggleClass('hidden');  
         });
   });

         AOS.init();
         AOS.init({
          duration: 1500,
          once: true,
          easing: 'linear',
        });
         AOS.init({disable: 'mobile'});
         
        $(document).ready(function(){ 
         $('.owl-one').owlCarousel({
             
             loop:true,
             nav:true,
             dots: false,
             items:1,
             margin:30,
             stagePadding:30,
             smartSpeed:450
         });
         });
        $(document).ready(function(){
            $(".fa-search").click(function(){
            $("#search_ip").toggle();
        });
        }); 

