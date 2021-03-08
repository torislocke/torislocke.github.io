//city id
const cityId = 5604473;

// API KEY
const key = 'f2526edae91a60e14b8f5c3aa225079d';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${key}&lang={en}`;
fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
		console.log(jsObject);
		document.getElementById('descript').textContent = jsObject.weather.description;
		document.getElementById('current-temp').textContent = jsObject.main.temp;
		document.getElementById('humidity').textContent = jsObject.main.humidity;
		document.getElementById('windSpeed').textContent = jsObject.wind.speed;
		document.getElementById('windChill').textContent = jsObject.main.feels_like;
		const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
		const desc = jsObject.weather[0].description; // note how we reference the weather array
		document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
		document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
		document.getElementById('icon').setAttribute('alt', desc);
	});
