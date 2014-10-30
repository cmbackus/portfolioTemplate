/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini
     http://www.responsivewebmobile.com
	 some alterations have been made to the original for the purpose of this portfolio template project
******************************************************************************/
jQuery(document).ready(function() {
	var viewH = $(window).height();
	var viewW = $(window).width();
	$('.carousel').carousel({
    	pause: "false",
    	interval: false
	});

	$('.carousel').css({'margin': 0, 'width': $(window).outerWidth(), 'height': $(window).height()});
	$('.carousel-inner').css({'margin': 0, 'width': $(window).outerWidth(), 'height': $(window).height()});
	$('.carousel .item').css({'position': 'relative', 'width': '100%', 'height': '100%'});
	$('.carousel .item div').css({'position': 'relative', 'width': '100%', 'height': '100%'});
	$('.carousel-inner div.item img').each(function() {
		if($(this).attr('class')=='bg'){
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background': 'url('+imgSrc+') center center no-repeat', '-webkit-background-size': '100% ', '-moz-background-size': '100%', '-o-background-size': '100%', 'background-size': '100%', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover'});
		$(this).remove();
		}
	});

	$(window).on('resize', function() {
		viewH = $(window).height();
		viewW = $(window).width();
		$('.carousel').css({'width': viewW, 'height': $(window).height()});
	});
}); 