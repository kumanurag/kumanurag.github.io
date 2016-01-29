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

    	$(document).ready(function(){
		    $("#more_images").click(function(){
		        $("#gallery").slideToggle("slow");
                 // $('#more_images').css('opacity', '0');
                 $('#less_images').css('opacity', '1');
		    });
             $("#less_images").click(function(){
                $("#gallery").slideToggle("slow");
                 $('#less_images').css('opacity', '0');
                 $('#more_images').css('opacity', '1');
            });
		});

 
		$(document).ready(function () {
         $(".navigation_menu_div1").hover(function () {
            $(".navigation_menu_div1").css('background-color', 'black');
            $(".navigation_menu_div1 p").css('color', 'white');
        }, function () {
            $(".navigation_menu_div1").css('background-color', 'white');
            $(".navigation_menu_div1 p").css('color', 'black');
        });

        $(".navigation_menu_div2").hover(function () {
            $(".navigation_menu_div2").css('background-color', 'black');
            $(".navigation_menu_div2 p").css('color', 'white');
        }, function () {
            $(".navigation_menu_div2").css('background-color', 'white');
            $(".navigation_menu_div2 p").css('color', 'black');
        });

         $(".navigation_menu_div3").hover(function () {
            $(".navigation_menu_div3").css('background-color', 'black');
            $(".navigation_menu_div3 p").css('color', 'white');
        }, function () {
            $(".navigation_menu_div3").css('background-color', 'white');
            $(".navigation_menu_div3 p").css('color', 'black');
        });

        $("#page2_div1").mouseover(function () {
            $(".navigation_menu_div1").css('background-color', 'black');
             $(".navigation_menu_div1 p").css('color', 'white');
        });
        $("#page2_div1").mouseout(function () {
            $(".navigation_menu_div1").css('background-color', 'white');
             $(".navigation_menu_div1 p").css('color', 'black');
        });

        $("#page2_div2").mouseover(function () {
            $(".navigation_menu_div2").css('background-color', 'black', '1000');
             $(".navigation_menu_div2 p").css('color', 'white');
        });
        $("#page2_div2").mouseout(function () {
            $(".navigation_menu_div2").css('background-color', 'white');
             $(".navigation_menu_div2 p").css('color', 'black');
        });

        $("#page2_div3").mouseover(function () {
            $(".navigation_menu_div3").css('background-color', 'black');
             $(".navigation_menu_div3 p").css('color', 'white');
        });
        $("#page2_div3").mouseout(function () {
            $(".navigation_menu_div3").css('background-color', 'white');
             $(".navigation_menu_div3 p").css('color', 'black');
        });
    });

$(document).ready(function () {
        $('.page2_divtest_work1').click(function(){
        $('.page2_divtest_work1_details').animate({height: 'toggle'});
        $('.page2_divtest_work5_details, .page2_divtest_work3_details, .page2_divtest_work2_details, .page2_divtest_work4_details').css('display', 'none');
        $('.page2_divtest_work5, .page2_divtest_work3, .page2_divtest_work2, .page2_divtest_work4').css('opacity', '0.5');
        $('.page2_divtest_work1').css('opacity', '1');
});
        $('.page2_divtest_work2').click(function(){
        $('.page2_divtest_work2_details').animate({height: 'toggle'});
         $('.page2_divtest_work5_details, .page2_divtest_work3_details, .page2_divtest_work1_details, .page2_divtest_work4_details').css('display', 'none');
          $('.page2_divtest_work3, .page2_divtest_work1, .page2_divtest_work5, .page2_divtest_work4').css('opacity', '0.5');
        $('.page2_divtest_work2').css('opacity', '1');
});
        $('.page2_divtest_work3').click(function(){
        $('.page2_divtest_work3_details').animate({height: 'toggle'});
         $('.page2_divtest_work5_details, .page2_divtest_work2_details, .page2_divtest_work1_details, .page2_divtest_work4_details').css('display', 'none');
          $('.page2_divtest_work5, .page2_divtest_work1, .page2_divtest_work2, .page2_divtest_work4').css('opacity', '0.5');
        $('.page2_divtest_work3').css('opacity', '1');
});
        $('.page2_divtest_work4').click(function(){
        $('.page2_divtest_work4_details').animate({height: 'toggle'});
         $('.page2_divtest_work5_details, .page2_divtest_work3_details, .page2_divtest_work1_details, .page2_divtest_work2_details').css('display', 'none');
          $('.page2_divtest_work5, .page2_divtest_work3, .page2_divtest_work2, .page2_divtest_work1').css('opacity', '0.5');
        $('.page2_divtest_work4').css('opacity', '1');
});
        $('.page2_divtest_work5').click(function(){
        $('.page2_divtest_work5_details').animate({height: 'toggle'});
         $('.page2_divtest_work1_details, .page2_divtest_work2_details, .page2_divtest_work3_details, .page2_divtest_work4_details').css('display', 'none');
          $('.page2_divtest_work1, .page2_divtest_work3, .page2_divtest_work2, .page2_divtest_work4').css('opacity', '0.5');
        $('.page2_divtest_work5').css('opacity', '1');
});
    });

$(document).ready(function() {
    $(".down").delay(1000).fadeIn(500);
    $(".button1_page1").delay(1000).fadeIn(500);
    $(".page1_2").delay(460).fadeIn(500);
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 600) {
    $('#navigation_menu').fadeIn();
  } else {
    $('#navigation_menu').fadeOut();
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('#up').fadeIn();
  } else {
    $('#up').fadeOut();
  }
});








