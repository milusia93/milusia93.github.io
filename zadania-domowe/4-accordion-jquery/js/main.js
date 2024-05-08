$(document).ready(function(){
    $('.accordion-item').click(function(){
        $(this).find('.accordion-content').slideToggle(1500);
        $(this).toggleClass('open');
    });

});