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

});
         $('.page2_div2_work1').mouseleave(function(){
        $('.page2_div2_work1_hover').css('display','none');
        $('.page2_div2_work1_hover_heading').css('display','none');
         $('.page2_div2_work1_hover_button').css('display','none');
});


 $('.page2_div2_work2').mouseenter(function(){
         $('.page2_div2_work2_hover').css('display','block');
          $('.page2_div2_work2_hover_button').fadeIn(800);
         $('.page2_div2_work2_hover_heading').fadeIn(600);

});
         $('.page2_div2_work2').mouseleave(function(){
        $('.page2_div2_work2_hover').css('display','none');
        $('.page2_div2_work2_hover_heading').css('display','none');
         $('.page2_div2_work2_hover_button').css('display','none');
});
          $('.page2_div2_work3').mouseenter(function(){
         $('.page2_div2_work3_hover').css('display','block');
          $('.page2_div2_work3_hover_button').fadeIn(800);
         $('.page2_div2_work3_hover_heading').fadeIn(600);

});
         $('.page2_div2_work3').mouseleave(function(){
        $('.page2_div2_work3_hover').css('display','none');
        $('.page2_div2_work3_hover_heading').css('display','none');
         $('.page2_div2_work3_hover_button').css('display','none');
});
          $('.page2_div2_work4').mouseenter(function(){
         $('.page2_div2_work4_hover').css('display','block');
          $('.page2_div2_work4_hover_button').fadeIn(800);
         $('.page2_div2_work4_hover_heading').fadeIn(600);

});
         $('.page2_div2_work4').mouseleave(function(){
        $('.page2_div2_work4_hover').css('display','none');
        $('.page2_div2_work4_hover_heading').css('display','none');
         $('.page2_div2_work4_hover_button').css('display','none');
});
          $('.page2_div2_work5').mouseenter(function(){
         $('.page2_div2_work5_hover').css('display','block');
          $('.page2_div2_work5_hover_button').fadeIn(800);
         $('.page2_div2_work5_hover_heading').fadeIn(600);

});
         $('.page2_div2_work5').mouseleave(function(){
        $('.page2_div2_work5_hover').css('display','none');
        $('.page2_div2_work5_hover_heading').css('display','none');
         $('.page2_div2_work5_hover_button').css('display','none');
});
//          $('.page2_div2_work2').mouseover(function(){
//         // $('.page2_div2_work1_hover').fadeIn(200);
//          $('.page2_div2_work2_hover').css('display','block');
// });
//          $('.page2_div2_work2').mouseout(function(){
//         $('.page2_div2_work2_hover').css('display','none');
// });

//          $('.page2_div2_work3').mouseover(function(){
//         // $('.page2_div2_work1_hover').fadeIn(200);
//          $('.page2_div2_work3_hover').css('display','block');
// });
//          $('.page2_div2_work3').mouseout(function(){
//         $('.page2_div2_work3_hover').css('display','none');
// });


//          $('.page2_div2_work4').mouseover(function(){
//         // $('.page2_div2_work1_hover').fadeIn(200);
//          $('.page2_div2_work4_hover').css('display','block');
// });
//          $('.page2_div2_work4').mouseout(function(){
//         $('.page2_div2_work4_hover').css('display','none');
// });


//          $('.page2_div2_work5').mouseover(function(){
//         // $('.page2_div2_work1_hover').fadeIn(200);
//          $('.page2_div2_work5_hover').css('display','block');
// });
//          $('.page2_div2_work5').mouseout(function(){
//         $('.page2_div2_work5_hover').css('display','none');
// });

        $('.page2_div2_work1_hover_button').click(function(){
        // $('.page2_div2_work1_detail1').animate({width: 'toggle'});
        // $('.page2_divtest_work1_details').css('display', 'block');
        $('.page2_div2_work1_heading').css('display', 'none');
        $( ".page2_div2_work1_detail1_text" ).fadeIn( "slow");

});

        $('.page2_div2_work2_hover_button').click(function(){
        // $('.page2_div2_work1_detail1').animate({width: 'toggle'});
        // $('.page2_divtest_work1_details').css('display', 'block');
        $('.page2_div2_work2_heading').css('display', 'none');
        $( ".page2_div2_work2_detail1_text" ).fadeIn( "slow");
});
         $('.page2_div2_work3_hover_button').click(function(){
        // $('.page2_div2_work1_detail1').animate({width: 'toggle'});
        // $('.page2_divtest_work1_details').css('display', 'block');
        $('.page2_div2_work3_heading').css('display', 'none');
        $( ".page2_div2_work3_detail1_text" ).fadeIn( "slow");
});
          $('.page2_div2_work4_hover_button').click(function(){
        // $('.page2_div2_work1_detail1').animate({width: 'toggle'});
        // $('.page2_divtest_work1_details').css('display', 'block');
        $('.page2_div2_work4_heading').css('display', 'none');
        $( ".page2_div2_work4_detail1_text" ).fadeIn( "slow");
});
           $('.page2_div2_work5_hover_button').click(function(){
        // $('.page2_div2_work1_detail1').animate({width: 'toggle'});
        // $('.page2_divtest_work1_details').css('display', 'block');
        $('.page2_div2_work5_heading').css('display', 'none');
        $( ".page2_div2_work5_detail1_text" ).fadeIn( "slow");
});
           $('.sld1_t1').hover(function(){
        // $('.page2_div2_work1_detail1').animate({width: 'toggle'});
        // $('.page2_divtest_work1_details').css('display', 'block');
        $('.sld1t1_rating').css('display', 'none');
        // $( ".page2_div2_work5_detail1_text" ).fadeIn( "slow");
});

    });

$(document).ready(function() {
   $('#dropdown').click(function(){
        $( ".menu_items" ).slideToggle();
  });
});

$(document).ready(function() {
    $(".down").delay(1500).fadeIn(500);
    $(".interests").delay(1500).fadeIn(500);
    $(".myname").delay(500).fadeIn(500);
});

// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 600) {
//     $('.menu_icon').fadeIn();
//   } else {
//     $('.menu_icon').fadeOut();
//   }
// });

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
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

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y < 600) {
    $('.menu_items').fadeOut();
  } 
});

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





