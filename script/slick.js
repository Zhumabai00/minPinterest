// $(document).ready(function () {
// 	// console.log($(".current_items").innerHeight() + "px height before");

// 	$(".clickSlider").slick({
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		arrows: false,
// 		infinite: false,
// 		dots: false,
// 		centerMode: true,
// 		// autoplay: true,
// 		autoplaySpeed: 2000,
// 		centerPadding: '60px',
// 		variableWidth: true,

// 	})
// 	// console.log($(".current_items").innerHeight() + "px height after");
// });
// JavaScript to change the width of carousel items on scroll

// const carousel = document.getElementById('myCarousel');
// const carouselItems = carousel.querySelectorAll('.carousel-item');

// // Function to change the item width based on scroll position
// function changeItemWidth() {
// 	const scrollY = window.scrollY;

// 	// Determine the desired item width (e.g., 50% when scrolled to the top, 100% otherwise)
// 	const itemWidth = scrollY === 0 ? '50%' : '100%';

// 	// Apply the width to each carousel item
// 	carouselItems.forEach(item => {
// 		item.style.width = itemWidth;
// 	});
// }

// // Add an event listener to monitor scroll position
// window.addEventListener('scroll', changeItemWidth);
