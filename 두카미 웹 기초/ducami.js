function addTodo() {

    const input = document.getElementById('todoinput');
    const text = input.value;

    const li = document.createElement('li');

    li.innerHTML = text;

    document.getElementById('todolist').appendChild(li);

    input.value = "";
}
