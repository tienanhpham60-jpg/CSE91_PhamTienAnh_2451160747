
const api = {
    baseURL: "https://jsonplaceholder.typicode.com",
    async getUsers() {
        const res = await fetch(`${this.baseURL}/users`);
        return res.json();
    },
    async createUser(data) {
        const res = await fetch(`${this.baseURL}/users`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json'}
        });
        return res.json();
    },
    async updateUser(id, data) {
        const res = await fetch(`${this.baseURL}/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json'}
        });
        return res.json();
    },
    async deleteUser(id) {
        await fetch(`${this.baseURL}/users/${id}`, { method: 'DELETE' });
    }
};


const ui = {
    tbody: document.querySelector("#userTable tbody"),
    showLoading: () => document.getElementById("loading").classList.remove("hidden"),
    hideLoading: () => document.getElementById("loading").classList.add("hidden"),
    showError: (msg) => alert("Lỗi: " + msg),
    renderUsers(users) {
        this.tbody.innerHTML = users.map(u => `
            <tr>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>
                    <button onclick="editUser(${u.id})">Edit</button>
                    <button onclick="removeUser(${u.id})">Delete</button>
                </td>
            </tr>
        `).join('');
    }
};


let users = [];

async function init() {
    ui.showLoading();
    try {
        users = await api.getUsers();
        ui.renderUsers(users);
    } catch(e) { ui.showError(e.message); }
    finally { ui.hideLoading(); }
}

async function removeUser(id) {
    if(!confirm("Xác nhận xóa?")) return;
    try {
        await api.deleteUser(id);
        users = users.filter(u => u.id !== id);
        ui.renderUsers(users);
    } catch(e) { ui.showError(e.message); }
}

document.getElementById("search").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = users.filter(u => u.name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term));
    ui.renderUsers(filtered);
});

init();