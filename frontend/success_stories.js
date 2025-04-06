document.getElementById('success-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('student-name').value;
    const story = document.getElementById('story-description').value;
    const email = document.getElementById('email').value;

    const successStories = JSON.parse(localStorage.getItem('successStories')) || [];
    successStories.push({ name, story, email });

    localStorage.setItem('successStories', JSON.stringify(successStories));

    alert('Success story submitted successfully!');
    e.target.reset();
});

window.addEventListener('DOMContentLoaded', function () {
    const stories = JSON.parse(localStorage.getItem('successStories')) || [];
    const output = document.getElementById('success-output');

    if (stories.length > 0) {
        output.innerHTML = '<h2>Success Stories</h2>';
        stories.forEach((story, index) => {
            output.innerHTML += `
                <p><strong>${index + 1}. Name:</strong> ${story.name}</p>
                <p><strong>Story:</strong> ${story.story}</p>
                <p><strong>Email:</strong> ${story.email}</p>
                <hr>
            `;
        });
    } else {
        output.innerHTML = '<p>No success stories available.</p>';
    }
});

document.getElementById('email-success-stories').addEventListener('click', function () {
    const stories = JSON.parse(localStorage.getItem('successStories')) || [];

    if (stories.length > 0) {
        const emailBody = stories.map(story => `
            Name: ${story.name}\n
            Story: ${story.story}\n
            Email: ${story.email}\n
        `).join('\n');

        // Open default email client with mailto
        window.open(`mailto:radha.kulkarni24@vitpune.com?subject=Success Stories&body=${encodeURIComponent(emailBody)}`);
    } else {
        alert('No success stories to email.');
    }
});
