const draggableItems = document.querySelectorAll('.draggable');
const droppableArea = document.querySelector('.droppable');
const successMessage = document.getElementById('successMessage');

let draggedItem = null;

// Event listeners for draggable items
draggableItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

// Event listeners for droppable area
droppableArea.addEventListener('dragenter', dragEnter);
droppableArea.addEventListener('dragover', dragOver);
droppableArea.addEventListener('dragleave', dragLeave);
droppableArea.addEventListener('drop', drop);

// Drag and Drop functions
function dragStart() {
    draggedItem = this;
    this.classList.add('dragging');
}

function dragEnd() {
    draggedItem = null;
    this.classList.remove('dragging');
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('highlight');
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave() {
    this.classList.remove('highlight');
}

function drop() {
    this.classList.remove('highlight');
    this.appendChild(draggedItem);
    showSuccessMessage();
}

// Reset function
function reset() {
    location.reload();
}

// Show success message
function showSuccessMessage() {
    successMessage.style.display = 'block';
    successMessage.textContent = 'Item added to the second container.';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 2000);
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}