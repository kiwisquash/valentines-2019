var image0 = "images/dinner.jpg"

var image1 = "images/massage.jpg"

var image2 = "https://media.giphy.com/media/YljA1fpu0fkK4/giphy.gif"

var image3 = "images/happy.png"

var count = 3

$(document).ready(function(){
$("#yes").click(function(){
    $(".mover").toggleClass("turn");
  });

$("#no").click(function(){
    alert("Happy V... oh wait, you just clicked 'no,' didn't you?\nOh man, I did not see that coming. I thought you'd just click 'yes.'\nUhm... maybe you can just click 'yes' even if you don't mean it?\n...Please?");
  });

$(".cover").click(function(){
    $(this).off("click").removeClass("cover");
    var image
    if (count > -1) {
        if (count == 3) {
            image = image0;
        } else if (count == 2) {
            image = image1;
        } else if (count == 1) {
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
