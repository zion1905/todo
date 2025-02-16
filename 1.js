let container=document.getElementById('submit')
container.addEventListener('click', function() {
    // input
    const taskInput = document.getElementById('content');
    const taskText = taskInput.value.trim();
  // ui
    const taskList = document.getElementById('appen');
  
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
   // delete button create 
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

   taskInput.value = '';
  }); 