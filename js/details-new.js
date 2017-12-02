$(document).ready(function () {
    $('.btn-get-textarea').click(function () {
        $('.btn-get-textarea').show();
        $('.btn-answer').hide();
        $(this).hide();
        $('.textarea-answer').val("");
        $('.textarea-answer').hide();
        $(this).parents('.text-comment').find('.textarea-answer').show();
        $(this).parents('.text-comment').find('.btn-answer').show();
    });

    $('.btn-answer').click(function () {
        var text = $(this).parents('.text-comment').find('.textarea-answer').val();
        if(text != ""){
            var str = '<div class="secon-commnent number-comment">'
                +'<p>'
                +'<span class="user-comment">Nguyễn Phước Huynh - </span>'
                +'<span class="time-date">10:25 - 26 tháng 9, 2017</span>'
                +'</p>'
                +'<span class="content-comment">'
                +text
                +'</span>'
                +'</div>';
            $(this).parents('.text-comment').find( ".first-commnent" ).append(str);
            $(this).parents('.text-comment').find('.textarea-answer').hide();
            // $(this).parents('.text-comment').find('.textarea-answer').val("");
            $(this).hide();
            $(this).parents('.text-comment').find('.btn-get-textarea').show();
        }
        else{
            alert("Bạn chưa nhập nội dung cho câu trả lời !!!");
        }
    });
});