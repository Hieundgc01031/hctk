$(document).ready(function () {

    $('.variable-width').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        variableWidth: true
    });
    $('.variable-width').slick('refresh');
    var widWin = $(window).width();
//    LIST NEW
    if(widWin < 992){
        $('.div-four-img').each(function (e) {
            if(e % 2 == 0){
                $(this).css({'padding-left': '15px', 'padding-right': '7px' })
            }else{
                $(this).css({'padding-right': '15px', 'padding-left': '7px' })
            }
        });
    }
    if(widWin <600){
        var widItem = ((widWin - 60))/2.4;
        var heiItem = widItem * 140 / 262;
        $('.home-item-slide-smart').css({'width': widItem});
        $('.home-img-bgc-smart').css({'width': widItem, 'height': heiItem});

    }
});