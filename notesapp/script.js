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


document.addEventListener('DOMContentLoaded', () => {
    const editableHeading = document.getElementById('editable-heading');
    const editableContent = document.getElementById('editable-content');

    function createEditField(text, callback) {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = text;
        input.style.width = '100%';
        input.style.boxSizing = 'border-box';

        input.addEventListener('blur', () => {
            callback(input.value);
            document.body.removeChild(input);
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                callback(input.value);
                document.body.removeChild(input);
            }
        });

        return input;
    }

    editableHeading.addEventListener('click', () => {
        const newInput = createEditField(editableHeading.textContent, (newValue) => {
            editableHeading.textContent = newValue;
        });
        editableHeading.innerHTML = '';
        editableHeading.appendChild(newInput);
        newInput.focus();
    });

    editableContent.addEventListener('click', () => {
        const newInput = createEditField(editableContent.textContent, (newValue) => {
            editableContent.textContent = newValue;
        });
        editableContent.innerHTML = '';
        editableContent.appendChild(newInput);
        newInput.focus();
    });
});


