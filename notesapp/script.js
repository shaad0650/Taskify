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
