//First, show the button upon scrolling to more than 200px from top of the viewport
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() - 200 > 0){
			$('#to-top').stop().slideDown('fast');
		}
		else{
			$('#to-top').stop().slideUp('fast');
		}
	})
})

// Activate the scroll to the top functionality
$(document).ready(function(){
	('#to-top').on('click', function(){
		$('html, body').animate({scrollTop: 0}, 200)
	});
});




























