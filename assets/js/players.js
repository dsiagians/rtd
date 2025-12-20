// Sample player data
const players = [
    {
        id: 1,
        name: "Melky",
        number: 1,
        position: "Goalkeeper",
        image: "melky.jpeg"
    },
    {
        id: 2,
        name: "Fajri",
        number: 2,
        position: "Defender",
        image: "fajri.jpeg"
    },
    {
        id: 3,
        name: "Ekos",
        number: 8,
        position: "Midfielder",
        image: "ekos.jpeg"
    },
    {
        id: 4,
        name: "Jimris",
        number: 10,
        position: "Forward",
        image: "jimris.jpeg"
    },
    {
        id: 5,
        name: "Febri",
        number: 7,
        position: "Midfielder",
        image: "febri.jpeg"
    },
    {
        id: 6,
        name: "Ase",
        number: 9,
        position: "Forward",
        image: "ase.jpg"
    },
    {   id: 7,
        name: "Fadli",
        number: 3,
        position: "Midfielder",
        image: "fadli2.jpg"
    },
    {
        id: 8,
        name: "Fandri",
        number: 6,
        position: "Midfielder",
        image: "fandri2.jpg"
    },
    {
        id: 9,
        name: "GusPoer",
        number: 4,
        position: "Defender",
        image: "guspur.jpg"
    },
    {
        id: 10,
        name: "Hendra Joy",
        number: 5,
        position: "Defender",
        image: "hendra.jpg"
    },
    {
        id: 11,
        name: "Jupri",
        number: 11,
        position: "Forward",
        image: "jupri1.jpg"
    },
    {
        id: 12,
        name: "Yudho",
        number: 13,
        position: "Defender",
        image: "yudo2.jpg"
    },
];

document.addEventListener('DOMContentLoaded', function() {
    // Load players into carousel BEFORE initializing Swiper for proper sizing
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    players.forEach(player => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="player-card">
                <img src="${player.image}" alt="${player.name}" loading="lazy">
                <h3>${player.name}</h3>
                <p>Number: ${player.number}</p>
                <p>Position: ${player.position}</p>
            </div>
        `;

        slide.addEventListener('click', () => showPlayerDetails(player));
        swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper after slides are added
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 24,
        coverflowEffect: {
            rotate: 40,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
                coverflowEffect: { rotate: 0, depth: 0, slideShadows: false }
            },
            400: {
                slidesPerView: 1.15,
                spaceBetween: 12,
                coverflowEffect: { rotate: 10, depth: 30, slideShadows: false }
            },
            640: {
                slidesPerView: 1.5,
                spaceBetween: 18,
                coverflowEffect: { rotate: 20, depth: 60, slideShadows: false }
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                coverflowEffect: { rotate: 30, depth: 80, slideShadows: false }
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
                coverflowEffect: { rotate: 40, depth: 120, slideShadows: false }
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true
    });
});

function showPlayerDetails(player) {
    const detailsDiv = document.getElementById('playerDetails');
    detailsDiv.innerHTML = `
        <h2>${player.name}</h2>
        <img src="${player.image}" alt="${player.name}" class="player-detail-img">
        <div class="player-info">
            <p><strong>Number:</strong> ${player.number}</p>
            <p><strong>Position:</strong> ${player.position}</p>
            <!-- Add more player details here -->
        </div>
    `;
}