// Retrieve images with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

// Establish optional paramenters for the InsectionalObserver
const imgOptions = {
	threshold: 1, // delays the load the higher the number
	rootMargin: '0px 0px 50px 0px',
};

const loadImages = (image) => {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = () => {
		image.removeAttribute('data-src');
	};
};

//verify if intersection Observer is supported
if ('IntersectionObserver' in window) {
	const observer = new IntersectionObserver((items, observer) => {
		items.forEach((item) => {
			if (item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	});
	imagesToLoad.forEach((img) => {
		observer.observe(img);
	});
} else {
	imagesToLoad.forEach((img) => {
		loadImages(img);
	});
}
