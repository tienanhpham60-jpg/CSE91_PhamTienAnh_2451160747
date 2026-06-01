# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — DOM Tree

# 1. Sơ đồ cây DOM (DOM Tree)

html
└── head
└── body
    └── div (id="app")
        ├── header
        │   ├── h1 -> chữ: "Todo App"
        │   └── nav
        │       ├── a (class="active") -> chữ: "All"
        │       ├── a -> chữ: "Active"
        │       └── a -> chữ: "Completed"
        └── main
            ├── form (id="todoForm")
            │   ├── input (id="todoInput")
            │   └── button -> chữ: "Add"
            └── ul (id="todoList")
                ├── li (class="todo-item") -> chữ: "Learn HTML"
                └── li (class="todo-item completed") -> chữ: "Learn CSS"

# 2. Các câu lệnh querySelector

- Chọn thẻ <h1>:
  document.querySelector('h1');

- Chọn input trong form:
  document.querySelector('#todoForm input');

- Chọn tất cả .todo-item:
  document.querySelectorAll('.todo-item');

- Chọn link đang active:
  document.querySelector('nav a.active');

- Chọn <li> đầu tiên trong #todoList:
  document.querySelector('#todoList li');

- Chọn tất cả <a> bên trong <nav>:
  document.querySelectorAll('nav a');

---

# Câu A2 — innerHTML vs textContent

# 1. Khác nhau giữa innerHTML và textContent

- innerHTML: Cái này dùng để lấy hoặc chèn cả đoạn mã HTML vào trong thẻ. Khi mình truyền một chuỗi có các thẻ như `<b>`, `<a>`, trình duyệt sẽ hiểu và tự động render ra giao diện thành chữ đậm hoặc đường link luôn.
- textContent: Cái này thì chỉ xử lý chữ thuần túy (text thô). Nếu mình truyền chuỗi có chứa thẻ HTML vào đây, trình duyệt sẽ không render ra giao diện mà hiển thị nguyên văn cả mấy cái ký tự `<` `>` đó ra màn hình luôn.

# 2. Ví dụ khi nào dùng

- Dùng innerHTML: Khi cần tạo nhanh giao diện động từ file JS, ví dụ như lúc duyệt qua mảng danh sách sinh viên hay đồ án để render ra các dòng `<tr><td>...</td></tr>` cho cái bảng.
- Dùng textContent: Khi chỉ muốn đổi chữ hiển thị bình thường, ví dụ như đổi số lượng ở mấy ô thống kê (Tổng số đồ án, Đang làm) hoặc hiển thị thông báo lỗi ra màn hình.

# 3. Vấn đề bảo mật XSS của innerHTML

Cái innerHTML nguy hiểm ở chỗ nó cho phép chạy mã script từ chuỗi văn bản. Nếu kẻ xấu cố tình nhập vào ô input một đoạn mã độc (như thẻ img có kèm thuộc tính onerror chứa code javascript), rồi mình lại lôi trực tiếp cái dữ liệu đó chèn vào web bằng innerHTML thì trình duyệt sẽ chạy đoạn code độc đó luôn. Hậu quả là có thể bị hack mất tài khoản hoặc lộ thông tin.

Ví dụ như code bị lỗi XSS ở đề bài:
Do thẻ img có đường dẫn src=x bị sai (không tìm thấy ảnh), nên thuộc tính onerror sẽ lập tức được kích hoạt và chạy hàm alert('Hacked!').

Cách sửa cho an toàn:

Cách 1: Nếu chỗ đó chỉ cần hiển thị chữ thông thường, thay innerHTML thành textContent là xong. Trình duyệt sẽ hiện nguyên văn cái đoạn `<img src=...>` ra như một đoạn văn bản chứ không chạy code nữa.

const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput; 
Cách 2: Nếu vẫn bắt buộc phải chèn thẻ, thì tự tạo ra một text node an toàn rồi append vào thẻ cha:


const userInput = document.querySelector("#search").value;
const resultEl = document.querySelector("#result");

resultEl.innerHTML = ""; 
const textNode = document.createTextNode(userInput);
resultEl.appendChild(textNode);



# Câu A3 — Event Bubbling

# 1. Dự đoán output khi click vào nút "Click me" (mặc định)

- Output sẽ là:
BUTTON
INNER
OUTER

- Giải thích: Do cơ chế Event Bubbling (nổi bọt sự kiện) trong JavaScript. Khi click vào một phần tử con ở trong cùng (`#btn`), sự kiện click sẽ được kích hoạt tại đó trước, sau đó nó tự động "bọt" ngược lên các phần tử cha bao bọc bên ngoài nó theo thứ tự từ trong ra ngoài: `#btn` -> `#inner` -> `#outer`.

# 2. Dự đoán output nếu bỏ comment dòng `e.stopPropagation();`

- Output sẽ thay đổi thành:
BUTTON

- Giải thích: Hàm `e.stopPropagation()` có nhiệm vụ là ngăn chặn sự kiện nổi bọt. Khi  gọi hàm này ngay trong sự kiện click của `#btn`, sự kiện sẽ bị chặn lại lập tức tại đó và không thể lan truyền lên các thẻ cha bên ngoài như `#inner` và `#outer` nữa. Do đó chỉ có duy nhất chữ `BUTTON` được in ra.