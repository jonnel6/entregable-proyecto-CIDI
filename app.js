document.getElementById('addTaskBtn').addEventListener('click', function() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value;

  if (taskText.trim() !== '') {
    let taskList = document.getElementById('taskList');

    // Crear un nuevo elemento de lista
    let li = document.createElement('li');
    li.textContent = taskText;

    // Agregar la tarea a la lista
    taskList.appendChild(li);

    // Limpiar el input
    taskInput.value = '';
  }
});
