// Town variables
const APIurl = 'https://api.openweathermap.org/data/2.5/';
const weatherAPIurl = APIurl + 'weather';
const forecastAPIurl = APIurl + 'forecast';
const apiID = '&appid=4a75851e61f117f8c13325e07c980e53';
const apiUnits = '&units=imperial';
const prestonURL = '?id=5604473' + apiID + apiUnits;
const sodaspringsURL = '?id=5607916' + apiID + apiUnits;
const fishhavenURL = '?lat=42.0380399&lon=-111.4048681' + apiID + apiUnits;
let weatherURL = '';
let forecastURL = '';
let town = '';

// Puttin' all the weather together
const prestonWeather = weatherAPIurl + prestonURL;
const sodaspringsWeather = weatherAPIurl + sodaspringsURL;
const fishhavenWeather = weatherAPIurl + fishhavenURL;
const prestonForecast = forecastAPIurl + prestonURL;
const sodaspringsForecast = forecastAPIurl + sodaspringsURL;
const fishhavenForecast = forecastAPIurl + fishhavenURL;

// Page selector
if (document.getElementById('preston')) {
	weatherURL = prestonWeather;
	forecastURL = prestonForecast;
	town = 'Preston';
} else if (document.getElementById('soda')) {
	weatherURL = sodaspringsWeather;
	forecastURL = sodaspringsForecast;
	town = 'Soda Springs';
} else if (document.getElementById('fish')) {
	weatherURL = fishhavenWeather;
	forecastURL = fishhavenForecast;
	town = 'Fish Haven';
}

// Fetching stuff
fetch(weatherURL)
	.then((response) => response.json())
	.then((jsObject) => {
		let t = parseFloat(jsObject.main.temp);
		let s = parseFloat(jsObject.wind.speed);
		let output = 'N/A';
		document.getElementById('weather').innerHTML = jsObject.weather[0].description;
		document.getElementById('current-temp').innerHTML = Math.round(t) + '&#8457;';
		if (t <= 50 && s >= 3) {
			let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * (t * Math.pow(s, 0.16));
			output = Math.round(f) + '&#8457;';
		}
		document.getElementById('output').innerHTML = output;
		document.getElementById('humidity').innerHTML = jsObject.main.humidity + '&#37;';
		document.getElementById('speed').innerHTML = Math.round(s) + ' mph';
	});
fetch(forecastURL)
	.then((response) => response.json())
	.then((forecastObject) => {
		var forecast = forecastObject.list.filter((x) => x.dt_txt.includes('18:00:00'));
		const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		for (let day = 0; day < forecast.length; day++) {
			const d = new Date(forecast[day].dt_txt);
			const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
			const desc = forecast[day].weather[0].description;
			document.getElementById(`day0${day + 1}`).textContent = weekdays[d.getDay()];
			document.getElementById(`forecast0${day + 1}`).textContent = Math.round(forecast[day].main.temp);
			document.getElementById(`icon0${day + 1}`).setAttribute('src', imagesrc);
			document.getElementById(`icon0${day + 1}`).setAttribute('alt', desc);
		}
	});
fetch('https://byui-cit230.github.io/weather/data/towndata.json')
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		let towns = jsonObject['towns'];
		let specificTown = towns.filter((i) => i.name == town);
		let list = document.createElement('ul');
		let townEvents = specificTown[0].events;
		townEvents.forEach((detail) => {
			let listItem = document.createElement('li');
			listItem.innerHTML = detail;
			list.appendChild(listItem);
		});
		document.querySelector('.town-events').appendChild(list);
	});
