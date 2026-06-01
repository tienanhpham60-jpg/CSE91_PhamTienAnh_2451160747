const form = document.getElementById('register-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm-password');
const phoneInput = document.getElementById('phone');
const submitBtn = document.getElementById('btn-submit');

const nameStatus = document.getElementById('name-status');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');
const confirmError = document.getElementById('confirm-error');
const phoneError = document.getElementById('phone-error');

const successModal = document.getElementById('success-modal');
const modalInfo = document.getElementById('modal-info');
const closeModalBtn = document.getElementById('btn-close-modal');

let isNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmValid = false;
let isPhoneValid = false;

function checkFormValidity() {
    if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid && isPhoneValid) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

usernameInput.addEventListener('input', function() {
    const val = usernameInput.value.trim();
    if (val.length >= 2 && val.length <= 50) {
        nameStatus.textContent = '✅';
        nameError.textContent = '';
        isNameValid = true;
    } else {
        nameStatus.textContent = '❌';
        nameError.textContent = 'Tên phải nằm trong khoảng từ 2 đến 50 ký tự.';
        isNameValid = false;
    }
    checkFormValidity();
});

emailInput.addEventListener('input', function() {
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(val)) {
        emailError.textContent = '';
        isEmailValid = true;
    } else {
        emailError.textContent = 'Email không đúng định dạng (Ví dụ: abc@gmail.com).';
        isEmailValid = false;
    }
    checkFormValidity();
});

passwordInput.addEventListener('input', function() {
    const val = passwordInput.value;
    
    if (val.length === 0) {
        strengthBar.style.width = '0%';
        strengthText.textContent = 'Chưa nhập mật khẩu';
        strengthText.style.color = '#475569';
        isPasswordValid = false;
        checkFormValidity();
        return;
    }

    const hasLetter = /[a-zA-Z]/.test(val);
    const hasNumber = /[0-9]/.test(val);
    const hasUpper = /[A-Z]/.test(val);
    const hasLower = /[a-z]/.test(val);
    const hasSpecial = /[^A-Za-z0-9]/.test(val);

    if (val.length < 8) {
        strengthBar.style.width = '33%';
        strengthBar.style.backgroundColor = '#ef4444';
        strengthText.textContent = 'Yếu (Đỏ)';
        strengthText.style.color = '#ef4444';
        isPasswordValid = false;
    } else if (hasLetter && hasNumber && (hasUpper && hasLower && hasSpecial)) {
        strengthBar.style.width = '100%';
        strengthBar.style.backgroundColor = '#10b981';
        strengthText.textContent = 'Mạnh (Xanh)';
        strengthText.style.color = '#10b981';
        isPasswordValid = true;
    } else if (hasLetter && hasNumber) {
        strengthBar.style.width = '66%';
        strengthBar.style.backgroundColor = '#eab308';
        strengthText.textContent = 'Trung bình (Vàng)';
        strengthText.style.color = '#eab308';
        isPasswordValid = true;
    } else {
        strengthBar.style.width = '33%';
        strengthBar.style.backgroundColor = '#ef4444';
        strengthText.textContent = 'Yếu (Đỏ) - Cần cả chữ và số';
        strengthText.style.color = '#ef4444';
        isPasswordValid = false;
    }

    if (confirmInput.value.length > 0) {
        validateConfirmPassword();
    }

    checkFormValidity();
});

function validateConfirmPassword() {
    if (confirmInput.value === passwordInput.value) {
        confirmError.textContent = '';
        isConfirmValid = true;
    } else {
        confirmError.textContent = 'Mật khẩu xác nhận không trùng khớp.';
        isConfirmValid = false;
    }
}

confirmInput.addEventListener('input', function() {
    validateConfirmPassword();
    checkFormValidity();
});

phoneInput.addEventListener('input', function(e) {
    let digits = e.target.value.replace(/\D/g, '');
    
    if (digits.length > 10) {
        digits = digits.substring(0, 10);
    }

    let formatted = '';
    if (digits.length > 0) {
        formatted += digits.substring(0, 4);
    }
    if (digits.length > 4) {
        formatted += '-' + digits.substring(4, 7);
    }
    if (digits.length > 7) {
        formatted += '-' + digits.substring(7, 10);
    }

    e.target.value = formatted;

    if (digits.length === 10) {
        phoneError.textContent = '';
        isPhoneValid = true;
    } else {
        phoneError.textContent = 'Số điện thoại phải chứa đủ 10 chữ số.';
        isPhoneValid = false;
    }
    checkFormValidity();
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    modalInfo.innerHTML = '';
    
    const pName = document.createElement('p');
    pName.innerHTML = `<strong>Họ tên:</strong> ${usernameInput.value}`;
    
    const pEmail = document.createElement('p');
    pEmail.innerHTML = `<strong>Email:</strong> ${emailInput.value}`;
    
    const pPhone = document.createElement('p');
    pPhone.innerHTML = `<strong>Số điện thoại:</strong> ${phoneInput.value}`;

    modalInfo.appendChild(pName);
    modalInfo.appendChild(pEmail);
    modalInfo.appendChild(pPhone);

    successModal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', function() {
    successModal.classList.add('hidden');
    form.reset();
    nameStatus.textContent = '';
    strengthBar.style.width = '0%';
    strengthText.textContent = 'Chưa nhập mật khẩu';
    strengthText.style.color = '#475569';
    submitBtn.disabled = true;
    isNameValid = isEmailValid = isPasswordValid = isConfirmValid = isPhoneValid = false;
});