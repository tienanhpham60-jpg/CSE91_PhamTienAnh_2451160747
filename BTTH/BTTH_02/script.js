
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

// Hàm đóng Modal form
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