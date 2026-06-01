const btnOpenForm = document.getElementById('btn-open-form');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelForm = document.getElementById('btn-cancel-form');
const formModal = document.getElementById('form-modal');
const projectForm = document.getElementById('project-form');
const modalTitle = document.getElementById('modal-title');

const inputIdHidden = document.getElementById('project-id-hidden');
const inputTitle = document.getElementById('project-title');
const inputStudent = document.getElementById('student-name');
const inputEmail = document.getElementById('student-email');
const inputPhone = document.getElementById('student-phone');
const inputPassword = document.getElementById('student-password');
const inputMentor = document.getElementById('project-mentor');

const projectTableBody = document.getElementById('project-table-body');
const filterInput = document.getElementById('filter-input');
const btnFilter = document.getElementById('btn-filter');

const totalProjectsEl = document.getElementById('total-projects');
const completedProjectsEl = document.getElementById('completed-projects');
const pendingProjectsEl = document.getElementById('pending-projects');
const toastNotification = document.getElementById('toast-notification');

const defaultProjects = [
    { id: "1", title: "AI Chatbot", student: "Nguyễn Văn A", email: "a@example.com", phone: "0123456789", mentor: "TS. Trần B", status: "Hoàn thành" },
    { id: "2", title: "Web GIS", student: "Trần Thị C", email: "c@example.com", phone: "0987654321", mentor: "ThS. Lê D", status: "Hoàn thành" },
    { id: "3", title: "Mobile App", student: "Phạm Văn E", email: "e@example.com", phone: "0912345678", mentor: "TS. Hoàng F", status: "Đang làm" },
    { id: "4", title: "IoT Smart Home", student: "Đặng Thị G", email: "g@example.com", phone: "0901234567", mentor: "ThS. Nguyễn H", status: "Đang làm" },
    { id: "5", title: "Data Mining", student: "Vũ Văn I", email: "i@example.com", phone: "0998765432", mentor: "TS. Phan J", status: "Hoàn thành" }
];

let projects = JSON.parse(localStorage.getItem('projects')) || defaultProjects;

if (!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
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
        modalTitle.innerText = "Thêm/Sửa Đồ án";
        projectForm.reset();
        inputIdHidden.value = "";
        inputPassword.required = true;
    } else if (mode === 'edit') {
        modalTitle.innerText = "Cập Nhật Đồ Án";
        inputPassword.required = false;
    }
}

function closeModal() {
    formModal.classList.add('hidden');
    projectForm.reset();
}

btnOpenForm.addEventListener('click', () => openModal('add'));
btnCloseModal.addEventListener('click', closeModal);
btnCancelForm.addEventListener('click', closeModal);
formModal.addEventListener('click', (e) => {
    if (e.target === formModal) closeModal();
});

function updateStatistics() {
    const total = projects.length;
    const completed = projects.filter(p => p.status === "Hoàn thành").length;
    const pending = total - completed;

    totalProjectsEl.innerText = total;
    completedProjectsEl.innerText = completed;
    pendingProjectsEl.innerText = pending;
}

function renderProjects(dataToRender = projects) {
    projectTableBody.innerHTML = '';

    if (dataToRender.length === 0) {
        projectTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #666;">Không có dữ liệu phù hợp.</td></tr>`;
        return;
    }

    dataToRender.forEach((project, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${project.title}</strong></td>
            <td>${project.student}</td>
            <td>${project.email}</td>
            <td>${project.phone}</td>
            <td>${project.mentor}</td>
            <td>
                <button class="btn-table btn-edit" data-id="${project.id}">Sửa</button>
                <button class="btn-table btn-delete" data-id="${project.id}">Xóa</button>
            </td>
        `;
        
        projectTableBody.appendChild(row);
    });
}

renderProjects();
updateStatistics();


projectForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = inputTitle.value.trim();
    const student = inputStudent.value.trim();
    const email = inputEmail.value.trim();
    const phone = inputPhone.value.trim();
    const mentor = inputMentor.value;
    const hiddenId = inputIdHidden.value;

    if (hiddenId === "") {
        const newProject = {
            id: Date.now().toString(),
            title: title,
            student: student,
            email: email,
            phone: phone,
            mentor: mentor,
            status: "Đang làm"
        };

        projects.push(newProject);
        showToast("Thêm đồ án mới thành công!");
    } else {
        // Luồng cập nhật sẽ xử lý ở bước sau
    }

    saveProjects();
    renderProjects();
    updateStatistics();
    closeModal();
});

function handleFilter() {
    const keyword = filterInput.value.toLowerCase().trim();
    
    const filteredProjects = projects.filter(project => 
        project.student.toLowerCase().includes(keyword) || 
        project.title.toLowerCase().includes(keyword)
    );
    
    renderProjects(filteredProjects);
}

btnFilter.addEventListener('click', handleFilter);
filterInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        handleFilter();
    }
});