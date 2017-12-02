//    LIST PAGE
$(document).ready(function () {

    $('body').on('mouseenter', '.item-subject', function() {
        var offset = $(this).offset();
        var offtop = offset.top - $(window).scrollTop();
        var offbottom = offtop + $(this).outerHeight(true) - $(window).height();
        var resultbottom = offbottom - 25;
        var resulttop = offtop - 225;
        $('.home-slide').css('z-index', -1);
        $(this).parents('.home-slide').css('z-index', 1);
        $('.bgc-width').css('z-index', 99);
        $('.next-arrow').css('z-index', -1);

        if(offset.left > 800){
            $(this).children('.tool-tip-subject').css('right', '288px');
            $(this).children('.tool-tip-subject').addClass('right-tooltip');
            $(this).children('.tool-tip-subject').removeClass('left-tooltip');
        }
        else {
            $(this).children('.tool-tip-subject').css('left', '288px');
            $(this).children('.tool-tip-subject').addClass('left-tooltip');
            $(this).children('.tool-tip-subject').removeClass('right-tooltip');
        }
        if(offtop > 115 && offbottom < -112){
            $(this).children('.tool-tip-subject').addClass('mid-tooltip');
            $(this).children('.tool-tip-subject').css('bottom', '-110px');
            $(this).children('.tool-tip-subject').removeClass('bottom-tooltip');
            $(this).children('.tool-tip-subject').removeClass('top-tooltip');

        }
        else if(offbottom > -112){
            $(this).children('.tool-tip-subject').css('bottom', resultbottom);
            $(this).children('.tool-tip-subject').addClass('bottom-tooltip');
            $(this).children('.tool-tip-subject').removeClass('mid-tooltip');
            $(this).children('.tool-tip-subject').removeClass('top-tooltip');
        }
        else if(offtop < 115 && offbottom < -112){
            $(this).children('.tool-tip-subject').css('bottom', resulttop);
            $(this).children('.tool-tip-subject').addClass('top-tooltip');
            $(this).children('.tool-tip-subject').removeClass('mid-tooltip');
            $(this).children('.tool-tip-subject').removeClass('bottom-tooltip');
        }
        $(this).children('.tool-tip-subject').css('display', 'block');
    });
    $('body').on('mouseleave', '.item-subject', function() {
        $(this).children('.tool-tip-subject').hide();
    });

    // $('.select-style').change(function () {
    //     alert('bạn đang chọn box');
    // });
    //
    var widWin = $(window).width();
    if(widWin <600){
        var widItem = ((widWin - 52))/2;
        var heiItem = widItem * 140 / 262;
        $('.home-item-slide-smart').css({'width': widItem});
        $('.home-img-bgc-smart').css({'width': widItem, 'height': heiItem});
    }

    $('.list-subject-item-smart .item-subject-smart').each(function (index) {
        if(index%2 == 0){
            $(this).css('padding-right', 7);
        }
        else {
            $(this).css('padding-left', 7);
        }
    });
});