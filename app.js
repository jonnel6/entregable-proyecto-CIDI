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

    // Agregar funcionalidad para marcar como completada - DESARROLLADOR 1
    li.addEventListener('click', function() {
      li.classList.toggle('completed'); // Alterna la clase 'completed'
    });

    // Limpiar el input
    taskInput.value = '';
  }
});
