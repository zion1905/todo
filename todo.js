const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const scoreDisplay = document.getElementById('score');

    let score = 0;

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }

      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="completeBtn">Complete</button>
      `;

      taskList.appendChild(li);
      taskInput.value = '';

      const completeBtn = li.querySelector('.completeBtn');
      completeBtn.addEventListener('click', () => completeTask(li));
    }

    function completeTask(taskItem) {
      const taskText = taskItem.querySelector('span');
      if (!taskText.classList.contains('complete')) {
        taskText.classList.add('complete');
        score += 10;
        scoreDisplay.textContent = score;
      }
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });