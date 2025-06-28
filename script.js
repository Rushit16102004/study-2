document.addEventListener('DOMContentLoaded', function() {
    // Toggle button functionality
    const toggleButton = document.getElementById('toggle-button');
    const slidingContainer = document.getElementById('sliding-container');

    toggleButton.addEventListener('click', function() {
        slidingContainer.classList.toggle('active');
    });
    
    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('.slide-in');
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Handle scroll animations
    function handleScrollAnimations() {
        // Handle fade-in elements
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
        
        // Handle slide-in elements
        slideElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check for elements in viewport
    handleScrollAnimations();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Enhanced loading bar
    function showEnhancedLoading() {
        const loadingBar = document.getElementById('loading-bar');
        loadingBar.classList.add('active');
        
        setTimeout(() => {
            loadingBar.classList.remove('active');
        }, 2000);
    }
    
    // Add loading animation to all links
    const allLinks = document.querySelectorAll('a[href]:not([href="#"])');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't show loading for external links that open in new tabs
            if (this.target !== '_blank') {
                showEnhancedLoading();
            }
        });
    });
    
    // Animate quotes
    const quotes = document.querySelector('quotes');
    if (quotes) {
        setInterval(() => {
            quotes.style.transform = 'scale(1.03)';
            setTimeout(() => {
                quotes.style.transform = 'scale(1)';
            }, 1500);
        }, 3000);
    }
});