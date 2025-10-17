document.addEventListener('DOMContentLoaded', function() {
    const players = [
        { name: "Melky", position: "GK", x: 50, y: 90 },
        { name: "Aswin", position: "CB", x: 20, y: 75 },
        { name: "Fajri", position: "CB", x: 50, y: 75 },
        { name: "Febri", position: "CB", x: 80, y: 75 },
        { name: "EkoS", position: "MF", x: 20, y: 50 },
        { name: "Dendi", position: "MF", x: 40, y: 50 },
        { name: "Jimris", position: "MF", x: 60, y: 50 },
        { name: "Desuh", position: "MF", x: 80, y: 50 },
        { name: "ASE", position: "FW", x: 20, y: 25 },
        { name: "Jupri", position: "FW", x: 50, y: 25 },
        { name: "Yudo", position: "FW", x: 80, y: 25 }
    ];

    const pitchLayout = document.getElementById('pitchLayout');
    const playersList = document.querySelector('.players-list');

    // Create player positions on the pitch
    players.forEach((player, index) => {
        // Create player position on pitch
        const playerPosition = document.createElement('div');
        playerPosition.className = 'player-position';
        playerPosition.style.left = `${player.x}%`;
        playerPosition.style.top = `${player.y}%`;

        // Create player image
        const img = document.createElement('img');
        img.src = `${player.name.toLowerCase()}.jpeg`;
        img.alt = player.name;

        // Create player name
        const nameDiv = document.createElement('div');
        nameDiv.className = 'player-name';
        nameDiv.textContent = player.name.toUpperCase();

        // Create player dot
        const dot = document.createElement('div');
        dot.className = 'player-dot';

        // Assemble player position
        playerPosition.appendChild(img);
        playerPosition.appendChild(nameDiv);
        playerPosition.appendChild(dot);
        pitchLayout.appendChild(playerPosition);

        // Add to lineup list
        const playerListItem = document.createElement('div');
        playerListItem.className = 'player-list-item';
        playerListItem.innerHTML = `
            <span class="player-number">${index + 1}</span>
            <span class="player-name">${player.name}</span>
            <span class="player-position">${player.position}</span>
        `;
        playersList.appendChild(playerListItem);

        // Create connections between players in the same line
        if (index > 0 && players[index - 1].y === player.y) {
            const connection = document.createElement('div');
            connection.className = 'player-connection';
            connection.style.left = `${players[index - 1].x}%`;
            connection.style.top = `${player.y}%`;
            connection.style.width = `${player.x - players[index - 1].x}%`;
            pitchLayout.appendChild(connection);
        }
    });
});