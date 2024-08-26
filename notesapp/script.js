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

    // Create the container for the three dots and menu
    const threeDotsContainer = document.createElement("div");
    threeDotsContainer.classList.add("threedots22");

    const threeDotsIcon = document.createElement("i");
    threeDotsIcon.classList.add("fa-solid", "fa-ellipsis-vertical", "threedots-icon");
    threeDotsIcon.style.cursor = "pointer";
    threeDotsContainer.appendChild(threeDotsIcon);

    // Create the menu that appears when the three dots are clicked
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.style.display = "none";

    const menuList = document.createElement("ul");

    const editOption = document.createElement("li");
    editOption.textContent = "Edit";
    editOption.addEventListener("click", function() {
        editElement(noteTitle);
        editElement(noteContent);
    });

    const deleteOption = document.createElement("li");
    deleteOption.textContent = "Delete";
    deleteOption.addEventListener("click", function() {
        newNoteCard.remove();
    });

    menuList.appendChild(editOption);
    menuList.appendChild(deleteOption);
    menu.appendChild(menuList);

    // Add event listener to toggle the menu display
    threeDotsIcon.addEventListener("click", function() {
        menu.style.display = menu.style.display === "none" ? "block" : "none";
    });

    // Append three dots and menu to the note card
    newNoteCard.appendChild(threeDotsContainer);
    newNoteCard.appendChild(menu);

    // Create and append the note title and content
    const noteTitle = document.createElement("h2");
    noteTitle.textContent = "New Note";
    newNoteCard.appendChild(noteTitle);

    const noteContent = document.createElement("p");
    noteContent.textContent = "This is a new note. Edit this text.";
    newNoteCard.appendChild(noteContent);

    // Add the new note card to the notes list
    document.querySelector(".notes-list").appendChild(newNoteCard);

    // Add event listeners to the new elements for editing
    noteTitle.addEventListener('click', function() {
        editElement(noteTitle);
    });

    noteContent.addEventListener('click', function() {
        editElement(noteContent);
    });
});

function editElement(element) {
    const currentText = element.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentText;
    input.style.width = '100%';
    input.style.boxSizing = 'border-box';

    input.addEventListener('blur', function() {
        element.textContent = input.value;
        input.replaceWith(element);
    });

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            element.textContent = input.value;
            input.replaceWith(element);
        }
    });

    element.replaceWith(input);
    input.focus();
}



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


// Function to add a new task
// script.js

// Function to add a new task
// Function to add a new task
// Function to add a new task
function addTask() {
    const input = document.getElementById('todo-input');
    const newTaskText = input.value.trim();

    if (newTaskText) {
        const todoList = document.getElementById('todo-list');
        const newTask = document.createElement('li');

        // Create a span to hold the task text
        const taskText = document.createElement('span');
        taskText.textContent = newTaskText;
        taskText.className = 'task-text';

        // Add an event listener to make the task text editable on click
        taskText.addEventListener('click', () => makeEditable(taskText));

        newTask.appendChild(taskText);
        todoList.appendChild(newTask);
        input.value = ''; // Clear the input field
    }
}

// Function to make a task text editable
function makeEditable(taskText) {
    const originalText = taskText.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalText;
    input.className = 'task-edit-input';

    // Replace task text with input field
    taskText.parentNode.replaceChild(input, taskText);
    input.focus();

    // Save changes when the input loses focus or user presses Enter
    input.addEventListener('blur', () => saveChanges(input, taskText));
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            saveChanges(input, taskText);
        }
    });
}

// Function to save changes made to a task
function saveChanges(input, taskText) {
    const newText = input.value.trim();

    if (newText) {
        taskText.textContent = newText;
        input.parentNode.replaceChild(taskText, input);
    } else {
        // If the new text is empty, just replace the input with the original text
        taskText.textContent = input.value;
        input.parentNode.replaceChild(taskText, input);
    }
}

// Event listener for the 'Add Task' button
document.getElementById('add-todo-btn').addEventListener('click', addTask);

// Event listener for pressing 'Enter' key to add a new task
document.getElementById('todo-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});




