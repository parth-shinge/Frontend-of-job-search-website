document.getElementById('committee-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('committee-name').value;
    const description = document.getElementById('committee-description').value;
    const head = document.getElementById('committee-head').value;

    const data = { name, description, head };

    // Save to Local Storage
    localStorage.setItem('clubCommittee', JSON.stringify(data));

    const output = document.getElementById('committee-output');
    output.innerHTML = `
        <h2>Committee Updated</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Head:</strong> ${head}</p>
    `;
});

// Retrieve and display stored data on page load
window.addEventListener('load', function () {
    const storedData = JSON.parse(localStorage.getItem('clubCommittee'));
    if (storedData) {
        const output = document.getElementById('committee-output');
        output.innerHTML = `
            <h2>Previously Updated Committee</h2>
            <p><strong>Name:</strong> ${storedData.name}</p>
            <p><strong>Description:</strong> ${storedData.description}</p>
            <p><strong>Head:</strong> ${storedData.head}</p>
        `;
    }
});
