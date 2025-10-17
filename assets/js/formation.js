// Three.js setup for 3D formation display
let scene, camera, renderer, players = [];

// Player data for formation
const teamPlayers = [
    { name: "Melky", position: "Goalkeeper", image: "melky.jpeg", number: 1 },
    { name: "Fajri", position: "Defender", image: "fajri.jpeg", number: 2 },
    { name: "Ekos", position: "Midfielder", image: "ekos.jpeg", number: 8 },
    { name: "Jimris", position: "Forward", image: "jimris.jpeg", number: 10 },
    { name: "Febri", position: "Midfielder", image: "febri.jpeg", number: 7 }
];

function init() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a472a); // Football pitch green

    // Create camera with better 3D perspective
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 80, 120);
    camera.lookAt(0, 0, 0);

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('formation3D').appendChild(renderer.domElement);

    // Add orbit controls for interactive 3D viewing AFTER renderer is created
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 50;
    controls.maxDistance = 200;
    controls.maxPolarAngle = Math.PI / 2;

    // Add pitch
    createPitch();

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 100, 0);
    scene.add(directionalLight);

    // Initial formation
    createFormation('4-4-2').then(() => {
        // Start animation loop after players are created
        animate();
    });
}

function createPitch() {
    // Create football pitch
    const pitchGeometry = new THREE.PlaneGeometry(100, 150);
    const pitchMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x1a472a,
        roughness: 0.8
    });
    const pitch = new THREE.Mesh(pitchGeometry, pitchMaterial);
    pitch.rotation.x = -Math.PI / 2;
    scene.add(pitch);

    // Add pitch lines
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    // Center line
    const centerLine = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-50, 0, 0),
        new THREE.Vector3(50, 0, 0)
    ]);
    scene.add(new THREE.Line(centerLine, lineMaterial));
}

function createPlayerSprite(playerData) {
    // Create canvas for player info
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 320; // Increased height for position title
    const context = canvas.getContext('2d');

    // Load player image
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            // Add position title at the top
            context.fillStyle = '#FFD700';
            context.font = 'bold 20px Arial';
            context.textAlign = 'center';
            context.fillText(playerData.position.toUpperCase(), 128, 30);

            // Draw circular player image
            context.save();
            context.beginPath();
            context.arc(128, 150, 60, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();
            context.drawImage(img, 68, 90, 120, 120);
            context.restore();

            // Add golden circle border
            context.strokeStyle = '#FFD700';
            context.lineWidth = 3;
            context.beginPath();
            context.arc(128, 150, 60, 0, Math.PI * 2, true);
            context.stroke();

            // Add jersey number
            context.fillStyle = '#FFD700';
            context.font = 'bold 36px Arial';
            context.textAlign = 'center';
            context.fillText('#' + playerData.number, 128, 250);

            // Add player name
            context.font = 'bold 24px Arial';
            context.fillText(playerData.name, 128, 280);

            // Create sprite with glow effect
            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({ 
                map: texture,
                transparent: true,
                blending: THREE.AdditiveBlending
            });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(12, 15, 1); // Larger scale for better visibility
            resolve(sprite);
        };
        img.src = playerData.image;
    });
}

async function createFormation(formation) {
    // Clear existing players
    players.forEach(player => scene.remove(player));
    players = [];

    // Parse formation
    const rows = formation.split('-').map(Number);
    
    // Create goalkeeper
    const goalkeeperData = teamPlayers.find(p => p.position === "Goalkeeper");
    if (goalkeeperData) {
        const goalkeeper = await createPlayerSprite(goalkeeperData);
        goalkeeper.position.set(0, 5, -65);
        scene.add(goalkeeper);
        players.push(goalkeeper);
    }

    // Add outfield players based on formation
    let zPos = -45;
    let playerIndex = 1; // Skip goalkeeper
    
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const playersInRow = rows[rowIndex];
        const spacing = 80 / (playersInRow + 1);
        
        for(let i = 1; i <= playersInRow; i++) {
            if (playerIndex < teamPlayers.length) {
                const playerSprite = await createPlayerSprite(teamPlayers[playerIndex]);
                playerSprite.position.set(
                    (i * spacing) - (playersInRow * spacing / 2),
                    5, // Height above ground
                    zPos
                );
                scene.add(playerSprite);
                players.push(playerSprite);
                playerIndex++;
            }
        }
        zPos += 30;
    }
}

let controls; // Declare controls at the top level

function animate() {
    requestAnimationFrame(animate);
    
    // Update controls in animation loop
    controls.update();

    // Add any animations here
    players.forEach(player => {
        // Make sprites always face the camera
        player.quaternion.copy(camera.quaternion);
    });

    renderer.render(scene, camera);
}

async function updateFormation() {
    const formation = document.getElementById('formationSelect').value;
    await createFormation(formation);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Update player positions after resize
    if (scene && players.length > 0) {
        const formation = document.getElementById('formationSelect').value;
        createFormation(formation);
    }
});