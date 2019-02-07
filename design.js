var cute = "https://pbs.twimg.com/profile_images/378800000743122475/4b1b8d56500f4bd56748282022c6341f.jpeg"

var image1 = "https://theteachingfactor.files.wordpress.com/2015/01/number-1_blue-sun-swirl.png"

var image2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Number_2_in_light_blue_rounded_square.svg/1024px-Number_2_in_light_blue_rounded_square.svg.png"

var image3 = "http://www.walkwithgod.org/wp-content/uploads/2014/01/117-3.jpg"

var count = 3

$(document).ready(function(){
$('#message').text("Will you be my Lt. Hawkeye?");
$('#coupons').hide()
$("#yes").click(function(){
    $("#message").fadeOut("slow", function(){
        $("#message").text("Happy Valentine's Day!").fadeIn("slow");
    });
    $("#buttons").fadeOut("slow", function(){
        $("#coupons").fadeIn("slow");
    });
    $("#mushy").fadeOut("slow",function(){
        $("#mushy").attr("src", cute).fadeIn("slow");
    });
  });
$(".coupon").click(function(){
    var image
    if (count > 0) {
        if (count == 3) {
            image = image1;
        } else if (count == 2) {
            image = image2;
        } else {
            image = image3;
        }
        count--;
        $(this).fadeOut(function(){
            $(this).attr("src",image).fadeIn("slow");
        });
    } else { pass; }
});
});


// var productImage = $('img');
// var productOverlay = $('.product-image-overlay');
// var productOverlayImage = $('.product-image-overlay img');

// productImage.click(function () {
//     var productImageSource = $(this).attr('src');

//     productOverlayImage.attr('src', productImageSource);
//     productOverlay.fadeIn(100);
//     $('body').css('overflow', 'hidden');

//     $('.product-image-overlay-close').click(function () {
//         productOverlay.fadeOut(100);
//         $('body').css('overflow', 'auto');
//     });
// });
