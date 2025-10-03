window.addEventListener('load', function() {
  if(!(window.location.pathname == '/' || window.location.pathname == 'index.html') ){
      setTimeout(() => {
        stickySection.classList.add('sticky-section-visible');
    }, 2500);
  }
});
// Function to reduce the volume of the video over 2 seconds
function reduceVolume(element) {
  if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    var video = document.getElementById(element);
    var duration = 2000; // Duration in milliseconds
    var steps = 20; // Number of steps to reduce volume
    var stepDuration = duration / steps; // Duration of each step
    var volumeStep = video.volume / steps; // Volume decrement per step
  
    var currentStep = 0;
  
    var interval = setInterval(function() {
      if (currentStep < steps) {
        video.volume = Math.max(0, video.volume - volumeStep); // Decrease volume
        currentStep++;
      } else {
        clearInterval(interval); // Clear interval after 2 seconds
      }
    }, stepDuration);
  }

  }

  // Function to raise the volume of the video over 1 second
  function raiseVolume(element, type) {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
      var video = document.getElementById(element);
      if (!video) {
        console.log('Video element not found');
        return;
      }
  
      var targetVolume = type == 'video' ? 1.0 : 0.3;
  
      var duration = 1000; // Duration in ms
      var steps = 10;
      var stepDuration = duration / steps;
      var volumeStep = (targetVolume - video.volume) / steps;
  
      var currentStep = 0;
  
      var interval = setInterval(function() {
        if (currentStep < steps) {
          video.volume = Math.min(targetVolume, video.volume + volumeStep);
          // console.log('current volume - ' + video.volume);
          currentStep++;
        } else {
          clearInterval(interval);
          video.volume = targetVolume;
          // console.log('final volume set to ' + video.volume);
        }
      }, stepDuration);
    }
  }

  // Select the sticky section
const stickySection = document.querySelector('.sticky-section-outer');

// Variable to track the last scroll position
let lastScrollPosition = 0;

// Function to handle scroll events
function handleScroll(scrollValue) {
    const scrollPosition = scrollValue; // Get the current scroll position
    // Check if scrolling down
    if (scrollPosition > lastScrollPosition) {
        // Scrolling down: fade out the sticky section
        stickySection.classList.remove('sticky-section-visible');
    } else {
        // Scrolling up: fade in the sticky section
        stickySection.classList.add('sticky-section-visible');
    }

    // Update the last scroll position
    lastScrollPosition = scrollPosition;
}


function playVideo(element) {
  const video = element.querySelector('.hover-video');
  video.play();
}

function pauseVideo(element) {
  const video = element.querySelector('.hover-video');
  video.pause();
  video.currentTime = 0; // Reset video to start
}
