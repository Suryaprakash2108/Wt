// DOM elements for details modal
const detailsModal = document.getElementById('classmateDetailsModal');
const detailsClose = document.getElementById('detailsClose');
const classmatesTableBody = document.querySelector('#classmatesTable tbody');

// Function to load classmates and display in table
function loadClassmates() {
    const classmates = JSON.parse(localStorage.getItem('slamBook')) || [];

    // Clear the table
    classmatesTableBody.innerHTML = '';

    // Populate the table with classmates
    classmates.forEach((classmate, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="#" class="roll-link" data-index="${index}">${classmate.rollNo}</a></td>
        `;
        classmatesTableBody.appendChild(row);
    });

    // Add click event listener to roll numbers
    document.querySelectorAll('.roll-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const index = e.target.getAttribute('data-index');
            showClassmateDetails(index);
        });
    });
}

// Function to display classmate details in a modal
function showClassmateDetails(index) {
    const classmates = JSON.parse(localStorage.getItem('slamBook')) || [];
    const classmate = classmates[index];

    if (classmate) {
        // Populate the modal with classmate details
        document.getElementById('detailsName').textContent = `Name: ${classmate.name}`;
        document.getElementById('detailsNickname').textContent = `Nickname: ${classmate.nickname}`;
        document.getElementById('detailsDob').textContent = `DOB: ${classmate.dob}`;
        document.getElementById('detailsRollNo').textContent = `Roll No: ${classmate.rollNo}`;
        document.getElementById('detailsOccupation').textContent = `Occupation: ${classmate.occupation}`;
        document.getElementById('detailsEmail').textContent = `Email: ${classmate.email}`;
        document.getElementById('detailsPhone').textContent = `Phone: ${classmate.phone}`;
        document.getElementById('detailsHobbies').textContent = `Hobbies: ${classmate.hobbies}`;
        document.getElementById('detailsFavFood').textContent = `Favorite Food: ${classmate.favFood}`;
        document.getElementById('detailsQuote').textContent = `Favorite Quote: ${classmate.quote}`;
        document.getElementById('detailsProfileImage').src = classmate.profilePhoto;

        // Show the modal
        detailsModal.style.display = 'block';
    }
}

// Close the details modal
detailsClose.addEventListener('click', () => {
    detailsModal.style.display = 'none';
});

// Load classmates when the page is loaded
document.addEventListener('DOMContentLoaded', loadClassmates);
