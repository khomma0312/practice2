$(function() {
	$('.accordion-content').hide();

	$('.accordion-click').click(function() {
		$(this).next().slideToggle();

		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
			
		} else {
			$(this).addClass('open');
			$(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
		}
	});
	

	var topBtn = $('.pagetop');
	topBtn.hide();

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

	topBtn.click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});