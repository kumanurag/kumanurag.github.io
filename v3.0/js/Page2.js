$(window).bind("load", function() {

$(document).ready(function () {
            $('a[href^="#"]').on('click', function (e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 900, 'swing', function () {
                    window.location.hash = target;
                });
            });
        });

$("#up").click(function() {
    $('html, body').animate({
        scrollTop: $("#page2_div1").offset().top
    }, 200);
});


$(document).ready(function () {

      $("#page2_div2").mouseover(function () {
            $(".my_work").css('background-color', '#201d04');
             $(".my_work p").css('color', 'white');
        });

        $("#page2_div2").mouseout(function () {
            $(".my_work").css('background-color', 'white');
             $(".my_work p").css('color', '#525251');
        });

         $("#work1").mouseover(function () {
            $(".my_work").css('background-color', '#201d04');
             $(".my_work p").css('color', 'white');
        });

        $("#work1").mouseout(function () {
            $(".my_work").css('background-color', 'white');
             $(".my_work p").css('color', '#525251');
        });

        $("#page2_div1").mouseover(function () {
            $(".about_me").css('background-color', '#201d04');
             $(".about_me p").css('color', 'white');
        });

        $("#page2_div1").mouseout(function () {
            $(".about_me").css('background-color', 'white');
             $(".about_me p").css('color', '#525251');
        });

        $("#skills").mouseover(function () {
            $(".myskills").css('background-color', '#201d04');
             $(".myskills p").css('color', 'white');
        });

        $("#skills").mouseout(function () {
            $(".myskills").css('background-color', 'white');
             $(".myskills p").css('color', '#525251');
        });
      $("#page2_div3").mouseover(function () {
            $(".contact_me").css('background-color', '#201d04');
             $(".contact_me p").css('color', 'white');
        });

        $("#page2_div3").mouseout(function () {
            $(".contact_me").css('background-color', 'white');
             $(".contact_me p").css('color', '#525251');
        });


      $(".myskills").mouseover(function () {
            $(".myskills").css('background-color', '#201d04');
             $(".myskills p").css('color', 'white');
        });

        $(".myskills").mouseout(function () {
            $(".myskills").css('background-color', 'white');
             $(".myskills p").css('color', '#525251');
        });

      $(".my_work").mouseover(function () {
            $(".my_work").css('background-color', '#201d04');
             $(".my_work p").css('color', 'white');
        });

        $(".my_work").mouseout(function () {
            $(".my_work").css('background-color', 'white');
             $(".my_work p").css('color', '#525251');
        });

        $(".home").mouseover(function () {
            $(".home").css('background-color', '#201d04');
             $(".home p").css('color', 'white');
        });

        $(".home").mouseout(function () {
            $(".home").css('background-color', 'white');
             $(".home p").css('color', '#525251');
        });

        $(".about_me").mouseover(function () {
            $(".about_me").css('background-color', '#201d04');
             $(".about_me p").css('color', 'white');
        });

        $(".about_me").mouseout(function () {
            $(".about_me").css('background-color', 'white');
             $(".about_me p").css('color', '#525251');
        });
      $(".contact_me").mouseover(function () {
            $(".contact_me").css('background-color', '#201d04');
             $(".contact_me p").css('color', 'white');
        });

        $(".contact_me").mouseout(function () {
            $(".contact_me").css('background-color', 'white');
             $(".contact_me p").css('color', '#525251');
        });
      $(".morework").mouseover(function () {
            $(".morework").css('background-color', '#201d04');
             $(".morework p").css('color', 'white');
        });

        $(".morework").mouseout(function () {
            $(".morework").css('background-color', 'white');
             $(".morework p").css('color', '#525251');
        });

        $(".morework1").mouseover(function () {
            $(".morework1").css('background-color', '#201d04');
             $(".morework1 p").css('color', 'white');
        });

        $(".morework1").mouseout(function () {
            $(".morework1").css('background-color', 'white');
             $(".morework1 p").css('color', '#525251');
        });


        $(".page2_div2_work1_hover_button").mouseover(function () {
            $(".page2_div2_work1_hover_button").css('background-color', '#201d04');
             $(".page2_div2_work1_hover_button_text").css('color', 'white');
        });

        $(".page2_div2_work1_hover_button").mouseout(function () {
            $(".page2_div2_work1_hover_button").css('background-color', 'white');
             $(".page2_div2_work1_hover_button_text").css('color', '#525251');
        });

        $(".page2_div2_work2_hover_button").mouseover(function () {
            $(".page2_div2_work2_hover_button").css('background-color', '#201d04');
             $(".page2_div2_work2_hover_button_text").css('color', 'white');
        });

        $(".page2_div2_work2_hover_button").mouseout(function () {
            $(".page2_div2_work2_hover_button").css('background-color', 'white');
             $(".page2_div2_work2_hover_button_text").css('color', '#525251');
        });

        $(".page2_div2_work3_hover_button").mouseover(function () {
            $(".page2_div2_work3_hover_button").css('background-color', '#201d04');
             $(".page2_div2_work3_hover_button_text").css('color', 'white');
        });

        $(".page2_div2_work3_hover_button").mouseout(function () {
            $(".page2_div2_work3_hover_button").css('background-color', 'white');
             $(".page2_div2_work3_hover_button_text").css('color', '#525251');
        });

        $(".page2_div2_work4_hover_button").mouseover(function () {
            $(".page2_div2_work4_hover_button").css('background-color', '#201d04');
             $(".page2_div2_work4_hover_button_text").css('color', 'white');
        });

        $(".page2_div2_work4_hover_button").mouseout(function () {
            $(".page2_div2_work4_hover_button").css('background-color', 'white');
             $(".page2_div2_work4_hover_button_text").css('color', '#525251');
        });

        $(".page2_div2_work5_hover_button").mouseover(function () {
            $(".page2_div2_work5_hover_button").css('background-color', '#201d04');
             $(".page2_div2_work5_hover_button_text").css('color', 'white');
        });

        $(".page2_div2_work5_hover_button").mouseout(function () {
            $(".page2_div2_work5_hover_button").css('background-color', 'white');
             $(".page2_div2_work5_hover_button_text").css('color', '#525251');
        });
    });

$(document).ready(function () {

         $('.page2_div2_work1').mouseenter(function(){
         $('.page2_div2_work1_hover').css('display','block');
          $('.page2_div2_work1_hover_button').fadeIn(800);
         $('.page2_div2_work1_hover_heading').fadeIn(600);
         $('.maximize_1').css('display','none');

});
         $('.page2_div2_work1').mouseleave(function(){
        $('.page2_div2_work1_hover').css('display','none');
        $('.page2_div2_work1_hover_heading').css('display','none');
         $('.page2_div2_work1_hover_button').css('display','none');
         $('.maximize_1').css('display','block');
});


 $('.page2_div2_work2').mouseenter(function(){
         $('.page2_div2_work2_hover').css('display','block');
          $('.page2_div2_work2_hover_button').fadeIn(800);
         $('.page2_div2_work2_hover_heading').fadeIn(600);
         $('.maximize1_1').css('display','none');

});
         $('.page2_div2_work2').mouseleave(function(){
        $('.page2_div2_work2_hover').css('display','none');
        $('.page2_div2_work2_hover_heading').css('display','none');
         $('.page2_div2_work2_hover_button').css('display','none');
         $('.maximize1_1').css('display','block');
});
          $('.page2_div2_work3').mouseenter(function(){
         $('.page2_div2_work3_hover').css('display','block');
          $('.page2_div2_work3_hover_button').fadeIn(800);
         $('.page2_div2_work3_hover_heading').fadeIn(600);
         $('.maximize_3').css('display','none');

});
         $('.page2_div2_work3').mouseleave(function(){
        $('.page2_div2_work3_hover').css('display','none');
        $('.page2_div2_work3_hover_heading').css('display','none');
         $('.page2_div2_work3_hover_button').css('display','none');
         $('.maximize_3').css('display','block');
});
          $('.page2_div2_work4').mouseenter(function(){
         $('.page2_div2_work4_hover').css('display','block');
          $('.page2_div2_work4_hover_button').fadeIn(800);
         $('.page2_div2_work4_hover_heading').fadeIn(600);
         $('.maximize1_2').css('display','none');
});
         $('.page2_div2_work4').mouseleave(function(){
        $('.page2_div2_work4_hover').css('display','none');
        $('.page2_div2_work4_hover_heading').css('display','none');
         $('.page2_div2_work4_hover_button').css('display','none');
         $('.maximize1_2').css('display','block');
});
          $('.page2_div2_work5').mouseenter(function(){
         $('.page2_div2_work5_hover').css('display','block');
          $('.page2_div2_work5_hover_button').fadeIn(800);
         $('.page2_div2_work5_hover_heading').fadeIn(600);
         $('.maximize_5').css('display','none');

});
         $('.page2_div2_work5').mouseleave(function(){
        $('.page2_div2_work5_hover').css('display','none');
        $('.page2_div2_work5_hover_heading').css('display','none');
         $('.page2_div2_work5_hover_button').css('display','none');
         $('.maximize_5').css('display','block');
});

        $('.page2_div2_work1_hover_button').click(function(){
        $('.page2_div2_work1_heading').css('display', 'none');
        $( ".page2_div2_work1_detail1_text" ).fadeIn( "slow");

});

        $('.page2_div2_work2_hover_button').click(function(){
        $('.page2_div2_work2_heading').css('display', 'none');
        $( ".page2_div2_work2_detail1_text" ).fadeIn( "slow");
});
         $('.page2_div2_work3_hover_button').click(function(){
        $('.page2_div2_work3_heading').css('display', 'none');
        $( ".page2_div2_work3_detail1_text" ).fadeIn( "slow");
});
          $('.page2_div2_work4_hover_button').click(function(){
        $('.page2_div2_work4_heading').css('display', 'none');
        $( ".page2_div2_work4_detail1_text" ).fadeIn( "slow");
});
           $('.page2_div2_work5_hover_button').click(function(){
        $('.page2_div2_work5_heading').css('display', 'none');
        $( ".page2_div2_work5_detail1_text" ).fadeIn( "slow");
});
           $('.sld1_t1').hover(function(){
        $('.sld1t1_rating').css('display', 'none');
});
      
    });

// $(document).ready(function() {
//    $('#dropdown').click(function(){
//         $( ".menu_items" ).slideToggle();
//   });
// });

$(document).ready(function() {
   $('.morework').click(function(){
        $( ".page2_div2_divmain1" ).slideDown();
  });
});

$(document).ready(function() {
    $(".down").delay(900).fadeIn(500);
    $(".interests").delay(900).fadeIn(500);
    $(".myname").delay(500).fadeIn(500);
});


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 600) {
    $('#up').fadeIn();
  } else {
    $('#up').fadeOut();
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 600) {
    $('#dropdown').fadeIn();
  } else {
    $('#dropdown').fadeOut();
  }
});

// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y < 600) {
//     $('.menu_items').fadeOut();
//   } 
// });

$(document).ready(function () {

           $('.sld1_t1').mouseover(function(){
          $('.sld1t1_rating').css('display', 'none');
           $('.sld1t1_text1').css('display', 'block');

});
            $('.sld1_t1').mouseout(function(){
        $('.sld1t1_text1').css('display', 'none');
        $('.sld1t1_rating').css('display', 'block');
});
             $('.sld1_t2').mouseover(function(){
          $('.sld1t2_rating').css('display', 'none');
           $('.sld1t2_text1').css('display', 'block');

});
            $('.sld1_t2').mouseout(function(){
        $('.sld1t2_text1').css('display', 'none');
        $('.sld1t2_rating').css('display', 'block');
});
             $('.sld1_t3').mouseover(function(){
          $('.sld1t3_rating').css('display', 'none');
           $('.sld1t3_text1').css('display', 'block');

});
            $('.sld1_t3').mouseout(function(){
        $('.sld1t3_text1').css('display', 'none');
        $('.sld1t3_rating').css('display', 'block');
});
             $('.sld1_t4').mouseover(function(){
          $('.sld1t4_rating').css('display', 'none');
           $('.sld1t4_text1').css('display', 'block');

});
            $('.sld1_t4').mouseout(function(){
        $('.sld1t4_text1').css('display', 'none');
        $('.sld1t4_rating').css('display', 'block');
});
            $('.sld1_t5').mouseover(function(){
          $('.sld1t5_rating').css('display', 'none');
           $('.sld1t5_text1').css('display', 'block');

});
            $('.sld1_t5').mouseout(function(){
        $('.sld1t5_text1').css('display', 'none');
        $('.sld1t5_rating').css('display', 'block');
});
            $('.sld2_t1').mouseover(function(){
          $('.sld2t1_rating').css('display', 'none');
           $('.sld2t1_text1').css('display', 'block');

});
            $('.sld2_t1').mouseout(function(){
        $('.sld2t1_text1').css('display', 'none');
        $('.sld2t1_rating').css('display', 'block');
});
             $('.sld2_t2').mouseover(function(){
          $('.sld2t2_rating').css('display', 'none');
           $('.sld2t2_text1').css('display', 'block');

});
            $('.sld2_t2').mouseout(function(){
        $('.sld2t2_text1').css('display', 'none');
        $('.sld2t2_rating').css('display', 'block');
});
             $('.sld2_t3').mouseover(function(){
          $('.sld2t3_rating').css('display', 'none');
           $('.sld2t3_text1').css('display', 'block');

});
            $('.sld2_t3').mouseout(function(){
        $('.sld2t3_text1').css('display', 'none');
        $('.sld2t3_rating').css('display', 'block');
});
             $('.sld2_t4').mouseover(function(){
          $('.sld2t4_rating').css('display', 'none');
           $('.sld2t4_text1').css('display', 'block');

});
             $('.sld2_t4').mouseout(function(){
        $('.sld2t4_text1').css('display', 'none');
        $('.sld2t4_rating').css('display', 'block');
});

          $('.std1_t1').mouseover(function(){
          $('.std1t1_rating').css('display', 'none');
           $('.std1t1_text1').css('display', 'block');

});
            $('.std1_t1').mouseout(function(){
        $('.std1t1_text1').css('display', 'none');
        $('.std1t1_rating').css('display', 'block');
});
             $('.std1_t2').mouseover(function(){
          $('.std1t2_rating').css('display', 'none');
           $('.std1t2_text1').css('display', 'block');

});
            $('.std1_t2').mouseout(function(){
        $('.std1t2_text1').css('display', 'none');
        $('.std1t2_rating').css('display', 'block');
});
             $('.std1_t3').mouseover(function(){
          $('.std1t3_rating').css('display', 'none');
           $('.std1t3_text1').css('display', 'block');

});
            $('.std1_t3').mouseout(function(){
        $('.std1t3_text1').css('display', 'none');
        $('.std1t3_rating').css('display', 'block');
});
             $('.std1_t4').mouseover(function(){
          $('.std1t4_rating').css('display', 'none');
           $('.std1t4_text1').css('display', 'block');

});
            $('.std1_t4').mouseout(function(){
        $('.std1t4_text1').css('display', 'none');
        $('.std1t4_rating').css('display', 'block');
});
            $('.std1_t5').mouseover(function(){
          $('.std1t5_rating').css('display', 'none');
           $('.std1t5_text1').css('display', 'block');

});
            $('.std1_t5').mouseout(function(){
        $('.std1t5_text1').css('display', 'none');
        $('.std1t5_rating').css('display', 'block');
});
            $('.std2_t1').mouseover(function(){
          $('.std2t1_rating').css('display', 'none');
           $('.std2t1_text1').css('display', 'block');

});
            $('.std2_t1').mouseout(function(){
        $('.std2t1_text1').css('display', 'none');
        $('.std2t1_rating').css('display', 'block');
});
             $('.std2_t2').mouseover(function(){
          $('.std2t2_rating').css('display', 'none');
           $('.std2t2_text1').css('display', 'block');

});
            $('.std2_t2').mouseout(function(){
        $('.std2t2_text1').css('display', 'none');
        $('.std2t2_rating').css('display', 'block');
});
             $('.std2_t3').mouseover(function(){
          $('.std2t3_rating').css('display', 'none');
           $('.std2t3_text1').css('display', 'block');

});
            $('.std2_t3').mouseout(function(){
        $('.std2t3_text1').css('display', 'none');
        $('.std2t3_rating').css('display', 'block');
});
             $('.std2_t4').mouseover(function(){
          $('.std2t4_rating').css('display', 'none');
           $('.std2t4_text1').css('display', 'block');

});
             $('.std2_t4').mouseout(function(){
        $('.std2t4_text1').css('display', 'none');
        $('.std2t4_rating').css('display', 'block');
});
             $('.std2_t5').mouseover(function(){
          $('.std2t5_rating').css('display', 'none');
           $('.std2t5_text1').css('display', 'block');

});
             $('.std2_t5').mouseout(function(){
        $('.std2t5_text1').css('display', 'none');
        $('.std2t5_rating').css('display', 'block');
});
    });

});





