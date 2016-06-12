/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Portfolio Filter
$(window).load(function(){ 
  var $container = $('.portfolioContainer'); 
  $container.isotope({ 
	  filter: '*', 
	  animationOptions: { 
		  duration: 750, 
		  easing: 'linear', 
		  queue: false, 
	  } 
});
$('.portfolioFilter a').click(function(){ 
	var selector = $(this).attr('data-filter'); 
	$container.isotope({ 
		filter: selector, 
		animationOptions: { 
			duration: 750, 
			easing: 'linear', 
			queue: false, 
		} 
	}); 
  return false; 
});  
var $optionSets = $('.portfolioFilter ul'), 
   $optionLinks = $optionSets.find('a'); 

   $optionLinks.click(function(){ 
	  var $this = $(this); 
  // don't proceed if already selected 
  if ( $this.hasClass('active') ) { 
	  return false; 
  } 
var $optionSet = $this.parents('.portfolioFilter ul'); 
$optionSet.find('.active').removeClass('active'); 
$this.addClass('active');  
	});
});

