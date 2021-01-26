function toggleMenu() {
	document.getElementById('topnav').classList.toggle('hide');
}
function toggleOff() {
	if (window.innerWidth > 500) {
		document.getElementById('topnav').classList.remove('hide');
	}
}

