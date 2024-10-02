// jQuery(function () {});

jQuery('.slider').slick({
	arrows: false,
	fade: true,
	autoplay: 3000,
	dots: true,
});

jQuery('.header-btn').on('click', function () {
	jQuery('.menu').addClass('active');
});
jQuery('.close-btn').on('click', function () {
	jQuery('.menu').removeClass('active');
});
