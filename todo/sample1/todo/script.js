(function() {
    'use strict';

    var todoList = document.getElementById('todo-list');
    var todoForm = document.getElementById('todo-form');
    var todoInput = document.querySelector('#todo-form input');

    var todos = JSON.parse(localStorage.getItem("todos")) || [];

    var addItem = function(event) {
        event.preventDefault();
        if (!todoInput.value) return;

        todos.push({text: todoInput.value, done: false})

        render();

        todoInput.value = "";
    };

    todoForm.addEventListener('submit', addItem);

    var render = function() {
        todoList.innerHTML = '';
        todos.forEach(function(todo) {
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            if (todo.done) {
                checkbox.checked = true;
            }
            checkbox.addEventListener('change', function(event) {
                todo.done = event.target.checked;
                render();
            });

            var span = document.createElement('span');
            span.textContent = todo.text;

            var label = document.createElement('label');
            label.appendChild(checkbox);
            label.appendChild(span);

            var deleteButton = document.createElement('button');
            deleteButton.textContent = '削除';
            deleteButton.addEventListener('click', function() {
                var index = todos.indexOf(todo);
                if (todos[index]) {
                    todos.splice(index, 1);
                    render();
                }
            });

            var listItem = document.createElement('li');
            listItem.appendChild(label);
            listItem.appendChild(deleteButton);

            todoList.appendChild(listItem);

        });

        localStorage.setItem("todos", JSON.stringify(todos));
    }

    render();
}());