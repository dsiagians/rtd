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
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
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
            clickable: true, // Make pagination clickable
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // Load players into carousel
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    players.forEach(player => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="player-card">
                <img src="${player.image}" alt="${player.name}">
                <h3>${player.name}</h3>
                <p>Number: ${player.number}</p>
                <p>Position: ${player.position}</p>
            </div>
    }`;
        
        slide.addEventListener('click', () => showPlayerDetails(player));
        swiperWrapper.appendChild(slide);
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