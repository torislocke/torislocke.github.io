// ------------  function to build business directory page

fetch('./data/directory.json')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		appendData(data);
	});
// .catch(function (err) {
// 	console.log('error: ' + err);
// });
function appendData(data) {
	var mainContainer = document.getElementById('myData');
	for (var i = 0; i < data.length; i++) {
		var div = document.createElement('div');
		div.innerHTML = '<h3>' + data[i].businessName + '</h3>';
		div.innerHTML += '<li>Main Contact: ' + data[i].firstName + ' ' + data[i].lastName + '</li>';
		div.innerHTML += '<li>Title: ' + data[i].jobTitle + '</li>';
		div.innerHTML += '<li>Telephone: ' + data[i].cellPhone + '</li>';
		div.innerHTML += '<li>Address: ' + data[i].businessAddress + '</li>';
		div.innerHTML +=
			'<li>Website: ' + '<a href="' + data[i].businessWebsite + '">' + data[i].businessWebsite + '</a></li>';

		mainContainer.appendChild(div);
	}
}

// ----------- function to open and close the Non-Profit level membership ---- //
function style_code() {
	//  set variables & retrieve the top parent element to toggle between display and hide
	var myData = document.getElementById('myData');

	//  retrieve the button element
	var gridStyle = document.getElementById('gridStyle');

	//  retrieve the button element
	var blockStyle = document.getElementById('blockStyle');

	//  listen for open event and call function
	gridStyle.addEventListener('click', dataGridStyle);

	//  listen for close event and call function
	blockStyle.addEventListener('click', dataBlockStyle);

	// create function to open section without jumping to top of page
	function dataGridStyle(e) {
		e.preventDefault();
		{
			myData.style.display = 'grid';
		}
	}

	// create function to close section
	function dataBlockStyle() {
		myData.style.display = 'block';
	}
}
