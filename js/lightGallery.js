$(document).ready(function() {
    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:true,
        loop:true,
        onSliderLoad: function() {
            $('#imageGallery').removeClass('cS-hidden');
        }
    });
});