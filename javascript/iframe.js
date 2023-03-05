const WIDTH_PERCENT = 50;
const MAX_WIDTH = 500;

const ASPECT_RATIO = 9 / 16;

function resizeIframes() {
	let iframes = document.querySelectorAll('iframe');
	iframes.forEach(iframe => {
		let parentWidth = iframe.parentElement.clientWidth;
		let width = parentWidth * WIDTH_PERCENT / 100;
		if (width > MAX_WIDTH) {
			width = MAX_WIDTH;
		}
		let height = width * ASPECT_RATIO;

		iframe.setAttribute("width", width);
		iframe.setAttribute("height", height);
	});
}

//Event listener for window resize
window.addEventListener('resize', function(event) {
	resizeIframes();
});

//Event listener for page load
window.addEventListener('load', function(event) {
	resizeIframes();
});


const videoSection = document.querySelector('#video-section');
// Event listener for #video-section style change
let observer = new MutationObserver(function(mutations) {
	resizeIframes();
});
observer.observe(videoSection, {
	attributes: true,
	attributeFilter: ['style']
});