// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');

    const searchData = [
        'Home', 'Formation', 'Players', 'Gallery', 'Inventory', 'Register',
        // Add more searchable items here
    ];

    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        searchSuggestions.innerHTML = '';
        
        if (value.length > 0) {
            const matches = searchData.filter(item => 
                item.toLowerCase().includes(value)
            );

            matches.forEach(match => {
                const div = document.createElement('div');
                div.textContent = match;
                div.addEventListener('click', () => {
                    searchInput.value = match;
                    searchSuggestions.style.display = 'none';
                });
                searchSuggestions.appendChild(div);
            });

            searchSuggestions.style.display = matches.length ? 'block' : 'none';
        } else {
            searchSuggestions.style.display = 'none';
        }
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target)) {
            searchSuggestions.style.display = 'none';
        }
    });
});