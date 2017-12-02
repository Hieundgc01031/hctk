/**
 * Created by hieu on 27/09/2017.
 */

$(document).ready(function () {
    $('.class-h5').css({'height': '800px', 'background': '#fff'});

    $('body').on('mouseenter', '.the-slide-home .col-md-3', function () {
        var offset = $(this).offset();
        var offtop = offset.top - $(window).scrollTop();
        var offbottom = offtop + $(this).outerHeight(true) - $(window).height();
        var resultbottom = offbottom + 2;
        var resulttop = offtop - 195;
        $('.bgc-width').css('z-index', 99);
        $('.next-arrow').css('z-index', -1);
console.log(offset.left);
        if (offset.left > 900) {
            $(this).children('.tool-tip-subject').css('right', '288px');
            $(this).children('.tool-tip-subject').addClass('right-tooltip');
            $(this).children('.tool-tip-subject').removeClass('left-tooltip');
        }
        else {
            $(this).children('.tool-tip-subject').css('left', '288px');
            $(this).children('.tool-tip-subject').addClass('left-tooltip');
            $(this).children('.tool-tip-subject').removeClass('right-tooltip');
        }
        if (offtop > 145 && offbottom < -112) {
            $(this).children('.tool-tip-subject').addClass('mid-tooltip');
            $(this).children('.tool-tip-subject').css('bottom', '-110px');
            $(this).children('.tool-tip-subject').removeClass('bottom-tooltip');
            $(this).children('.tool-tip-subject').removeClass('top-tooltip');

        }
        else if (offbottom > -112) {
            $(this).children('.tool-tip-subject').css('bottom', resultbottom);
            $(this).children('.tool-tip-subject').addClass('bottom-tooltip');
            $(this).children('.tool-tip-subject').removeClass('mid-tooltip');
            $(this).children('.tool-tip-subject').removeClass('top-tooltip');
        }
        else if (offtop < 145 && offbottom < -112) {
            $(this).children('.tool-tip-subject').css('bottom', resulttop);
            $(this).children('.tool-tip-subject').addClass('top-tooltip');
            $(this).children('.tool-tip-subject').removeClass('mid-tooltip');
            $(this).children('.tool-tip-subject').removeClass('bottom-tooltip');
        }
        $(this).children('.tool-tip-subject').css('display', 'block');
        $('.first-footer').css('z-index', -1);
        $('.secon-footer').css('z-index', -1);
    });
    $('body').on('mouseleave', '.the-slide-home .col-md-3', function () {
        $(this).children('.tool-tip-subject').hide();
        $('.next-arrow').css('z-index', 1);
        $('.first-footer').css('z-index', 1);
        $('.secon-footer').css('z-index', 1);
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
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $('.review-detail-sub .tittle-ul').click(function () {
        $(this).parents('ul').toggleClass('active');
        $(this).parents('ul').find('li').slideToggle();
    });

    var number = parseFloat($('.number-star-4 .the-star span').text()) / 100;

    $(".the-star span").each(function (index) {
        var gettex = $(this).text();
        $(this).parents('.number-star').find('.percent-div').css('width', gettex);
    });

    var total = parseFloat($('.star-number span').text());
    var intTotal = Math.floor(total)-1;
    $('.total-star-sub i').each(function (index) {
        if(index <= intTotal){
            $(this).addClass('color-yellow');
        }
        else {
            $(this).removeClass('color-yellow');
        }
    });
    // var leftVideo = ($(window).width() - $('.video-sub').width())/2;
    // $('.video-sub').css('left', leftVideo);

    // $('.img-video-detail-sub').click(function () {
    //    $('.video-sub').fadeIn();
    // });
    $(document).click(function () {
        var video = $('.video-sub-play').get(0);
        if (video.paused === false) {
            video.pause();
        }
    });
    $('.video-sub-play').click(function () {
        var video = $('.video-sub-play').get(0);
        if (video.paused === false) {
            video.pause();
        }
        else {
            video.play();
        }
        return false;
    });


    // {



    $('.img-video-detail-sub').click(function () {
        var source = $(this).attr('data-id');
        $('#myModal video source').attr('src', source);
        $("#myModal video")[0].load();
    });
    $('.show-video').click(function () {
        var source = $(this).attr('data-id');
        $('#myModal video source').attr('src', source);
        $("#myModal video")[0].load();
    });
    var positionVideo = ($(window).height() - 550)/2 ;
    $('video').css('top', positionVideo);

    $('.img-video-detail-sub-smart').click(function () {
       $('.video-sub-smart').show();
        var video = $('.video-sub-play').get(0);
        if (video.paused === false) {
            video.pause();
        }
        else {
            video.play();
        }
        return false;
    });

    $('.nav-header-scroll').click(function () {
       $('.nav-header-scroll').removeClass('active');
       $(this).addClass('active');
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.header-scroll').show();
        } else {
            $('.header-scroll').hide();
        }
    });
    // $(window).scroll(function () {
    //     var scr1 = $('#href1').offset().top - $(window).scrollTop();
    //     var scr2 = $('#href2').offset().top - $(window).scrollTop();
    //     var scr3 = $('#href3').offset().top - $(window).scrollTop();
    //     var scr4 = $('#href4').offset().top - $(window).scrollTop();
    //     if( scr4 < 150){
    //         $('.nav-header-scroll').removeClass('active');
    //         $('.nav-header-scroll4').addClass('active');
    //     }
    //     else if( scr3 < 150 ){
    //         $('.nav-header-scroll').removeClass('active');
    //         $('.nav-header-scroll3').addClass('active');
    //     }
    //     else if( scr2 < 150){
    //         $('.nav-header-scroll').removeClass('active');
    //         $('.nav-header-scroll2').addClass('active');
    //     }
    //     else {
    //         $('.nav-header-scroll').removeClass('active');
    //         $('.nav-header-scroll1').addClass('active');
    //     }
    // });
    $(function () {
        $('.a-scroll').bind('click', function (e) {
            var fixScr = $($(this).attr('href')).offset().top - 80;
            $('html, body').stop().animate({
                scrollTop: fixScr
            }, 500);
            e.preventDefault();
        });
    });

    var widWin = $(window).width();
    if(widWin < 600){
        var widDiv = $('.some-course-smart').width();
        var widItem  = (widDiv-50)/2;
        $('.home-item-slide-smart').css('width', widItem);
        $('.home-img-bgc-smart').css('width', widItem);
        var heightImg = $('.img-bgc-smart').outerHeight(true);
        $('.home-img-bgc-smart').css('height', heightImg);
        $('.img-teacher-slide-smart').css('height', heightImg);
    }
    $('.variable-width').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        variableWidth: true
    });
    if( widWin <992){
        var widTk = $('.info-teacher-detail-sub').width();
        var heiTk = widTk * 140 / 262;
        $('.img-info-teacher-detail').css('height', heiTk);
    }

    $('.comment-answer').click(function () {
        $(this).parents('.some-comment').find('.textarea-answer').show();
        $(this).parents('.some-comment').find('.btn-answer').show();
    });


    $('.btn-answer').click(function () {
        var text = $(this).parents('.some-comment').find('.textarea-answer').val();
        if(text != ""){
            // var str = '<div class="secon-commnent number-comment">'
            //     +'<p>'
            //     +'<span class="user-comment">Nguyễn Phước Huynh - </span>'
            //     +'<span class="time-date">10:25 - 26 tháng 9, 2017</span>'
            //     +'</p>'
            //     +'<span class="content-comment">'
            //     +text
            //     +'</span>'
            //     +'</div>';
            var str = '<div class="secon-commnent number-comment">'
                +   '<span class="name-user">Nguyễn Tuấn Tú</span> -'
                +   '<span class="time-date">10:25-26 tháng 9,2017</span>'
                +   '<p class="content-comment">'
                +   text
                +   '</p>'
                +   '</div>'

            $(this).parents('.some-comment').find( ".some-comment-text" ).append(str);
            $(this).parents('.some-comment').find('.textarea-answer').hide();
            $(this).parents('.some-comment').find('.textarea-answer').val("");
            $(this).hide();
        }
        else{
            alert("Bạn chưa nhập nội dung cho câu trả lời !!!");
        }
    });
});