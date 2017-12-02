$(document).ready(function () {
   $('.radio-selector').click(function () {
      if($('#y-option').is(':checked')){
          $('.radio-yes').show();
          $('.radio-no').hide();
      }
       if($('#n-option').is(':checked')){
           $('.radio-yes').hide();
           $('.radio-no').show();
       }
   });

   $('.offten-question li').click(function () {
       $('.offten-question li').removeClass('active');
       $(this).addClass('active');
   });

   $('.q-get-money-payment').click(function () {
      $('.first-support-content-2').hide();
      $('.ul-right-content').hide();
      $('.secon-support-content-2').show();
      var text =  "&ensp;<i class='fa fa-angle-double-right' aria-hidden='true'></i>&ensp;"
            +"<a>"
            +"Nạp tiền và thanh toán"
            +"</a>"
      $('.tittle-list-sub-detail-new > div > p ').append(text);
   });

   $('.p-next-step').click(function () {
       $('.secon-support-content-2').hide();
       $('.third-support-content-2').show();
   });
});