
const btnOpenForm = document.getElementById('btn-open-form');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelForm = document.getElementById('btn-cancel-form');
const formModal = document.getElementById('form-modal');
const studentForm = document.getElementById('student-form');
const modalTitle = document.getElementById('modal-title');


const inputIdHidden = document.getElementById('student-id-hidden');
const inputCode = document.getElementById('student-code');
const inputName = document.getElementById('student-name');
const inputDob = document.getElementById('student-dob');
const inputClass = document.getElementById('student-class');
const inputGrade = document.getElementById('student-grade');
const inputEmail = document.getElementById('student-email');


const studentTableBody = document.getElementById('student-table-body');
const totalStudentsEl = document.getElementById('total-students');
const averageScoreEl = document.getElementById('average-score');
const toastNotification = document.getElementById('toast-notification');




function openModal(mode = 'add') {
    formModal.classList.remove('hidden'); 
    if (mode === 'add') {
        modalTitle.innerText = "Thêm Sinh Viên Mới";
        studentForm.reset();
        inputIdHidden.value = ""; 
    } else if (mode === 'edit') {
        modalTitle.innerText = "Cập Nhật Thông Tin Sinh Viên";
    }
}


function closeModal() {
    formModal.classList.add('hidden'); 
    studentForm.reset();
}


btnOpenForm.addEventListener('click', () => openModal('add'));
btnCloseModal.addEventListener('click', closeModal);
btnCancelForm.addEventListener('click', closeModal);


formModal.addEventListener('click', (e) => {
    if (e.target === formModal) {
        closeModal();
    }
});




let students = JSON.parse(localStorage.getItem('students')) || [];


function saveStudents() {
    localStorage.setItem('students', JSON.stringify(students));
}


function showToast(message) {
    toastNotification.innerText = message;
    toastNotification.classList.remove('hidden');
    
    
    setTimeout(() => {
        toastNotification.classList.add('hidden');
    }, 3000);
}


function updateStatistics() {
    
    const total = students.length;
    totalStudentsEl.innerText = total;

    
    if (total === 0) {
        averageScoreEl.innerText = "0.0";
        return;
    }

    const totalGrade = students.reduce((sum, currentStudent) => {
        return sum + parseFloat(currentStudent.grade);
    }, 0);

    const average = totalGrade / total;
    
   
    averageScoreEl.innerText = average.toFixed(1);
}


function renderStudents() {
    
    studentTableBody.innerHTML = '';

    
    if (students.length === 0) {
        studentTableBody.innerHTML = `
            <tr id="empty-row">
                <td colspan="7" style="text-align: center; color: #94a3b8; padding: 2rem;">
                    Chưa có dữ liệu sinh viên. Vui lòng bấm nút thêm mới!
                </td>
            </tr>
        `;
        return;
    }

    students.forEach((student) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.code}</td>
            <td>${student.name}</td>
            <td>${student.dob}</td>
            <td>${student.className}</td>
            <td><strong>${parseFloat(student.grade).toFixed(1)}</strong></td>
            <td>${student.email}</td>
            <td>
                <button class="btn btn-edit" data-id="${student.id}">Sửa</button>
                <button class="btn btn-danger btn-delete" data-id="${student.id}">Xóa</button>
            </td>
        `;
        
        studentTableBody.appendChild(row);
    });
}


renderStudents();
updateStatistics();






studentForm.addEventListener('submit', function (e) {
    
    e.preventDefault();

    
    const code = inputCode.value.trim();
    const name = inputName.value.trim();
    const dob = inputDob.value;
    const className = inputClass.value.trim();
    const grade = inputGrade.value;
    const email = inputEmail.value.trim();
    const hiddenId = inputIdHidden.value;

    
    if (hiddenId === "") {
        
        
       
        const newStudent = {
            id: Date.now().toString(), 
            code: code,
            name: name,
            dob: dob,
            className: className,
            grade: grade,
            email: email
        };

        
        students.push(newStudent);
        showToast("Thêm mới sinh viên thành công!");
        
    } else {
       
        
    }

    
    saveStudents();       
    renderStudents();     
    updateStatistics();   
    closeModal();         
});