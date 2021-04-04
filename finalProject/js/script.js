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

// function to open and close the Bronze level membership description
function seeBronze() {
	var x = document.getElementById('seeBronze');
	if (x.style.display === 'none') {
		x.style.display = 'block';
		document.getElementById('bronzeMessage').innerHTML = 'Hide Bronze Plan';
	} else {
		x.style.display = 'none';
		document.getElementById('bronzeMessage').innerHTML = 'View Bronze Plan';
	}
}

// function to open and close the Silver level membership description
function seeSilver() {
	var x = document.getElementById('seeSilver');
	if (x.style.display === 'none') {
		x.style.display = 'block';
		document.getElementById('silverMessage').innerHTML = 'Hide Silver Plan';
	} else {
		x.style.display = 'none';
		document.getElementById('silverMessage').innerHTML = 'View Silver Plan';
	}
}

// function to open and close the Gold level membership description
// function seeGold() {
// 	var x = document.getElementById('seeGold');
// 	if (x.style.display === 'none') {
// 		x.style.display = 'block';
// 		document.getElementById('goldMessage').innerHTML = 'Hide Gold Plan';
// 	} else {
// 		x.style.display = 'none';
// 		document.getElementById('goldMessage').innerHTML = 'View Gold Plan';
// 	}
// }

function seeGold() {
	if (getElementbyId('seeGold' === 'hide')) {
		document.getElementById('seeGold').classList.remove('hide');
		document.getElementById('goldMessage').innerHTML = 'Hide Gold Plan';
	} else {
		document.getElementById('seeGold').classList.add('hide');
		document.getElementById('goldMessage').innerHTML = 'View Gold Plan';
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

// ------------  function to build business directory page
const requestURL = '../data/directory.json';

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const business = jsonObject['business'];
		for (let i = 0; i < business.length; i++) {
			let card = document.createElement('section');
			let h2 = document.createElement('h2');
			let p = document.createElement('p');
			let bp = document.createElement('p');
			let cp = document.createElement('p');
			let dp = document.createElement('p');
			let ep = document.createElement('p');
			let image = document.createElement('img');

			h2.textContent = business[i].businessName;

			p.textContent = 'Main Contact: ' + business[i].firstName + ' ' + business[i].lastName;

			bp.textContent = 'Title: ' + business[i].jobTitle;
			cp.textContent = 'Telephone: ' + business[i].cellPhone;
			dp.textContent = 'Address: ' + business[i].businessAddress;
			ep.textContent = 'Website: ' + business[i].businessWebsite;

			image.setAttribute('src', business[i].imageurl);
			image.setAttribute('alt', business[i].businessName);
			image.setAttribute('title', business[i].businessName);

			card.appendChild(h2);
			card.appendChild(p);
			card.appendChild(bp);
			card.appendChild(cp);
			card.appendChild(dp);
			card.appendChild(ep);
			card.appendChild(image);

			document.querySelector('div.cards').appendChild(card);
		}
	});
