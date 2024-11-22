const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click',   
 () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const   
 newListItem = document.createElement('li');
        newListItem.textContent = taskText;
        taskList.appendChild(newListItem);
        taskInput.value = '';
    } else {
        alert('Por favor, digite uma tarefa.');
    }
});