/**
 * Created by HA on 20/10/2017.
 */
$(document).ready(function () {

    $('#li-sign-out').click(function (e) {
        confirm('Bạn muốn đăng xuất ???');
    });

    // UPDATE IMAGE
    var src1 = $('#tittle-img-ava').attr('src');
    $('#up-avata').attr('src', src1);
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#up-avata').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imgInp").change(function() {
        readURL(this);
    });

    $('#update-info').click(function () {
       var src = $("#up-avata").attr('src');
       $('#tittle-img-ava').attr('src', src);
    });


    // NOTE SUMMER
    $('#summernote').summernote({
        placeholder: 'Thông tin cá nhân',
        height: 100,
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline']],
            ['fontsize', ['fontsize']],
            ['Insert', ['link']],
            ['para', ['ol','ul','paragraph']],
        ]

    });
    $('.note-statusbar').remove();

//    COMMENT
    $('.btn-get-textarea').click(function () {
        $(this).hide();
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
                +'<span class="name-course"><a href="the-course.html#the-discuss1">PEN - C Toán</a></span>'
                +'</p>'
                +'<span class="content-comment">'
                +text
                +'</span>'
                +'<p class="time-date">10:25 - 26 tháng 9, 2017</p>'
                +'</div>';
            $(this).parents('.text-comment').find( ".first-commnent" ).append(str);
            $(this).parents('.text-comment').find('.textarea-answer').hide();
            $(this).parents('.text-comment').find('.textarea-answer').val("");
            $(this).hide();
            $(this).parents('.text-comment').find('.btn-get-textarea').show();
        }
        else{
            alert("Bạn chưa nhập nội dung cho câu trả lời !!!");
        }
    });

    $('td.show-modal a').click(function () {
        $('#modalSubject').modal('show');
    });

    //search table
    $("#search-tab-menu-sub").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


});