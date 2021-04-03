//  Main Navigation Menu function for various screen sizes
function toggleMenu() {
	document.getElementById('topnav').classList.toggle('hide');
}
function toggleOff() {
	if (window.innerWidth > 500) {
		document.getElementById('topnav').classList.remove('hide');
	}
}

// function to open and close the current weather note
function weatherFunction() {
	var x = document.getElementById('weatherSummary');
	if (x.style.display === 'none') {
		x.style.display = 'grid';
	} else {
		x.style.display = 'none';
	}
}

// function to open and close the current weather note
function seeDetails() {
	var x = document.getElementById('seeBronze');
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}
// function to open and close the current weather note
function seeSilver() {
	var x = document.getElementById('seeSilver');
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}

// function to open and close the current weather note
function seeGold() {
	var x = document.getElementById('seeGold');
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}

// Footer JavaScript to maintain the current year information of copyright
let currentYear = new Date();
document.getElementById('currentYear').innerHTML = currentYear.getFullYear();

// Duvall weather - pulls weather data from open weather map

// The current temperature, current condition description, and humidity
//   - weather alerts if available (applicable) from the government and display it as a
//      closeable message at the top of the page. (closeable means the user can click to
//      remove the alert)
//  - display and label a three day forecast of the "day" temperature using the current
//      date.

// city: Duvall, US
// Geo coords [47.7423, -121.9857]
// app id f2526edae91a60e14b8f5c3aa225079d

const apiURL =
	'https://api.openweathermap.org/data/2.5/onecall?lat=47.7423&lon=-121.9857&units=imperial&lang=en&appid=f2526edae91a60e14b8f5c3aa225079d';
fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
		document.getElementById('current-temp').textContent = Math.round(jsObject.current.temp);
		document.getElementById('humidity').textContent = jsObject.current.humidity;
		document.getElementById('descript').textContent = jsObject.current.weather[0].description;
		document.getElementById('alert').textContent = jsObject.alerts.description;
	});
