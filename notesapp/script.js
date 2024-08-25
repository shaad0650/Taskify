function toggleSpotify() {
    var spotifyPlayer = document.getElementById('spotify-player');
    if (spotifyPlayer.style.display === "none" || spotifyPlayer.style.display === "") {
        spotifyPlayer.style.display = "block";
    } else {
        spotifyPlayer.style.display = "none";
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}

document.getElementById("pluss").addEventListener("click", function() {
    const newNoteCard = document.createElement("div");
    newNoteCard.classList.add("note-card");

    const noteTitle = document.createElement("h2");
    noteTitle.textContent = "New Note";
    newNoteCard.appendChild(noteTitle);

    const noteContent = document.createElement("p");
    noteContent.textContent = "This is a new note. Edit this text.";
    newNoteCard.appendChild(noteContent);

    document.querySelector(".notes-list").appendChild(newNoteCard);
});

const spotifyPlayer = document.querySelector('.music');

let isDragging = false;
let startX, startY, initialX, initialY;

spotifyPlayer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - initialX;
    startY = e.clientY - initialY;
    spotifyPlayer.style.cursor = 'grabbing';
    e.preventDefault();
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    spotifyPlayer.style.cursor = 'move';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        e.preventDefault();
        
        initialX = e.clientX - startX;
        initialY = e.clientY - startY;

        spotifyPlayer.style.transform = `translate(${initialX}px, ${initialY}px)`;
    }
});
