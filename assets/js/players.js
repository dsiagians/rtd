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
    }
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
                spaceBetween: 12,
                coverflowEffect: { rotate: 20, depth: 60, slideShadows: false }
            },
            480: {
                slidesPerView: 1.2,
                spaceBetween: 16,
                coverflowEffect: { rotate: 24, depth: 80, slideShadows: false }
            },
            640: {
                slidesPerView: 1.6,
                spaceBetween: 18
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
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
        <img src="${player.image}" alt="${player.name}" style="max-width: 300px;">
        <div class="player-info">
            <p><strong>Number:</strong> ${player.number}</p>
            <p><strong>Position:</strong> ${player.position}</p>
            <!-- Add more player details here -->
        </div>
    `;
}