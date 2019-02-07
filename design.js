$(document).ready(function(){
$('h1').empty();
// $('#message').append("Will you be my Lt. Hawkeye?");
$('#oldMessage').append("testing");
$('#newMessage').append("hello");
$('#newMessage').hide();
$('#coupons').hide()
$('#mushy').hide();
$("#yes").click(function(){
    $("#oldMessage").fadeOut("slow");
    $("#oldMessage").hide();
    $("#newMessage").fadeIn("slow");
    // $("h1").append("Happy Valentine's Day!");
    $("#buttons").fadeOut("slow");
    $("#buttons").hide();
    $("#coupons").fadeIn("slow");
  });
});

$(".prize").click(function(){
    $("this").fadeOut("slow");
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
