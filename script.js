document.getElementById('more-users').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const profiles = data.results;
            updateProfileCards(profiles);
            updateProfileTable(profiles);
        })
        .catch(error => console.error('Error fetching users:', error));
}

function updateProfileCards(profiles) {
    const profileCardsContainer = document.getElementById('profile-cards');
    profileCardsContainer.innerHTML = '';
    profiles.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${profile.picture.medium}" alt="${profile.name.first}">
            <h3>${profile.name.first} ${profile.name.last}</h3>
            <p>${profile.email}</p>
        `;
        profileCardsContainer.appendChild(card);
    });
}

function updateProfileTable(profiles) {
    const tableBody = document.querySelector('#profile-table tbody');
    tableBody.innerHTML = '';
    profiles.forEach(profile => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${profile.name.first} ${profile.name.last}</td>
            <td>${profile.email}</td>
        `;
        tableBody.appendChild(row);
    });
}
