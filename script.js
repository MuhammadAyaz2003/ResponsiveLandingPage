// Select the navigation and content elements
const nav = document.querySelector('.nav');
const content = document.querySelector('.content');

// Create a timeline for animating the elements
const pageTimeline = gsap.timeline();

// Add staggered animations with custom easing and durations
pageTimeline.from(nav, {
  opacity: 0,
  y: -50,
  duration: .6,
  ease: 'ease-in-out',
})
.from(content, {
  opacity: 0,
  x: -50,
  duration: .6,
  ease: 'ease-in-out',
  delay: 0.3,
});

// Play the animations when the page is ready
window.addEventListener('load', function () {
  pageTimeline.play();
});
