document.getElementById('addTaskBtn').addEventListener('click', function() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value;

  if (taskText.trim() !== '') {
    let taskList = document.getElementById('taskList');

    // Crear un nuevo elemento de lista
    let li = document.createElement('li');
    li.textContent = taskText;

    // Crear el botón de eliminar
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');

    // Agregar evento para eliminar la tarea
    deleteBtn.addEventListener('click', function(e) {
      e.stopPropagation(); // Evitar que el click también active el 'click' de completar
      li.remove(); // Elimina la tarea
    });

    // Agregar el botón de eliminar a la tarea
    li.appendChild(deleteBtn);

    // Agregar la tarea a la lista
    taskList.appendChild(li);

    // Limpiar el input
    taskInput.value = '';
  }
});
