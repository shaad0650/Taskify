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

