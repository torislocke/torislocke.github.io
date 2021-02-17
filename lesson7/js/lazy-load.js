//The callback function receives two parameters:
//a set of entries carrying the information about each intersection
//and the observer itself

if (!!window.IntersectionObserver) {
	let observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// console.log(entry);
					//entry.target is the element observed by the observer.
					// the image elements.
					entry.target.src = entry.target.dataset.src;
					//Once the placeholder is replaced in an image element,
					//move to no longer observe call the observer’s unobserve method
					observer.unobserve(entry.target);
				}
			});
		},
		{ rootMargin: '0px 0px 0px 0px' }
	);
	//Observer is ready to observe all the images by using its observer method:
	document.querySelectorAll('img').forEach((img) => {
		observer.observe(img);
	});
	// Display a message if the browser does not support JavaScript of Observer API
} else document.querySelector('#warning').style.display = 'block';
