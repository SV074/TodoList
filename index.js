let btnAddtask = document.querySelector('.add-task');
let inputTask = document.querySelector('.input-task');
let list = document.getElementById('tasks');



function addListTask() {
    const newTask = document.createElement('li');
    newTask.className = "new-task";
    newTask.innerHTML = inputTask.value;
    list.prepend(newTask);
    const span = document.createElement('span');
    const cross = document.createTextNode('\u00D7');
    cross.className = "close";
    span.appendChild(cross);
    newTask.appendChild(span);
    span.addEventListener('click', () => {
        newTask.style.display = "none";
    });
    newTask.addEventListener('click', () => {
        newTask.classList.toggle('active');
        
    })
};

btnAddtask.addEventListener('click', () => {
    addListTask();

});





