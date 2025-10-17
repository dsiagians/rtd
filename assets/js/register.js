document.addEventListener('DOMContentLoaded', function() {
    // User Registration Form
    const userForm = document.getElementById('userRegistrationForm');
    userForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        // Here you would typically send this data to a server
        console.log('User Registration:', userData);
        alert('User registration successful!');
        userForm.reset();
    });

    // Player Registration Form
    const playerForm = document.getElementById('playerRegistrationForm');
    playerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const playerData = {
            name: document.getElementById('playerName').value,
            position: document.getElementById('position').value,
            jerseyNumber: document.getElementById('jerseyNumber').value,
            photo: document.getElementById('playerPhoto').files[0]
        };

        // Here you would typically send this data to a server
        console.log('Player Registration:', playerData);
        alert('Player registration successful!');
        playerForm.reset();
    });

    // Validate Jersey Number
    const jerseyInput = document.getElementById('jerseyNumber');
    jerseyInput.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (value < 1) {
            this.value = 1;
        } else if (value > 99) {
            this.value = 99;
        }
    });

    // Preview Player Photo
    const photoInput = document.getElementById('playerPhoto');
    photoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Here you could show a preview of the image if desired
                    console.log('Image loaded successfully');
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please select an image file.');
                photoInput.value = '';
            }
        }
    });
});