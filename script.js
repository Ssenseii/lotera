/**
 *  Header
 */

const header = document.getElementById("header");

// Function to check scroll position and add the sticky class
function stickyHeader() {
	const stickyPoint = header.offsetTop;

	if (window.scrollY > stickyPoint) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

// Listen to the scroll event
window.addEventListener("scroll", stickyHeader);

/**
 * Testimonials
 */

const wrapper = document.querySelector(".testimonials__wrapper");
const cards = document.querySelectorAll(".testimonials__card");

// Calculate the total width of all cards
let cardWidth = cards[0].offsetWidth;
let totalWidth = cardWidth * cards.length;

// Set the wrapper width to twice the totalWidth to allow seamless looping
wrapper.style.width = `${totalWidth * 2}px`;

// Clone the cards to create the looping effect
cards.forEach((card) => {
	const clone = card.cloneNode(true);
	wrapper.appendChild(clone);
});

// Continuous scroll function
let scrollPosition = 0;
const scrollSpeed = 1; // Adjust the speed (smaller is slower)

function scrollTestimonials() {
	scrollPosition -= scrollSpeed;

	// Reset the position when all cards have scrolled off-screen
	if (Math.abs(scrollPosition) >= totalWidth) {
		scrollPosition = 0;
	}

	wrapper.style.transform = `translateX(${scrollPosition}px)`;

	requestAnimationFrame(scrollTestimonials);
}

// Start the continuous scroll
scrollTestimonials();
