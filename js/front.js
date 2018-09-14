//клик по бургеру
$('.burger').on('click', function(){
//бургер
	$(this).next().slideToggle(500);
	$(this).next().toggleClass('active');
	$(this).toggleClass('active');
});
// tabs
$('ul.tabs-caption').on('click', 'li:not(.active)', function() {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
});
