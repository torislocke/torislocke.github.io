// JavaScript to place last update information in the footer
document.getElementById('updated').innerHTML = document.lastModified;

// Footer JavaScript to maintain the current year information of copyright
let currentYear = new Date();
document.getElementById('currentYear').innerHTML = currentYear.getFullYear();

//  Main Navigation Menu function for various screen sizes
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});

// ----------- function to open and close the Non-Profit level membership ---- //
function my_code() {
	//  set variables & retrieve the top parent element to toggle between display and hide
	var non = document.getElementById('nonModal');

	//  retrieve the button element
	var nonBtn = document.getElementById('nonBtn');

	//  retrieve the close element
	var nonCloseBtn = document.getElementById('nonCloseBtn');

	//  listen for open event and call function
	nonBtn.addEventListener('click', nonOpenModal);

	//  listen for close event and call function
	nonCloseBtn.addEventListener('click', nonCloseModal);

	// create function to open section without jumping to top of page
	function nonOpenModal(e) {
		e.preventDefault();
		{
			non.style.display = 'block';
			nonBtn.style.display = 'none';
		}
	}

	// create function to close section
	function nonCloseModal() {
		non.style.display = 'none';
		nonBtn.style.display = 'inline-block';
	}

	// ----------- function to open and close the Bronze level membership ---- //
	var bronze = document.getElementById('bronzeModal');
	var bronzeBtn = document.getElementById('bronzeBtn');
	var bronzeCloseBtn = document.getElementById('bronzeCloseBtn');
	bronzeBtn.addEventListener('click', bronzeOpenModal);
	bronzeCloseBtn.addEventListener('click', bronzeCloseModal);
	function bronzeOpenModal(e) {
		e.preventDefault();
		{
			bronze.style.display = 'block';
			bronzeBtn.style.display = 'none';
		}
	}
	function bronzeCloseModal() {
		bronze.style.display = 'none';
		bronzeBtn.style.display = 'inline-block';
	}

	// ----------- function to open and close the Silver level membership ---- //
	var silver = document.getElementById('silverModal');
	var silverBtn = document.getElementById('silverBtn');
	var silverCloseBtn = document.getElementById('silverCloseBtn');
	silverBtn.addEventListener('click', silverOpenModal);
	silverCloseBtn.addEventListener('click', silverCloseModal);
	function silverOpenModal(e) {
		e.preventDefault();
		{
			silver.style.display = 'block';
			silverBtn.style.display = 'none';
		}
	}
	function silverCloseModal() {
		silver.style.display = 'none';
		silverBtn.style.display = 'inline-block';
	}

	// ----------- function to open and close the Gold level membership ---- //
	var gold = document.getElementById('goldModal');
	var goldBtn = document.getElementById('goldBtn');
	var goldCloseBtn = document.getElementById('goldCloseBtn');
	goldBtn.addEventListener('click', goldOpenModal);
	goldCloseBtn.addEventListener('click', goldCloseModal);
	function goldOpenModal(e) {
		e.preventDefault();
		{
			gold.style.display = 'block';
			goldBtn.style.display = 'none';
		}
	}
	function goldCloseModal() {
		gold.style.display = 'none';
		goldBtn.style.display = 'inline-block';
	}
}
