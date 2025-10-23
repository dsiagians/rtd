// Sample gallery data
const galleryImages = [
    {
        id: 1,
        src: 'melky.jpeg',
        category: 'matches',
        caption: 'Best GoalKeeper 2025'
    },
    {
        src: 'fajri.jpeg',
        category: 'training',
        caption: 'defender in action'
    },
    {
        src: 'ekos.jpeg',
        category: 'events',
        caption: 'midfielder celebration'
    },
    {
        src: 'febri.jpeg',
        category: 'training',
        caption: 'defender training hard'
    },
    {
        src: 'jimris.jpeg',
        category: 'events',
        caption: ' striker scoring goal'
    }
    // Add more images here
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper('.gallery-carousel', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true, // Enable continuous loop
        autoplay: {
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // Load initial gallery
    loadGallery('all');

    // Category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            loadGallery(this.dataset.category);
        });
    });
});

function loadGallery(category) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = '';

    const filteredImages = category === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === category);

    filteredImages.forEach(image => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <img src="${image.src}" alt="${image.caption}" 
                 onclick="openLightbox('${image.src}', '${image.caption}')">
            <div class="image-caption">${image.caption}</div>
        `;
        swiperWrapper.appendChild(slide);
    });
}

function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');

    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'block';
}

// Close lightbox
document.querySelector('.close-lightbox').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
});

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
