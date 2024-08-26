// Handle the sign-in process
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example: Store the email in local storage
    localStorage.setItem('userEmail', email);

    // Redirect to notes.html
    window.location.href = 'notes.html';
});

if (typeof(Storage) !== "undefined") {
    const userEmail = localStorage.getItem('userEmail');
    console.log("Logged in as:", userEmail);
} else {
    console.error("localStorage is not supported in this browser.");
}


// Handle the sign-in process
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example: Store the email in session storage
    sessionStorage.setItem('userEmail', email);

    // Redirect to notes.html
    window.location.href = 'notes.html';
});

const userEmail = sessionStorage.getItem('userEmail');
console.log("Logged in as:", userEmail);

// Handle the sign-in process
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example: Send data to the server
    fetch('https://yourserver.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data (e.g., save token, user ID)
        localStorage.setItem('userToken', data.token);
        // Redirect to notes.html
        window.location.href = 'notes.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

const userToken = localStorage.getItem('userToken');
console.log("User token:", userToken);
