let swiper = new Swiper('.swiper-container', { 
	loop: true, 
	centeredSlides: true, 
	slidesPerView: '3', 
	navigation: { 
		nextEl: '.swiper-button-next', 
		prevEl: '.swiper-button-prev'
	}, 
	effect: 'coverflow', 
	coverflowEffect: { 
		rotate: 10, 
		depth: 100, 
		slideShadows: true
	},
	pagination: { 
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		color: 'white'
	},
});
