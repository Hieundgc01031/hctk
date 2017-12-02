/**
 * Created by hieu on 19/09/2017.
 */
$(document).ready(function () {
    $('.class-h6').css({'height': '120px', 'background': '#009fe3'});
    $('.class-h7').css({'height': '280px', 'background': '#0091cf'});
    var widthbackground = $(window).width() - $('.the-slide-home').width();
    $('.bgc-width').css('width', widthbackground/2);
    $('.bgc-width-top').css('width', widthbackground/2);
    $('.bgc-right').css('width', widthbackground/2 - 5);

    //NAV SMART

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
    var widItem = ((widWin - 30))/2.4;
    $('.home-item-slide-smart').css('width', widItem);
    $('.home-img-bgc-smart').css('width', widItem);
    var heightImg = $('.img-bgc-smart').outerHeight(true);
    $('.home-img-bgc-smart').css('height', heightImg);
    $('.img-teacher-slide-smart').css('height', heightImg);




    // SHOPPING CART
    // $('.shopping-cart').hover(function (e) {
    //    $('.tooltip-shopping-cart').show();
    //    return false;
    // });
    // $('.tooltip-shopping-cart').click(function (e) {
    //    e.stopPropagation();
    // });
    // $(document).hover(function () {
    //     $('.tooltip-shopping-cart').hide();
    // });
    $('.tooltip-shopping-cart .fa-trash').click(function () {
        var corfirmDeCart = confirm('Bạn muốn xóa khóa học này chứ ???');
        if(corfirmDeCart == true){
        //    doing some thing
            $(this).parents('li').hide();
        }
    });
    $('.icon-heart-tooltip .fa-heart').click(function () {
        $(this).hide();
        $(this).parents('.icon-heart-tooltip').find('.fa-heart-o').show();
    });
    $('.icon-heart-tooltip .fa-heart-o').click(function () {
        $(this).hide();
        $(this).parents('.icon-heart-tooltip').find('.fa-heart').show();
    });
    // $('.home-meu-slide-item').click(function () {
    //    $('.home-slide-primary').slick('refresh');
    // });



    // ------ Js Star rate

    $('.stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10);
        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });
    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });
    $('.stars li').on('click', function(){
        var onStar = parseInt($(this).data('value'), 10);
        var stars = $(this).parent().children('li.star');
        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }
        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });

    $('.pagination a').click(function () {
        $('.pagination a').removeClass('active');
        $(this).addClass('active');

    });
    $('.btn-modal-signup').click(function () {
        $('body').css('padding-right', '0px');
    });

    $('#header-icon-bell').click(function (e) {
       $('.alert-content').fadeToggle();
       $('button.alert-bell').hide();
       $('.account-manager').hide();
       $('.header-icon-bell .arrow-up').fadeToggle();
       return false;
    });

    $(document).click(function () {
        $('.alert-content').fadeOut();
        $('.account-manager').fadeOut();
        $('.header-icon-bell .arrow-up').fadeOut();
    });
    $('.header-user-logged').click(function (e) {
        $('.alert-content').fadeOut();
        $('.header-icon-bell .arrow-up').fadeOut();
        $('.account-manager').fadeToggle();
        return false;
    });
    $('.alert-content').click(function (e) {
        e.stopPropagation();
    });
     $('.account-manager').click(function (e) {
        e.stopPropagation();
    });


    //Require - login
    $('.require-login').click(function (e) {
        $('#modalSignin').modal('show');
        e.preventDefault();
        e.stopPropagation();

    });
    var widItemDe = $('.home-img-bgc').width();
    var heiItemDe =  widItemDe * 140 / 262;
    $('.home-img-bgc').css('height', heiItemDe);


    $('.name-subject-slide').each(function () {
       var content = $(this).text();
       if (content.length > 50){
           var contentNew = content.substr(0, 41) + '...';
           $(this).text(contentNew);
       }
    });
    $('.li-log-out').click(function () {
        $('.header-icon-bell').hide();
        $('.header-user-logged').hide();
        $('.header-signin').show();
        $('.header-signup').show();
    });
    // MODAL LOGIN LOGOUT
    $('#md-Signin-btn-login').click(function(e){
        $('#modalSignin').modal('hide');
        $('.header-icon-bell').show();
        $('.header-user-logged').show();
        $('.header-signin').hide();
        $('.header-signup').hide();

    });

    $('#md-Signin-btn-signin').click(function () {
        $('#modalSignin').modal('hide');
        $('#modalSignup').modal('show');
    });

    $('#md-Singup-btn-next').click(function () {
       $('#modalSignup').modal('hide');
       $('#modalCode').modal({backdrop: 'static'});
       $('#modalCode').modal('show');
    });

    $('#modal-Code-btn-Signup').click(function () {
        $('#modalSuccess').modal('show');
        $('#modalCode').modal('hide');

    });

    $('.btn-cancel').click(function () {
        var cancel = confirm('Bạn muốn hủy đăng ký chứ ?');
        if(cancel == true){
            $('#modalCode').modal('hide');
        }
    });
    $('.modal .close').click(function () {
        // var cancel = confirm('Bạn muốn đóng tab ?');
        // if(cancel == true){
        $('.modal').modal('hide');
        // }
    });

//    LIKE
    $('body').on('click', '.comment-like i', function() {
        var numlike = parseInt($(this).parents('.comment-like').find('.number-like').text());
        if( $(this).parents('.comment-like').hasClass('active') ){

            var newNumlike = numlike - 1;
            $(this).parents('.comment-like').find('.number-like').text(newNumlike);
            $(this).parents('.comment-like').removeClass('active');
        }
        else {
            var newNumlike = numlike + 1;
            $(this).parents('.comment-like').find('.number-like').text(newNumlike);
            $(this).parents('.comment-like').addClass('active');
        }
    });
});

