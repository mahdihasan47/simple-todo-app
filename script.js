// Get DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

 // Add task on button click

 addBtn.addEventListener('click', addTask);

 taskInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addTask();
    }
 });

 function addTask() {
    const taskText = taskInput.value.trim();
    
    if(taskText === ''){
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');

    const taskLeft = document.createElement('div');

    taskLeft.className = 'task-left';

    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';

    const span = document.createElement('span');

    span.textContent = taskText;


    checkbox.addEventListener('change', () => {
        span.classList.toggle('completed', checkbox.checked);
    });

    taskLeft.appendChild(checkbox);

    taskLeft.appendChild(span);

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = '❌';

    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(taskLeft);

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = '';
 }