$(document).ready(function(){    
    $('.term .wpcf7-list-item input[checked="checked"]').closest('.term .wpcf7-list-item').addClass('active');

    $('.term .wpcf7-list-item').click(function(){
        $(this).parent().find('.wpcf7-list-item').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('changed');
    });
    
    $(".answer").hide();
    $(".question").click(function(){
        $(this).next().slideToggle(500);
		$(this).toggleClass('active');
    });
        
    $(".second_part").slideUp(500);
    $(".more_info").click(function(event){
        event.preventDefault();
        $('.second_part').slideDown(500);
		$('.more_info').toggleClass('active');
    });
});