// preston weather - pulls weather data from open weather map
// windchill info is in open weather source file

const cityId = 5604473;

// API KEY
const key = 'f2526edae91a60e14b8f5c3aa225079d';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${key}&lang={en}`;
fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
		console.log(jsObject);
		document.getElementById('descript').textContent = jsObject.weather[0].description;
		document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
		document.getElementById('humidity').textContent = jsObject.main.humidity;
		document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);
		document.getElementById('windChill').textContent = Math.round(jsObject.main.feels_like);
		const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
		const desc = jsObject.weather[0].description; //  weather array
	});

const forecastURL =
	'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=f2526edae91a60e14b8f5c3aa225079d';
fetch(forecastURL)
	.then((response) => response.json())
	.then((forecastObject) => {
		var forecast = forecastObject.list.filter((x) => x.dt_txt.includes('18:00:00'));
		const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		for (let day = 0; day < forecast.length; day++) {
			const d = new Date(forecast[day].dt_txt);
			const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
			const desc = forecast[day].weather[0].description;
			document.getElementById(`day${day + 1}`).textContent = weekdays[d.getDay()];
			document.getElementById(`forecast${day + 1}`).textContent = Math.round(forecast[day].main.temp);
			document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
			document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
		}
	});
