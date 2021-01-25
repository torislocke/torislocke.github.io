// const hamburger = document.getElementById('hamburger_icon');
// const navUL = document.getElementById('nav-ul');

// hamburger.addEventListener('click', () => {
//     navUL.classList.toggle('show');
// });

$(function () {
	$('.toggle').on('click', function () {
		if ($('.item').hasClass('show')) {
			$('.item').removeClass('show');
		} else {
			$('.item').addClass('show');
		}
	});
});
// function toggleMenu() {
// 	document.getElementById('navigation')[0].classList.toggle('responsive');
// }
