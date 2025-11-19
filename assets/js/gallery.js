// Sample gallery data 
const galleryImages = [
    {
        id: 1,
        src: 'melky.jpeg',
        category: 'matches',
        caption: 'Best GoalKeeper 2025',
        type: 'image'
    },
    {
        src: 'fajri.jpeg',
        category: 'training',
        caption: 'defender in action',
        type: 'image'
    },
    {
        src: 'ekos.jpeg',
        category: 'events',
        caption: 'midfielder celebration',
        type: 'image'
    },
    {
        src: 'febri.jpeg',
        category: 'training',
        caption: 'defender training hard',
        type: 'image'
    },
    {
        src: 'jimris.jpeg',
        category: 'events',
        caption: 'striker scoring goal',
        type: 'image'
    },
    {
        src: 'team3.jpg',
        category: 'event',
        caption: 'rtd vs dir 4',
        type: 'image'
    },

    // ⭐ Tambahan Video
    {
        src: 'jupri.MOV',     // ganti sesuai nama file Anda
        category: 'events',
        caption: 'Match Highlight Video',
        type: 'video'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.gallery-carousel', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
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

    loadGallery('all');

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

    filteredImages.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        // Jika item adalah VIDEO
        if (item.type === "video") {
            slide.innerHTML = `
                <video class="gallery-video" muted onclick="openLightbox('${item.src}', '${item.caption}', 'video')">
                    <source src="${item.src}" type="video/mp4">
                    <source src="${item.src}" type="video/quicktime">
                </video>
                <div class="image-caption">${item.caption}</div>
            `;
        } 
        // Jika item adalah GAMBAR
        else {
            slide.innerHTML = `
                <img src="${item.src}" alt="${item.caption}" 
                     onclick="openLightbox('${item.src}', '${item.caption}', 'image')">
                <div class="image-caption">${item.caption}</div>
            `;
        }
        swiperWrapper.appendChild(slide);
    });
}

function openLightbox(src, caption, type) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const video = document.getElementById('lightbox-video');
    const cap = document.querySelector('.lightbox-caption');

    // Reset tampilan
    img.style.display = 'none';
    video.style.display = 'none';

    if (type === "image") {
        img.src = src;
        img.style.display = 'block';
    } else {
        video.src = src;
        video.style.display = 'block';
    }

    cap.textContent = caption;
    lightbox.style.display = 'block';
}

// Close lightbox
document.querySelector('.close-lightbox').addEventListener('click', function() {
    const video = document.getElementById('lightbox-video');
    video.pause();
    document.getElementById('lightbox').style.display = 'none';
});

// Close when clicking outside
document.getElementById('lightbox').addEventListener('click', function(e) {
    const video = document.getElementById('lightbox-video');
    if (e.target === this) {
        video.pause();
        this.style.display = 'none';
    }
});
