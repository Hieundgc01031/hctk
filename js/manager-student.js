$(document).ready(function () {
    $('.progress-bar').each(function () {
        var textPro = $(this).text();
        var textProPa = parseInt(textPro);
        $(this).css('width', textPro);
        console.log(textPro)
        if(textProPa >= 100){
            $(this).parents('.home-content-slide-student').find('.btn-done').show();
            $(this).parents('.home-content-slide-student').find('.btn-learning').hide();
        }else {
            $(this).parents('.home-content-slide-student').find('.btn-done').hide();
            $(this).parents('.home-content-slide-student').find('.btn-learning').show();
        }
    });
});