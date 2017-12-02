/**
 * Created by hieu on 25/10/2017.
 */


//    LIST PAGE
$(document).ready(function () {
    $('.div-img-phone').click(function () {
        $('.div-img-phone').removeClass('active');
        $(this).addClass('active');
    });
    $('.btn-payment-my-cart').click(function () {
        $('.section-first-payment').hide();
        $('.section-secon-payment').show();
        $('.tittle-list-sub-payment h5').text('XEM LẠI ĐƠN HÀNG');
        $('#a-tittle').text('Xem lại đơn hàng');
    });

    $('.btn-payment-step2').click(function () {
        $('.section-third-payment').show();
        $('.section-secon-payment').hide();
        $('.tittle-list-sub-payment h5').text('Thanh toán');
        $('#a-tittle').text('Thanh toán');
    });

    $('.btn-payment-step3').click(function () {
        $('.section-third-payment').hide();
        $('.section-four-payment').show();
        $('.tittle-list-sub-payment h5').text('giỏ hàng của tôi');
        $('#a-tittle').text('Giỏ hàng của tôi');
    });

});