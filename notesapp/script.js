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

document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');

    // Function to add a new task
    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const newTaskText = todoInput.value.trim();
            if (newTaskText) {
                const newTask = document.createElement('li');
                newTask.textContent = newTaskText;
                newTask.className = 'task-text';

                // Add event listener to make task text editable on click
                newTask.addEventListener('click', () => makeEditable(newTask));

                todoList.appendChild(newTask);
                todoInput.value = ''; // Clear the input field
            }
        }
    });

    // Function to make a task text editable
    function makeEditable(task) {
        const originalText = task.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = originalText;
        input.className = 'task-edit-input';

        // Replace task text with input field
        task.replaceWith(input);
        input.focus();

        // Save changes when input loses focus or user presses Enter
        input.addEventListener('blur', () => saveChanges(input, task));
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                saveChanges(input, task);
            }
        });
    }

    // Function to save changes made to a task
    function saveChanges(input, task) {
        const newText = input.value.trim();
        if (newText) {
            task.textContent = newText;
            input.replaceWith(task);
        } else {
            // Remove the task if the input is empty
            input.remove();
        }
    }

    // Make existing tasks editable on click
    document.querySelectorAll('#todo-list li').forEach(task => {
        task.addEventListener('click', () => makeEditable(task));
    });
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

// Function to make an element editable
function makeEditable(element) {
    element.contentEditable = "true";
    element.style.border = "none"; // Ensure no border appears
    element.style.outline = "none"; // Remove outline when focused
    element.style.backgroundColor = "transparent"; // Transparent background
    element.style.display = "inline"; // Maintain inline display

    element.focus();

    // Function to save changes
    const saveChanges = () => {
        const updatedContent = element.textContent.trim();
        if (updatedContent !== '') {
            console.log("Saved content:", updatedContent);
            // Example: localStorage.setItem(element.id, updatedContent);
        }
        element.contentEditable = "false";
    };

    // Save changes when the input loses focus
    element.addEventListener('blur', saveChanges);

    // Save changes when the user presses Enter
    element.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            saveChanges(); // Call saveChanges function
            event.preventDefault(); // Prevent line break
        }
    });
}

// Function to add a new task
function addNewTask(taskDescription) {
    // Create new task element
    const newTask = document.createElement('div');
    newTask.className = 'editable-task';
    newTask.textContent = taskDescription;

    // Append new task to the task list
    document.getElementById('task-list').appendChild(newTask);

    // Make new task editable on click
    newTask.addEventListener('click', function() {
        makeEditable(this);
    });
}

// Make the paragraph editable on click
document.getElementById('editable-paragraph').addEventListener('click', function() {
    makeEditable(this);
});

// Initialize existing tasks to be editable
document.querySelectorAll('.editable-task').forEach(task => {
    task.addEventListener('click', function() {
        makeEditable(this);
    });
});

// Handle adding new tasks
document.getElementById('add-task-button').addEventListener('click', () => {
    const taskInput = document.getElementById('new-task-input');
    taskInput.style.display = 'block'; // Show input field
    taskInput.focus(); // Focus input field

    // Handle Enter key press to add task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskDescription = taskInput.value.trim();
            if (taskDescription) {
                addNewTask(taskDescription);
                taskInput.value = ''; // Clear input field
                taskInput.style.display = 'none'; // Hide input field
            }
            event.preventDefault(); // Prevent line break
        }
    });
});


// document.getElementById("voiceToTextBTN").addEventListener("click", function(event) {
//     // Prevent the default action of the link
//     event.preventDefault();

//     // Open a new window
//     window.open("./voiceToText/index.html", "_blank", "width=600,height=400");
// });

// document.getElementById("calendar").addEventListener("click", function(event) {
//     // Prevent the default action of the link
//     event.preventDefault();

//     // Open a new window
//     window.open("./calendar2/cal2.html", "_blank", "width=600,height=400");
// });

// document.getElementById("voiceToTextBTN").addEventListener("click", function(event) {
//     // Prevent the default action of the link
//     event.preventDefault();

//     // Fetch the content of the voice-to-text page
//     fetch('./voiceToText/index.html')
//         .then(response => response.text())
//         .then(data => {
//             // Inject the fetched content into the userSpace div
//             document.getElementById("userspace").innerHTML = data;
//         })
//         .catch(error => {
//             console.error('Error fetching the voice-to-text page:', error);
//         });
// });

// Variable to track the state of the calendar
let isCalendarVisible = false;

document.getElementById("calendar").addEventListener("click", function(event) {
    // Prevent the default action of the link
    event.preventDefault();

    // Get the userSpace element
    const userSpace = document.getElementById("userspace");

    if (isCalendarVisible) {
        // Hide the calendar
        userSpace.innerHTML = ''; // Clear the content
        isCalendarVisible = false; // Update state
    } else {
        // Show the calendar
        fetch('./calendar2/cal2.html')
            .then(response => response.text())
            .then(html => {
                // Inject the fetched HTML content into the userSpace div
                userSpace.innerHTML = html;

                // Optionally, dynamically load CSS and JS files
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = './calendar2/cal2.css';
                document.head.appendChild(link);

                const script = document.createElement('script');
                script.src = './calendar2/cal2.js';
                document.body.appendChild(script);
            })
            .catch(error => {
                console.error('Error fetching the calendar page:', error);
            });

        isCalendarVisible = true; // Update state
    }
});


let isVoiceVisible = false; // Tracks visibility of the voice-to-text interface
let originalContent = ''; // Variable to store the original content

document.getElementById("voiceToTextBTN").addEventListener("click", function(event) {
    event.preventDefault();

    const userSpace = document.getElementById("userspace");

    if (isVoiceVisible) {
        // Restore the original content (the notes section)
        userSpace.innerHTML = originalContent;
        isVoiceVisible = false; // Update state

        // Clean up dynamically added resources
        document.querySelectorAll('link[href*="voice.css"]').forEach(link => link.remove());
        document.querySelectorAll('script[src*="languages.js"], script[src*="scriptt.js"]').forEach(script => script.remove());

    } else {
        // Store the original content if it hasn't been stored yet
        if (!originalContent) {
            originalContent = userSpace.innerHTML;
        }

        // Show a loading indicator
        userSpace.innerHTML = '<p>Loading...</p>';

        // Fetch the voice-to-text interface
        fetch('./voiceToText/index.html')
            .then(response => response.text())
            .then(html => {
                // Inject the fetched HTML content into the userSpace div
                userSpace.innerHTML = html;

                // Dynamically load CSS and JS files if not already added
                if (!document.querySelector('link[href="./voiceToText/voice.css"]')) {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = './voiceToText/voice.css';
                    document.head.appendChild(link);
                }

                if (!document.querySelector('script[src="./voiceToText/languages.js"]')) {
                    const script1 = document.createElement('script');
                    script1.src = './voiceToText/languages.js';
                    document.body.appendChild(script1);
                }

                if (!document.querySelector('script[src="./voiceToText/scriptt.js"]')) {
                    const script2 = document.createElement('script');
                    script2.src = './voiceToText/scriptt.js';
                    document.body.appendChild(script2);
                }
            })
            .catch(error => {
                console.error('Error fetching the voice-to-text page:', error);
                userSpace.innerHTML = '<p>Error loading content. Please try again later.</p>';
            });

        isVoiceVisible = true; // Update state
    }
});
