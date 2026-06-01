const btnOpenForm = document.getElementById('btn-open-form');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelForm = document.getElementById('btn-cancel-form');
const formModal = document.getElementById('form-modal');
const deviceForm = document.getElementById('device-form');
const modalTitle = document.getElementById('modal-title');

const inputIdHidden = document.getElementById('device-id-hidden');
const inputName = document.getElementById('device-name');
const inputSerial = document.getElementById('device-serial');
const inputType = document.getElementById('device-type');
const inputDate = document.getElementById('device-date');
const inputWarranty = document.getElementById('device-warranty');
const inputEmail = document.getElementById('device-email');
const inputStatus = document.getElementById('device-status');

const deviceGrid = document.getElementById('device-grid');
const searchInput = document.getElementById('search-input');
const toastNotification = document.getElementById('toast-notification');

const defaultDevices = [
    { id: "1", name: "Dell OptiPlex 7090", serial: "DL7090001", type: "Máy bàn", date: "2026-01-10", warranty: "3 năm", email: "manager1@example.com", status: "Hoạt động" },
    { id: "2", name: "HP LaserJet Pro M404", serial: "HP404001", type: "Máy in", date: "2025-05-12", warranty: "1 năm", email: "manager2@example.com", status: "Hoạt động" },
    { id: "3", name: "Lenovo ThinkPad X1", serial: "LN-X1-001", type: "Laptop", date: "2026-02-15", warranty: "2 năm", email: "manager3@example.com", status: "Hoạt động" },
    { id: "4", name: "Ubuntu Server 20.04", serial: "UB-SRV-001", type: "Máy chủ", date: "2024-11-20", warranty: "3 năm", email: "manager4@example.com", status: "Hoạt động" },
    { id: "5", name: "LG UltraWide 34WN80C", serial: "LG34WN001", type: "Màn hình", date: "2025-08-05", warranty: "2 năm", email: "manager5@example.com", status: "Không hoạt động" },
    { id: "6", name: "LG 27GP850", serial: "LG27GP85001", type: "Màn hình", date: "2026-03-01", warranty: "2 năm", email: "manager6@example.com", status: "Hoạt động" }
];

let devices = JSON.parse(localStorage.getItem('devices')) || defaultDevices;

if (!localStorage.getItem('devices')) {
    localStorage.setItem('devices', JSON.stringify(devices));
}

function saveDevices() {
    localStorage.setItem('devices', JSON.stringify(devices));
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
        modalTitle.innerText = "Thêm Thiết bị";
        deviceForm.reset();
        inputIdHidden.value = "";
    } else if (mode === 'edit') {
        modalTitle.innerText = "Sửa Thiết bị";
    }
}

function closeModal() {
    formModal.classList.add('hidden');
    deviceForm.reset();
}

btnOpenForm.addEventListener('click', () => openModal('add'));
btnCloseModal.addEventListener('click', closeModal);
btnCancelForm.addEventListener('click', closeModal);
formModal.addEventListener('click', (e) => {
    if (e.target === formModal) closeModal();
});

function renderDevices(dataToRender = devices) {
    deviceGrid.innerHTML = '';

    if (dataToRender.length === 0) {
        deviceGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 2rem;">Không tìm thấy thiết bị nào.</p>`;
        return;
    }

    dataToRender.forEach(device => {
        const card = document.createElement('div');
        card.className = 'device-card';
        
        card.innerHTML = `
            <h3>${device.name}</h3>
            <p><strong>SN:</strong> ${device.serial}</p>
            <p>${device.type}</p>
            <p><strong>${device.status}</strong></p>
            <div class="card-actions">
                <button class="btn-action btn-edit" data-id="${device.id}">Sửa</button>
                <button class="btn-action btn-delete" data-id="${device.id}">Xóa</button>
            </div>
        `;
        
        deviceGrid.appendChild(card);
    });
}

renderDevices();


deviceForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = inputName.value.trim();
    const serial = inputSerial.value.trim();
    const type = inputType.value;
    const date = inputDate.value;
    const warranty = inputWarranty.value;
    const email = inputEmail.value.trim();
    const status = inputStatus.value;
    const hiddenId = inputIdHidden.value;

    if (hiddenId === "") {
        const newDevice = {
            id: Date.now().toString(),
            name: name,
            serial: serial,
            type: type,
            date: date,
            warranty: warranty,
            email: email,
            status: status
        };

        devices.push(newDevice);
        showToast("Thêm thiết bị mới thành công!");
    } else {
        const deviceIndex = devices.findIndex(d => d.id === hiddenId);
        if (deviceIndex !== -1) {
            devices[deviceIndex] = {
                id: hiddenId,
                name: name,
                serial: serial,
                type: type,
                date: date,
                warranty: warranty,
                email: email,
                status: status
            };
            showToast("Cập nhật thiết bị thành công!");
        }
        
    }

    saveDevices();
    renderDevices();
    closeModal();
});

searchInput.addEventListener('input', function (e) {
    const keyword = e.target.value.toLowerCase().trim();
    
    const filteredDevices = devices.filter(device => 
        device.name.toLowerCase().includes(keyword) || 
        device.serial.toLowerCase().includes(keyword) ||
        device.type.toLowerCase().includes(keyword)
    );
    
    renderDevices(filteredDevices);
});


deviceGrid.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-delete')) {
        const deviceId = e.target.getAttribute('data-id');
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa thiết bị này không?");
        
        if (confirmDelete) {
            devices = devices.filter(device => device.id !== deviceId);
            saveDevices();
            renderDevices();
            showToast("Xóa thiết bị thành công!");
        }
    }

    if (e.target.classList.contains('btn-edit')) {
        const deviceId = e.target.getAttribute('data-id');
        const device = devices.find(d => d.id === deviceId);
        
        if (device) {
            inputIdHidden.value = device.id;
            inputName.value = device.name;
            inputSerial.value = device.serial;
            inputType.value = device.type;
            inputDate.value = device.date;
            inputWarranty.value = device.warranty;
            inputEmail.value = device.email;
            inputStatus.value = device.status;
            
            openModal('edit');
        }
    }
});