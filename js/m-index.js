$(document).ready(function () {
    $('.tittle-smart-li1').click(function (e) {
        $('.tittle-smart-li1').not(this).parents('.smart-li1').find('.smart-ul2').slideUp();
        $(this).parents('.smart-li1').find('.smart-ul2').slideToggle();
        $('.smart-ul3').slideUp();
    });

    $('.tittle-smart-li2').click(function (e) {
        $('.tittle-smart-li2').not(this).parents('.smart-li2').find('.smart-ul3').slideUp();
        $(this).parents('.smart-li2').find('.smart-ul3').slideToggle();
        $(this).toggleClass('active');
        $('.tittle-smart-li2').not(this).removeClass('active');
    });

    $('.btn-nav-open-smart').click(function () {
       $('.home-menu-smart1').animate({left: 0}, 600);
       $('.bgc-opa-smart').css({ 'visibility': 'visible', 'opacity': 1});
    });
    $('.bgc-opa-smart').click(function () {
        $('.home-menu-smart1').animate({left: '-100%'}, 400);
        $('.bgc-opa-smart').css({ 'visibility': 'hidden', 'opacity': 0});
    });

    var widWin = $(window).width();
    if(widWin <600){
        var widItem = ((widWin - 30))/2.4;
        $('.home-item-slide-smart').css('width', widItem);
        $('.home-img-bgc-smart').css('width', widItem);
        var heightImg = $('.img-bgc-smart').outerHeight(true);
        $('.home-img-bgc-smart').css('height', heightImg);
        $('.img-teacher-slide-smart').css('height', heightImg);

    }

});