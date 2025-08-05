document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(removeBtn);

  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
  taskInput.focus();
}
