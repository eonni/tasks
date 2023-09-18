const body = document.querySelector('body');


function changeColor() {
    const colorinput = document.querySelector('input[name="color"]').value;
    const bgselection = document.querySelector('input[value="background"]');
    bgselection.checked ? body.style.backgroundColor = colorinput : body.style.color = colorinput;
}

function addTask() {
    const todolist = document.querySelector('.todolist');
    const todochild = document.createElement("div");

    const selectElement = document.createElement("select");
    const optionValues = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "black", "white"];
    for (let i = 0; i < selectOptions.length; i++) {
        const optionElement = document.todolist.createElement("option");
        const optionValue = optionValues[i];
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

function deleteTask() {
    const todochildren = todolist.querySelectorAll("div");
    for (let i = 0; i < todochildren.length; i++) {
        const todochild = todochildren[i];
        const checkboxselection = todochild.querySelector('input');
        checkboxselection.checked ? todochild.remove() : null;
    }
}