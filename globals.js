const todolist = document.querySelector('.todolist');
const body = document.querySelector('body');


function addTask() {
    const todochild= document.createElement("div");
    const selectElement = document.createElement("select");
    selectElement.onclick = function() {changeTaskColor()};
    selectElement.setAttribute("id", "colorSelector");
    const optionValues = ["", "red", "orange", "yellow", "green", "blue", "purple", "pink", "black", "white"];
    for (let i = 0; i < optionValues.length; i++) {
        const optionValue = optionValues[i];
        const optionElement = document.createElement("option");
        optionElement.setAttribute("id", "option");
        optionElement.value = optionValue;
        optionElement.textContent = optionValue;
        selectElement.appendChild(optionElement);
    }

    const tag1 = document.createElement("p");
    const tasktext = document.querySelector('textarea[name="comment"]').value;
    const task = document.createTextNode(tasktext);
    tag1.appendChild(task);

    const tag2 = document.createElement("input");
    tag2.setAttribute("type", "checkbox");
    tag2.setAttribute("name", "todo");

    todochild.appendChild(selectElement);
    todochild.appendChild(tag1);
    todochild.appendChild(tag2);
    todolist.appendChild(todochild);
}

function changeTaskColor() {
    const todochildren = todolist.querySelectorAll("div");
    const selectElements = todolist.querySelectorAll("select");
    for (let i = 0; i < todochildren.length; i++) {
        const selectElement = selectElements[i];
        const selectElementColorValue = selectElement.value;
        const todochild = todochildren[i];
        todochild.style.backgroundColor = selectElementColorValue;
    }
}

function deleteTask() {
    const todochildren = todolist.querySelectorAll("div");
    for (let i = 0; i < todochildren.length; i++) {
        const todochild = todochildren[i];
        const checkboxselection = todochild.querySelector('input');
        checkboxselection.checked ? todochild.remove() : null;
    }
}



