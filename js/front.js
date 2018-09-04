//клик по бургеру
$('.burger').on('click', function(){
//бургер
	$(this).next().slideToggle(500);
	$(this).next().toggleClass('active');
	$(this).toggleClass('active');
});