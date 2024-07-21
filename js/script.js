$(document).ready(function() {
    $('.multiple-items1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
      });
      $('button.slick-prev').css('background-color', 'lightgrey');
      $('button.slick-next').css('background-color', 'lightgrey');
  });

$(document).ready(function() {
    $('.multiple-items2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
      });
  });

$(document).ready(function() {
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        variableWidth: true,
      });
      $('button.slick-prev').css('background-color', 'lightgrey');
      $('button.slick-next').css('background-color', 'lightgrey');
})
$(document).ready(function() {
  $('#imageGallery').lightSlider({
    gallery:true,
    item:1,
    loop:true,
    thumbItem:9,
    slideMargin:0,
    enableDrag: false,
    currentPagerPosition:'left',
    onSliderLoad: function(el) {
        el.lightGallery({
            selector: '#imageGallery .lslide'
        });
    }   
});  
});