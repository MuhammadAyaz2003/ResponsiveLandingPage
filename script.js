

// Select the navigation and content elements
const nav = document.querySelector('.nav');
const content = document.querySelector('.content');

// Create a timeline for animating the elements
const pageTimeline = gsap.timeline();

// Add animations to the timeline
pageTimeline.from(nav, { opacity: 0, y: -50, duration: 1, ease: 'power2.out' })
            .from(content, { opacity: 0, x: -50, duration: 1, ease: 'power2.out' }, '-=0.5'); // Start content animation 0.5 seconds before nav ends

// Play the animations when the page is ready
window.addEventListener('load', function () {
  pageTimeline.play();
});
