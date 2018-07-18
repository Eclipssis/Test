$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    items:1,
	    animateOut: 'fadeOut'
	})

	$(".js-open-modal").click(function () {
		$('#exampleModal').arcticmodal();
	})

});//end ready

