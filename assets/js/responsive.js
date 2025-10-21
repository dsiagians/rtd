// Responsive utilities for RTD Football Club Website
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            adjustLayoutForScreenSize();
        }, 250);
    });

    // Initial adjustment
    adjustLayoutForScreenSize();

    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(adjustLayoutForScreenSize, 100);
    });
});

function adjustLayoutForScreenSize() {
    const width = window.innerWidth;
    
    // Adjust swiper slides for different screen sizes
    const swiperSlides = document.querySelectorAll('.swiper-slide');
    if (swiperSlides.length > 0) {
        swiperSlides.forEach(slide => {
            if (width <= 480) {
                slide.style.width = '90%';
            } else if (width <= 768) {
                slide.style.width = '80%';
            } else {
                slide.style.width = '300px';
            }
        });
    }

    // Adjust table overflow on mobile
    const tables = document.querySelectorAll('table');
    if (width <= 768 && tables.length > 0) {
        tables.forEach(table => {
            if (!table.parentElement.classList.contains('table-responsive')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'table-responsive';
                wrapper.style.overflowX = 'auto';
                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            }
        });
    }

    // Log screen size for debugging (optional)
    console.log(`Screen width: ${width}px`);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Touch event handling for better mobile experience
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}
