(function($){
//SCROLLING TO ANCHORS

$('a[href^="#"]:not(.popup_content)').click(function(){
	var offset = 0;
	var link = $(this);
	$('html, body').stop().animate({scrollTop: $(link.attr('href')).offset().top - offset}, 1000);

	return false 
   
    });


$(document).ready(function(){

//NAVIGATION ACTIVE
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    $('section').each(function() {
            if ($(this).offset().top <= windscroll && ($(this).offset().top + $(this).height()) >= windscroll) {
            
            var linkId = $(this).attr('id');
            $('a[href="#'+linkId+'"]').parent('li').addClass('nav-active')
            .siblings().removeClass('nav-active');
            }
        });

});

//FIXED MENU
$(window).scroll(function(){
var scale = 0.1; // Расстояние от верха экрана до объекта в %
var onHeight = $(window).height() * scale;
var winOffset = $(window).scrollTop();
var aboutOffset = $('#about').offset().top;
if((winOffset+onHeight)>aboutOffset){
	$('.nav').removeClass('nav').addClass('nav-on-scroll bounceInLeft');	
} else {
	$('.nav-on-scroll').removeClass('nav-on-scroll bounceInLeft').addClass('nav');	
}
return false 
});




//PARTICLES
particlesJS("particles-js", {"particles":{"number":
	{"value":140,"density":{"enable":true,"value_area":800}},
	"color":{"value":"#ffffff"},
	"shape":{"type":"circle",
	"stroke":{"width":0,"color":"#000000"},
	"polygon":{"nb_sides":5},
	"image":{"src":"img/github.svg","width":100,"height":100}},
	"opacity":{"value":0.5,"random":false,
	"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
	"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
	"line_linked":{"enable":false,"distance":100,"color":"#ffffff","opacity":0.4,"width":1},
	"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":true,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
	"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},
	"onclick":{"enable":true,"mode":"push"},"resize":true},
	"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
	"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
	"repulse":{"distance":100,"duration":0.4},"push":{"particles_nb":4},
	"remove":{"particles_nb":2}}},
	"retina_detect":true});
var count_particles, stats, update; 
stats = new Stats; stats.setMode(0); 
stats.domElement.style.position = 'absolute'; 
stats.domElement.style.left = '0px'; 
stats.domElement.style.top = '0px'; 
document.body.appendChild(stats.domElement); 
count_particles = document.querySelector('.js-count-particles'); 
update = function() { stats.begin(); stats.end(); 
   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
   requestAnimationFrame(update); }; requestAnimationFrame(update);;

});

//STELLAR
/*
$(window).stellar();
//+div with data-stellar-background-ratio="0.6"
//css background-attachment:fixed;
$.stellar({
  verticalOffset: 150
});
*/


//COLORBOX
/*$('a.popup_content[href^="#"]').colorbox({
	inline:true, 
	href:"$(this).attr('href')"
});*/

/*//MAGNIFIC POPUP
$(".popup_content").magnificPopup({
type:"inline",
midClick: false,
closeOnBgClick: true
	});
$('button').magnificPopup({
  items: {
      src: '<div class="white-popup">Dynamically created popup</div>',
      type: 'inline'
  },
  closeBtnInside: true
});*/

//OWL CAROUSEL
$(".owl-carousel").owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 7000,
	nav: true,
	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	smartSpeed: 600,
	responsiveClass: true,
	responsive: {
		0: {items: 1}
	}



});


//PRELOADER
$(window).on('load', function(){
$('.loader').fadeOut(1500, function(){
  $(this).remove();
});
});

//PORTFOLIO ITEMS ANIMATION
$('.item-container').mouseover(function(){
	$(this).find('.item-description').addClass('item-triggered');
});
$('.item-container').mouseout(function(){
	$(this).find('.item-description').removeClass('item-triggered');
});

//SCROLL ANIMATION

$(window).scroll(function(){

$('.first-bullets li').each(function(){
var scale = 0.9; // Расстояние от верха экрана до объекта в %
var onHeight = $(window).height() * scale;
var winOffset = $(window).scrollTop();
var aboutOffset = $(this).offset().top;

    if((winOffset+onHeight)>aboutOffset){
    
    $(this).addClass('animated fadeInLeft delay');

}else{
	
	$(this).removeClass('animated fadeInLeft delay');
}
});
});

$(window).scroll(function(){

$('.second-bullets li').each(function(){
var scale = 0.9; // Расстояние от верха экрана до объекта в %
var onHeight = $(window).height() * scale;
var winOffset = $(window).scrollTop();
var aboutOffset = $(this).offset().top;

    if((winOffset+onHeight)>aboutOffset){
    
    $(this).addClass('animated fadeInRight delay');

}else{
	
	$(this).removeClass('animated fadeInRight delay');
}
});
});

//SCROLLING

})( jQuery );

