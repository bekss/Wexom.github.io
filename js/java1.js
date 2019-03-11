$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
 	nav:true,
     items:1,
     autoPlay:true,
     animateOut: 'fadeOut',
     margin:10
    
    
    
});
 });

$(function(){
	$("#video_play").click(function(){
		var youtube=$(this).parents('.video__off').attr('youtube');
		$(this).parents('.video__off').html('<iframe width="100%" height="515" src="https://www.youtube.com/embed/'+youtube+'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
	});
});
