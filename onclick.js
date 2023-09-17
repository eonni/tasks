const body = document.querySelector('body');
const commentsection = document.querySelector('.todolist');

function changeColor() {
    event.preventDefault(); 
    const color = document.querySelector('input[name="color"]').value;
    const changebackground = document.querySelector('input[value="background"]');
    changebackground.checked ? body.style.backgroundColor = color : body.style.color = color;
    const containertag = document.createElement("div");
    const tag1 = document.createElement("p");
    const tag2 = document.createElement("input");
    tag2.setAttribute("type", "checkbox");
    const tasktext = document.querySelector('textarea[name="comment"]').value;
    const task = document.createTextNode(tasktext);
    tag1.appendChild(task);
    containertag.appendChild(tag1);
    containertag.appendChild(tag2);
    commentsection.appendChild(containertag);
}