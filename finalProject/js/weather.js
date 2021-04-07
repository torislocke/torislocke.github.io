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
		// document.getElementById('alert').textContent = jsObject.alerts.description;
		var forecast = jsObject.daily.slice(1, 4);
		const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];
		for (let day = 0; day < forecast.length; day++) {
			const d = new Date(forecast[day].dt * 1000); // The new Date() function needs a milliseconds value. Convert Unix timestamp to milliseconds by multiplying by 1000.
			const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
			const desc = forecast[day].weather[0].description;
			document.getElementById(`day${day + 1}`).textContent = weekdays[d.getDay()];
			document.getElementById(`forecast${day + 1}`).textContent = Math.round(forecast[day].temp.max);
			document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
			document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
		}
		if (jsObject.hasOwnProperty('alerts')) {
			document.querySelector('.weatherAlert').style.display = 'block';
			document.getElementById('alert').innerHTML = jsObject.alerts[0].event;
			document.getElementById('alertDescription').innerHTML = jsObject.alerts[0].description;
		} else {
			document.querySelector('.weatherAlert').style.display = 'none';
		}
	});
// ---- function to open and close the current weather alert --- //
function weatherAlert() {
	var x = document.getElementById('weatherAlert');
	if (x.style.display === 'none') {
		x.style.display = 'block';

		document.getElementById('alertBtn').value = 'Hide Weather Alert';
	} else {
		x.style.display = 'none';
		document.getElementById('alertBtn').value = 'Show Weather Alert';
	}
}
