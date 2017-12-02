/**
 * Created by HA on 03/10/2017.
 */

$(document).ready(function () {
    var vid  = document.getElementById("vid");//
   $('.the-discuss .comment-answer').click(function () {
      $('.the-discuss .textarea-sub-discuss').hide();
      $(this).parents('.the-discuss').find('.textarea-sub-discuss').show();
   });

   $('.tittle-ul i').click(function () {
      $(this).parents('.secon-ul').toggleClass('active');
   });

    $('.show-video').click(function () {
        var source = $(this).attr('data-id');
        $('video source').attr('src', source);
        $('video')[0].load();
    });



    $('#area-note').keypress(function (e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode ==13){
            $('#span-id-1').text($(this).val());
            var time = $('video').get(0).currentTime;
            if(time < 3600){
                var minute = Math.floor(time/60);
                var secon = Math.floor(time%60);
                $('#label-id-1').text(minute + ':' + secon);
            }
            else {
                var hour = Math.floor(time/3600);
                var newtime = Math.floor(time%3600);
                var minute = Math.floor(newtime/60);
                var secon = Math.floor(newtime%60);
                $('#label-id-1').text(hour + ':' + minute + ':' + secon);
            }

            $('#li-id-1').show();
            $('#area-note').val("");

            e.preventDefault(); //Prevents the default action from happening.
        }
    });

    $('.delete-note').click(function (e) {
        var confirm_v3 = confirm('Bạn muốn xóa ghi chú không?');
        if(confirm_v3 == true){
            $(this).parents('li').hide();
        }
    });


    $('.btn-get-multichoice').click(function () {
        counter = 25;
        $('#time').text(counter + "s");
        timer = setInterval(countDown, 1000);

        totalTime = 250;
        var hour = Math.floor(totalTime/3600);
        var newtime = Math.floor(totalTime%3600);
        var minute = Math.floor(totalTime/60);
        var secon = Math.floor(totalTime%60);
        if(hour<10){
            hour = "0"+hour;
        }
        if(minute<10){
            minute = "0"+minute;
        }
        if(secon<10){
            secon = "0"+secon;
        }
        $("#time-total").html(hour + ":" + minute + ":" + secon);
        timeTotal = setInterval(countDownTotal, 1000);
    });

    //TIME NOTE
    $('.ul-note li').click(function () {
        var text = $(this).find('label').text();
        var time;
        arr = text.split(':');
        if(arr.length == 3){
            time = arr[0] * 3600 + arr[1] * 60 + arr[2];
        }
        if(arr.length == 2){
            time =  arr[0] * 60 + arr[1];
        }
        var video = $('#video').get(0);
        video.play();
        video.currentTime = time;
        video.pause();

    });



    //Click Nội dung bên phải

    $('.first-li .tittle-first-li').click(function () {
       $(this).parents('.first-li').find('.secon-ul').slideToggle();
    });

    $('.tittle-secon-li').click(function () {
        $(this).parents('.secon-li').find('.third-ul').slideToggle();
        $(this).parents('.secon-li').toggleClass('active');
    });

    //Kiểm tra disable
    $('.first-li').removeClass('disabled');
    var total = $('.require-learned').length;
    $('.require-learned').each(function (index) {

       if( $(this).hasClass('active')){
           for(i = index +2; i < total +1; i++){
                $('.first-li'+i).addClass('disabled');
           }
       }
    });
    // $('.require-learned').each(function(index, element){
    //     alert("Iteration: " + index)
    // });


    // Tính độ theo %
    var textPer = $('#percent-leared').text();
    console.log(textPer);
    if(textPer > 100){
        textPer = 100;
        $('#percent-leared').text(textPer);
    }
    if(textPer < 0){
        textPer = 0;
        $('#percent-leared').text(textPer);
    }
    var result = $('#percent-leared').text()/100 * 180;

    $("li.learned").transition({rotate: result+'deg'}, 500, 'in');
    $(".needle").transition({rotate: result+'deg'}, 500, 'in');

    if(result >= 180){

        $('.div-see-source-final button').addClass('active');
        $('.div-see-source-final button').removeAttr('disabled');
    }else {
        $('.div-see-source-final button').removeClass('active');
        $('.div-see-source-final button').attr('disabled','disabled');
    }

    //Disable khóa học
    $('.require-mutichoice').each(function (index) {
        if( $(this).hasClass('active') == true){
            var id = index+2;
            $('.first-li'+id).addClass('disabled');
        }
        else {
            $('.first-li'+id).removeClass('disabled');
        }
    });

//    GET VIDEO
    $('.show-video-course').click(function () {
        var source = $(this).attr('source');
        $('#video-source video source').attr('src', source);
        $("#video-source video")[0].load();
    });

//    COMMENT
    $('.comment-answer').click(function () {
       $(this).parents('.the-discuss').find('.btn-answer').show();
    });
    $('.btn-answer').click(function () {
        var text = $(this).parents('.the-discuss').find('textarea').val();
        if(text != ""){
            var str = '<div class="the-sub-discuss">'
                +   '<p class="username-discuss">'
                +   '<span class="robo-bold">Đinh Lan Hương -</span>'
                +   '26 tháng 9, 2017</p>'
                +   '<p class="content-disscuss-1">'
                +   text
                +   '</p>'
                +   '<p>'
                +   '<span class="comment-like">'
                +   '<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>'
                +   '<i class="fa fa-thumbs-up" aria-hidden="true"></i>'
                +   '<span class="number-like">0</span> <span>Thích</span>'
                +   '</span></p></div>'

            $(this).parents('.the-discuss').find( ".content-discuss" ).append(str);
            $(this).parents('.the-discuss').find('textarea').hide();
            $(this).parents('.the-discuss').find('textarea').val("");
            $(this).hide();
        } else{
            alert("Bạn chưa nhập nội dung cho câu trả lời !!!");
        }
    });


});

function countDown(){
    $("#time").html(counter + "s");
    if(counter == 0){
        clearInterval(timer);
        // alert('Đã hết thời gian !!!');
    }else{
        counter--;
    }
}
function countDownTotal() {
    // $("#time-total").html(totalTime);
    if(totalTime == 0){
        clearInterval(timeTotal);
        // alert('Đã hết thời gian !!!');
    }else{
        totalTime--;
        var hour = Math.floor(totalTime/3600);
        var minute = Math.floor(totalTime/60);
        var secon = Math.floor(totalTime%60);
        if(hour<10){
            hour = "0"+hour;
        }
        if(minute<10){
            minute = "0"+minute;
        }
        if(secon<10){
            secon = "0"+secon;
        }
        $("#time-total").html(hour + ":" + minute + ":" + secon);
    }
}
