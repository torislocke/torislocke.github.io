// retrieve the air temperature
let temp = parseInt(document.getElementById('temp').innerText);
// retrieve the wind speed
let wind = parseInt(document.getElementById('windSpeed').innerText);
// calculate the wind chill
let chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
chill = chill.toFixed(0);
if (temp > 50 || wind < 3) {
	document.getElementById('windChill').innerHTML = 'N/A';
} else {
	document.getElementById('windChill').innerHTML = chill;
}
