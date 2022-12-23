new Swiper('.profile__swiper',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	//автопрокуртка
	autoplay: {
		//пауза между слайдами
		delay: 2000,
		//закончить на ласт слайде
		// stopOnLastSlide: true,
		//откл после ручн перекл
		disableOnInteraction: false,
	},
	pagination: {
	el: '.swiper-pagination',
	//буллеты
	clickable: true,
	//динамические булеты
	// dynamicBullets: true,

	
	},
	loop: true,
});
// бургер
$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('loock');
	});
});
// бургер



