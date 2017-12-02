$(document).ready(function () {
    $('body').on('mouseenter', '.item-subject', function() {
        var offset = $(this).offset();
        var offtop = offset.top - $(window).scrollTop();
        var offbottom = offtop + $(this).outerHeight(true) - $(window).height();
        var resultbottom = offbottom - 18;
        var resulttop = offtop - 220;
        if(offset.left > 700){
            $(this).children('.tool-tip-subject').css('right', '288px');
            $(this).children('.tool-tip-subject').addClass('right-tooltip');
            $(this).children('.tool-tip-subject').removeClass('left-tooltip');
        }
        else {
            $(this).children('.tool-tip-subject').css('left', '288px');
            $(this).children('.tool-tip-subject').addClass('left-tooltip');
            $(this).children('.tool-tip-subject').removeClass('right-tooltip');
        }
        if(offtop > 180 && offbottom < -40){
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
        else if(offtop < 145 && offbottom < -112){
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
});