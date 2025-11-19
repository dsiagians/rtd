
// Sample inventory data
let inventory = [
    {
        id: 1,
        name: 'Match Ball',
        category: 'equipment',
        quantity: 3,
        condition: 'new'
    },
    {
        name: 'jersey',
        category: 'uniform',
        quantity: 12,
        condition: 'used'
    },
    // Add more items here
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize inventory display
    updateInventoryTable();

    // Add Item Form
    const addItemForm = document.getElementById('addItemForm');
    addItemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newItem = {
            id: inventory.length + 1,
            name: document.getElementById('itemName').value,
            category: document.getElementById('itemCategory').value,
            quantity: parseInt(document.getElementById('quantity').value),
            condition: document.getElementById('itemCondition').value
        };

        inventory.push(newItem);
        updateInventoryTable();
        addItemForm.reset();
        alert('Item added successfully!');
    });

    // Category Filter
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.addEventListener('change', updateInventoryTable);

    // Search Filter
    const searchInput = document.getElementById('searchInventory');
    searchInput.addEventListener('input', updateInventoryTable);
});

function updateInventoryTable() {
    const tbody = document.querySelector('#inventoryTable tbody');
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchQuery = document.getElementById('searchInventory').value.toLowerCase();

    // Filter inventory
    let filteredInventory = inventory.filter(item => {
        const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    // Update table
    tbody.innerHTML = '';
    filteredInventory.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
            <td>${item.condition}</td>
            <td>
                <button onclick="editItem(${item.id})">Edit</button>
                <button onclick="deleteItem(${item.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editItem(id) {
    const item = inventory.find(item => item.id === id);
    if (!item) return;

    const newQuantity = prompt(`Enter new quantity for ${item.name}:`, item.quantity);
    if (newQuantity !== null) {
        item.quantity = parseInt(newQuantity);
        updateInventoryTable();
    }
}

function deleteItem(id) {
    if (confirm('Are you sure you want to delete this item?')) {
        inventory = inventory.filter(item => item.id !== id);
        updateInventoryTable();
    }
}
