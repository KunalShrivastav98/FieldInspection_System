function showDropdown(id) {
    const dropdown = document.getElementById(id + 'Dropdown');
    const otherDropdowns = document.querySelectorAll('.dropdown');

    otherDropdowns.forEach(dd => {
        if (dd !== dropdown) {
            dd.style.display = 'none';
        }
    });

    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', async function() {
    // Placeholder function to fetch and display protocols if needed
    // This function can be replaced with actual fetch logic when necessary
});

async function getAccessToken() {
    const response = await fetch('https://prod-XX.westus.logic.azure.com:443/workflows/YOUR-FLOW-ID/triggers/manual/paths/invoke', {
        method: 'POST'
    });
    const data = await response.json();
    return data.access_token;
}
