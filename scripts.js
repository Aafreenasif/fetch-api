document.addEventListener('DOMContentLoaded', () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/users';

    let employees = [];

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            employees = data; // Directly assign the data to employees
            console.log('Employee data fetched:', employees);
        })
        .catch(error => console.error('Error fetching employee data:', error));

    const searchForm = document.getElementById('searchForm');
    const searchResult = document.getElementById('searchResult');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const searchName = document.getElementById('searchName').value.toLowerCase();
        const employee = employees.find(emp => emp.name.toLowerCase().includes(searchName));

        if (employee) {
            searchResult.innerHTML = `
                <h3>Employee Details</h3>
                <p><strong>Name:</strong> ${employee.name}</p>
                <p><strong>Email:</strong> ${employee.email}</p>
            `;

            console.log('Employee Found:', [employee]);
        } else {
            searchResult.innerHTML = '<p>Employee not found!</p>';
            console.log('Employee not found.');
        }
    });
});
