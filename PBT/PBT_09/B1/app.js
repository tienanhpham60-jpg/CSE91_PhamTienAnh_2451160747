const todoForm = document.getElementById('todo-form');
const newTodoInput = document.getElementById('new-todo');
const todoList = document.getElementById('todo-list');
const todoCount = document.getElementById('todo-count');
const filtersContainer = document.querySelector('.filters');
const clearCompletedBtn = document.getElementById('clear-completed');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodoElement(todo) {
    const li = document.createElement('li');
    li.setAttribute('data-id', todo.id);
    if (todo.completed) {
        li.classList.add('completed');
    }

    const viewDiv = document.createElement('div');
    viewDiv.className = 'view';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'toggle';
    checkbox.checked = todo.completed;

    const customSpan = document.createElement('span');
    customSpan.className = 'custom-checkbox';

    const label = document.createElement('label');
    label.textContent = todo.text;

    const destroyBtn = document.createElement('button');
    destroyBtn.className = 'destroy';
    destroyBtn.textContent = '❌';

    viewDiv.appendChild(checkbox);
    viewDiv.appendChild(customSpan);
    viewDiv.appendChild(label);
    viewDiv.appendChild(destroyBtn);

    const editInput = document.createElement('input');
    editInput.className = 'edit';
    editInput.value = todo.text;

    li.appendChild(viewDiv);
    li.appendChild(editInput);

    return li;
}

function renderTodos() {
    todoList.innerHTML = '';
    
    let filteredTodos = todos;
    if (currentFilter === 'active') {
        filteredTodos = todos.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(t => t.completed);
    }

    filteredTodos.forEach(todo => {
        const todoLi = createTodoElement(todo);
        todoList.appendChild(todoLi);
    });

    const activeCount = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
}

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = newTodoInput.value.trim();
    if (text === '') return;

    const newTodo = {
        id: Date.now().toString(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    saveTodos();
    newTodoInput.value = '';
    renderTodos();
});

todoList.addEventListener('click', function(e) {
    const li = e.target.closest('li');
    if (!li) return;
    const todoId = li.getAttribute('data-id');

    if (e.target.classList.contains('toggle')) {
        const todo = todos.find(t => t.id === todoId);
        if (todo) {
            todo.completed = e.target.checked;
            saveTodos();
            renderTodos();
        }
    }

    if (e.target.classList.contains('destroy')) {
        todos = todos.filter(t => t.id !== todoId);
        saveTodos();
        renderTodos();
    }
});

todoList.addEventListener('dblclick', function(e) {
    if (e.target.tagName === 'LABEL') {
        const li = e.target.closest('li');
        li.classList.add('editing');
        const editInput = li.querySelector('.edit');
        editInput.focus();
        editInput.setSelectionRange(editInput.value.length, editInput.value.length);
    }
});

todoList.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('edit')) {
        const li = e.target.closest('li');
        const todoId = li.getAttribute('data-id');

        if (e.key === 'Enter') {
            const newText = e.target.value.trim();
            if (newText !== '') {
                const todo = todos.find(t => t.id === todoId);
                if (todo) todo.text = newText;
                saveTodos();
            } else {
                todos = todos.filter(t => t.id !== todoId);
                saveTodos();
            }
            renderTodos();
        } else if (e.key === 'Escape') {
            renderTodos();
        }
    }
});

todoList.addEventListener('focusout', function(e) {
    if (e.target.classList.contains('edit')) {
        renderTodos();
    }
}, true);

filtersContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
        currentFilter = e.target.getAttribute('data-filter');
        renderTodos();
    }
});

clearCompletedBtn.addEventListener('click', function() {
    todos = todos.filter(t => !t.completed);
    saveTodos();
    renderTodos();
});

renderTodos();