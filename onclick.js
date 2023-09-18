const body = document.querySelector('body');
const todolist = document.querySelector('.todolist');

function changeColor() {
    const colorinput = document.querySelector('input[name="color"]').value;
    const bgselection = document.querySelector('input[value="background"]');
    bgselection.checked ? body.style.backgroundColor = colorinput : body.style.color = colorinput;
}

function addTask() {
    const todochild= document.createElement("div");

    const tag1 = document.createElement("p");
    const tag2 = document.createElement("input");
    tag2.setAttribute("type", "checkbox");
    tag2.setAttribute("name", "todo");

    const tasktext = document.querySelector('textarea[name="comment"]').value;
    const task = document.createTextNode(tasktext);
    tag1.appendChild(task);

    todochild.appendChild(tag1);
    todochild.appendChild(tag2);
    todolist.appendChild(todochild); 
}

function deleteTask() {
    const todochildren = todolist.querySelectorAll("div");
    for (let i = 0; i < todochildren.length; i++) {
        const todochild = todochildren[i];
        const checkboxselection = todochild.querySelector('input');
        checkboxselection.checked ? todochild.remove() : null;
    }
}