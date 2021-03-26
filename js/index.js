$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.menu__item-mobile').toggleClass('active');
    });
});
$('.reviews').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });