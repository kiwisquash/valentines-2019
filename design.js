$(document).ready(function(){
// $('#message').append("Will you be my Lt. Hawkeye?");
$('#oldMessage').append("testing");
$('#newMessage').append("hello");
$('#newMessage').hide();
$('.prize').hide()
$('#mushy').hide();
$("#yes").click(function(){
    $("#oldMessage").fadeOut("slow", function(){
        $("#newMessage").fadeIn("slow");
        $("#buttons").fadeOut("slow", function(){
            $(".prize").fadeIn("slow");
        });
    });
  });
$("img").click(function(){
    $(this).fadeOut();
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
