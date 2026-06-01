const btnOpenForm = document.getElementById('btn-open-form');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelForm = document.getElementById('btn-cancel-form');
const formModal = document.getElementById('form-modal');
const taskForm = document.getElementById('task-form');
const modalTitle = document.getElementById('modal-title');

const inputIdHidden = document.getElementById('task-id-hidden');
const inputTitle = document.getElementById('task-title');
const inputDesc = document.getElementById('task-desc');
const inputDeadline = document.getElementById('task-deadline');
const inputPriority = document.getElementById('task-priority');

const taskListContainer = document.getElementById('task-list-container');
const totalTasksEl = document.getElementById('total-tasks');
const completedTasksEl = document.getElementById('completed-tasks');
const pendingTasksEl = document.getElementById('pending-tasks');
const toastNotification = document.getElementById('toast-notification');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showToast(message) {
    toastNotification.innerText = message;
    toastNotification.classList.remove('hidden');
    setTimeout(() => {
        toastNotification.classList.add('hidden');
    }, 3000);
}

function openModal(mode = 'add') {
    formModal.classList.remove('hidden');
    if (mode === 'add') {
        modalTitle.innerText = "Thêm Công Việc Mới";
        taskForm.reset();
        inputIdHidden.value = "";
    } else if (mode === 'edit') {
        modalTitle.innerText = "Cập Nhật Công Việc";
    }
}

function closeModal() {
    formModal.classList.add('hidden');
    taskForm.reset();
}

btnOpenForm.addEventListener('click', () => openModal('add'));
btnCloseModal.addEventListener('click', closeModal);
btnCancelForm.addEventListener('click', closeModal);
formModal.addEventListener('click', (e) => {
    if (e.target === formModal) closeModal();
});

function updateTaskSummary() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    totalTasksEl.innerText = total;
    completedTasksEl.innerText = completed;
    pendingTasksEl.innerText = pending;
}

function renderTasks() {
    taskListContainer.innerHTML = '';

    if (tasks.length === 0) {
        taskListContainer.innerHTML = `
            <div id="empty-state" class="empty-state">
                Chưa có công việc nào được tạo. Hãy lên kế hoạch ngay!
            </div>
        `;
        return;
    }

    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = `task-card ${task.completed ? 'completed' : ''} priority-${task.priority.replace(' ', '-')}`;
        
        card.innerHTML = `
            <div class="task-info">
                <div class="task-title">${task.title}</div>
                <div class="task-desc">${task.desc}</div>
                <div class="task-meta">
                    <span>📅 Hạn: ${task.deadline}</span>
                    <span class="badge badge-priority">🔥 Ưu tiên: ${task.priority}</span>
                </div>
            </div>
            <div class="task-actions">
                <button class="btn btn-toggle" data-id="${task.id}">
                    ${task.completed ? 'Chưa xong' : 'Hoàn thành'}
                </button>
                <button class="btn btn-edit" data-id="${task.id}">Sửa</button>
                <button class="btn btn-danger" data-id="${task.id}">Xóa</button>
            </div>
        `;
        
        taskListContainer.appendChild(card);
    });
}

renderTasks();
updateTaskSummary();



taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = inputTitle.value.trim();
    const desc = inputDesc.value.trim();
    const deadline = inputDeadline.value;
    const priority = inputPriority.value;
    const hiddenId = inputIdHidden.value;

    if (hiddenId === "") {
        const newTask = {
            id: Date.now().toString(),
            title: title,
            desc: desc,
            deadline: deadline,
            priority: priority,
            completed: false
        };

        tasks.push(newTask);
        showToast("Thêm công việc mới thành công!");
    } else {
      
    }

    saveTasks();
    renderTasks();
    updateTaskSummary();
    closeModal();
});