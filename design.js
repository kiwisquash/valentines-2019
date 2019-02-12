var cute = "https://pbs.twimg.com/profile_images/378800000743122475/4b1b8d56500f4bd56748282022c6341f.jpeg"

var image1 = "https://theteachingfactor.files.wordpress.com/2015/01/number-1_blue-sun-swirl.png"

var image2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Number_2_in_light_blue_rounded_square.svg/1024px-Number_2_in_light_blue_rounded_square.svg.png"

var image3 = "http://www.walkwithgod.org/wp-content/uploads/2014/01/117-3.jpg"

var count = 3

$(document).ready(function(){
$("#yes").click(function(){
    $(".mover").toggleClass("turn");
  });

$("#no").click(function(){
    alert("Happy V... oh wait, you just clicked 'no,' didn't you?\nOh man, I did not see that coming. I thought you'd just click 'yes.'\nUhm... maybe you can just click 'yes' even if you don't mean it?\n...Please?");
  });

$(".cover").click(function(){
    // Remove the class cover
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
    }
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
