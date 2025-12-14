document.addEventListener("DOMContentLoaded", () => {

    const players = [
        { name: "Melky", pos: "GK", x: 50, y: 90 },
        { name: "Aswin", pos: "CB", x: 20, y: 70 },
        { name: "Fajri", pos: "CB", x: 50, y: 70 },
        { name: "Febri", pos: "CB", x: 80, y: 70 },

        { name: "EkoS", pos: "MF", x: 20, y: 45 },
        { name: "Dendi", pos: "MF", x: 40, y: 45 },
        { name: "Jimris", pos: "MF", x: 60, y: 45 },
        { name: "Desuh", pos: "MF", x: 80, y: 45 },

        { name: "ASE", pos: "FW", x: 25, y: 20 },
        { name: "Jupri", pos: "FW", x: 50, y: 20 },
        { name: "Yudo", pos: "FW", x: 75, y: 20 }
    ];

    const pitch = document.getElementById("pitchLayout");
    const list = document.querySelector(".players-list");

    players.forEach((p, i) => {

        /* PLAYER ON PITCH */
        const playerDiv = document.createElement("div");
        playerDiv.className = "player-position";
        playerDiv.style.left = p.x + "%";
        playerDiv.style.top = p.y + "%";

        playerDiv.innerHTML = `
            <img src="${p.name.toLowerCase()}.jpeg" alt="${p.name}">
            <div class="player-name">${p.name}</div>
        `;

        pitch.appendChild(playerDiv);

        /* PLAYER LIST */
        const listItem = document.createElement("div");
        listItem.className = "player-list-item";
        listItem.innerHTML = `
            <div class="player-number">${i + 1}</div>
            <div>${p.name}</div>
            <div class="player-position-text">${p.pos}</div>
        `;

        list.appendChild(listItem);
    });
});
