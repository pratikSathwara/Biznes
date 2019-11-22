function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

$('.menu li a').click(function () {
  $('#myNav').css("height", "0%");

});

$(document).ready(function () {
  $(document).mouseup(function(e) 
{
    var container = $("#search_ip");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
  $(".fa-search").click(function () {
    $("#search_ip").toggle();
  });
});

        $(document).ready(function() {
        $(".tab").click(function () {
            $(".menu li").removeClass("active");
            $(this).addClass("active");   
        });
        });
    
$(function () {
  $('#ChangeToggle').click(function () {
    $('#navbar-hamburger').toggleClass('hidden');
    $('#navbar-close').toggleClass('hidden');
  });
});

// When the user clicks on the button, scroll to the top of the document
$(document).ready(function () {
  $("#scroll_btn").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

});
/* Scroll Top Function end */
/* Scroll Down Start  */
$(document).ready(function () {
  $(".ct-btn-scroll").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});
/* Scroll Down end */
/* Scroll Top Function start */
      window.onscroll = function() {scrollFunction()};

         function scrollFunction() {
           if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
             document.getElementById("scroll_btn").style.display = "block";
           } else {
             document.getElementById("scroll_btn").style.display = "none";
           }
         }

         // When the user clicks on the button, scroll to the top of the document
         $(document).ready(function() {
             $("#scroll_btn").click(function(event) {
                 event.preventDefault();
                 $("html, body").animate({ scrollTop: 0 }, "slow");
                 return false;
             });

         });         
/* Scroll Top Function end */ 

$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $('.navbar').addClass("sticky");
    $('.navbar').css({"background-color": "#fff", "transition": "0.5s all", "padding": "20px 0px"});
  } else {
    $('.navbar').removeClass("sticky");
    $('.navbar').css({"background-color": "transparent", "padding": "35px 0px"});
  }
});

$(function () {
  $('#ChangeToggle').click(function () {
    $('#navbar-hamburger').toggleClass('hidden');
    $('#navbar-close').toggleClass('hidden');
  });
});

AOS.init();
AOS.init({
  duration: 1500,
  once: true,
  easing: 'linear',
  disable: 'mobile',
});


$(document).ready(function () {
  $('.owl-one').owlCarousel({

    loop: true,
    nav: false,
    dots: false,
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450
  });
});
$('.owl-product').owlCarousel({
    loop:true,
    margin:10,
     dots: false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});




    var $tabing = $('.portfolioContainer');
    $tabing.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $tabing.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 

});
