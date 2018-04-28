$(document).ready(function(){    
    $('.term .wpcf7-list-item input[checked="checked"]').closest('.term .wpcf7-list-item').addClass('active');

    $('.term .wpcf7-list-item').click(function(){
        $(this).parent().find('.wpcf7-list-item').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('changed');
    });
});