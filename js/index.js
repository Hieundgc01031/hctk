/**
 * Created by hieu on 28/09/2017.
 */
$(document).ready(function () {
    var height1 = $('.home-first-content').outerHeight(true);
    var height2 = $('.home-secon-content .container').height();
    var height3 = $('.home-third-content').height();
    var height4 = $('.home-four-content').outerHeight(true);
    $('.home-secon-content').css('height', '482px');
    $('.class-h1').css({'height': height1, 'background': '#fff'});
    $('.class-h2').css({'height': '481.7px'});
    $('.class-h3').css({'height': '481.7px', 'background': '#fff'});
    $('.class-h4').css({'height': '481.7px'});
    $('.class-h5').css({'height': '425px', 'background': '#fff'});



    $('.home-slide-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true
    });

    $('.home-slide-primary').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: '<div class="arrow-slick prev-arrow prev-arrow-primary"><button class="btn btn-default fa fa-angle-left" aria-hidden="true"></button></div>',
        nextArrow: '<div class="arrow-slick next-arrow next-arrow-primary"><button class="btn btn-default fa fa-angle-right" aria-hidden="true"></button></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.home-slide-secondary').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: '<div class="arrow-slick prev-arrow prev-arrow-secondary"><button class="btn btn-default fa fa-angle-left" aria-hidden="true"></button></div>',
        nextArrow: '<div class="arrow-slick next-arrow next-arrow-secondary"><button class="btn btn-default fa fa-angle-right" aria-hidden="true"></button></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    $('.home-slide-high').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: '<div class="arrow-slick prev-arrow prev-arrow-secondary"><button class="btn btn-default fa fa-angle-left" aria-hidden="true"></button></div>',
        nextArrow: '<div class="arrow-slick next-arrow next-arrow-secondary"><button class="btn btn-default fa fa-angle-right" aria-hidden="true"></button></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.variable-width').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        variableWidth: true
    });


    $('body').on('mouseenter', '.the-slide-home .col-md-3', function() {
        var offset = $(this).offset();
        var offtop = offset.top - $(window).scrollTop();
        var offbottom = offtop + $(this).outerHeight(true) - $(window).height();
        var resultbottom = offbottom + 2;
        var resulttop = offtop - 195;

        $('.home-slide').css('z-index', -1);
        $(this).parents('.home-slide').css('z-index', 1);
        $('.bgc-width').css('z-index', 99);
        $('.next-arrow').css('z-index', -1);
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
        if(offtop > 145 && offbottom < -112){
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
    $('body').on('mouseleave', '.the-slide-home .col-md-3', function() {
        $(this).children('.tool-tip-subject').hide();
        $('.home-slide').css('z-index', 1);
        $('.next-arrow').css('z-index', 1);
    });
    var widWin = $(window).width();
    if(widWin <600){
        var widItem = ((widWin - 60))/2.4;
        var heiItem = widItem * 140 / 262;
        $('.home-item-slide-smart').css({'width': widItem});
        $('.home-img-bgc-smart').css({'width': widItem, 'height': heiItem});
    }
});
