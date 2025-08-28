// Referencia a los botones de filtro
let showAllBtn = document.getElementById('showAllBtn');
let showPendingBtn = document.getElementById('showPendingBtn');
let showCompletedBtn = document.getElementById('showCompletedBtn');

let taskList = document.getElementById('taskList');

// Agregar tarea
document.getElementById('addTaskBtn').addEventListener('click', function() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value;

  if (taskText.trim() !== '') {
    let li = document.createElement('li');
    li.textContent = taskText;

    // Agregar funcionalidad para marcar como completada
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    // Agregar la tarea a la lista
    taskList.appendChild(li);

    // Limpiar el input
    taskInput.value = '';
  }
});

// Filtrar tareas pendientes
showPendingBtn.addEventListener('click', function() {
  let tasks = taskList.getElementsByTagName('li');
  for (let task of tasks) {
    if (task.classList.contains('completed')) {
      task.style.display = 'none';
    } else {
      task.style.display = 'block';
    }
  }
});

// Filtrar tareas completadas
showCompletedBtn.addEventListener('click', function() {
  let tasks = taskList.getElementsByTagName('li');
  for (let task of tasks) {
    if (task.classList.contains('completed')) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  }
});

// Mostrar todas las tareas
showAllBtn.addEventListener('click', function() {
  let tasks = taskList.getElementsByTagName('li');
  for (let task of tasks) {
    task.style.display = 'block';
  }
});
