window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;  // Get the vertical scroll position
    const parallaxContainer1 = document.querySelector('.parallax-container-1');
    const parallaxContainer2 = document.querySelector('.parallax-container-2');

    // Parallax effect for .parallax-container-1
    let newHeight1 = 50 + scrollPosition * 0.05;  // Slower height adjustment for .parallax-container-1
    newHeight1 = Math.max(30, Math.min(100, newHeight1));  // Set boundaries between 30vh and 100vh

    parallaxContainer1.style.height = newHeight1 + 'vh';
    let scrollEffect1 = scrollPosition * 0.02;  // Much slower background movement for .parallax-container-1
    parallaxContainer1.style.backgroundPosition = 'center ' + (50 - scrollEffect1) + '%';

    // Parallax effect for .parallax-container-2 (unchanged)
    let newHeight2 = 50 + scrollPosition * 0.05;  // Adjusted for slower height change
    newHeight2 = Math.max(40, Math.min(90, newHeight2));  // Set boundaries between 40vh and 90vh

    parallaxContainer2.style.height = newHeight2 + 'vh';
    let scrollEffect2 = scrollPosition * 0.03;  // Slower background movement for .parallax-container-2
    parallaxContainer2.style.backgroundPosition = `center ${(50 - scrollEffect2)}%`;
});
