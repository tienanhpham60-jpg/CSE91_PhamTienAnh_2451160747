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










    
# Câu C1
Mã nguồn trong đề bài có tổng cộng 7 lỗi sai từ cú pháp, logic cho đến cách quản lý bộ nhớ. Dưới đây là danh sách các lỗi và cách sửa:

Lỗi addEventListener("onclick", ...) ở nút Decrement: addEventListener chỉ nhận tên sự kiện là 'click', viết 'onclick' sự kiện sẽ không bao giờ chạy.
Sửa lại: Đổi thành addEventListener("click", ...).

Lỗi gán lại hằng số countDisplay = count ở nút Reset: countDisplay được khai báo bằng const là một DOM element, việc gán trực tiếp số vào biến này sẽ gây lỗi TypeError: Assignment to constant variable.
Sửa lại: Phải cập nhật qua thuộc tính: countDisplay.textContent = count;.

Lỗi xóa lịch sử historyList.innerHTML = null ở nút Reset: Gán null vào innerHTML không chuẩn và dễ gây lỗi hiển thị hoặc logic.
Sửa lại: Xóa sạch bằng chuỗi rỗng: historyList.innerHTML = "";.

Lỗi rò rỉ bộ nhớ khi click xóa history: Hàm deleteHistory xóa thẻ li khỏi DOM nhưng sự kiện click gắn trực tiếp trên thẻ li đó vẫn còn lưu trong bộ nhớ.
Sửa lại: Nên dùng Event Delegation gắn vào thẻ cha #history thay vì gắn addEventListener riêng cho từng thẻ li.

Lỗi gọi hàm xóa item.remove ở nút Clear All: remove là một phương thức của phần tử DOM, viết item.remove mà không có cặp dấu ngoặc tròn () thì hàm sẽ không chạy.
Sửa lại: Đổi thành item.remove();.

Lỗi ép kiểu dữ liệu khi Load từ LocalStorage: Khi lấy count từ localStorage.getItem("count"), dữ liệu trả về là một chuỗi. Nếu không ép kiểu về số, khi bấm nút Increment (count++), JavaScript sẽ thực hiện phép cộng chuỗi khiến số bị ghép sai (ví dụ: "0" + 1 = "01").
Sửa lại: Dùng parseInt(localStorage.getItem("count")) || 0;.

Lỗi lưu trực tiếp HTML historyList.innerHTML vào LocalStorage: Lưu toàn bộ cục HTML thô vào LocalStorage là một bad practice, vừa tốn dung lượng vừa dễ bị lỗi mất các sự kiện đã gắn vào thẻ khi ép ngược lại giao diện.
Sửa lại: Nên lưu dữ liệu lịch sử dưới dạng một mảng các chuỗi, khi load trang thì duyệt mảng để render lại.

# Câu C2 — Performance
Tại sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE?

Tốn bộ nhớ: Mỗi lần gọi addEventListener, trình duyệt phải tạo ra một đối tượng xử lý sự kiện riêng biệt trong bộ nhớ RAM. Gắn cho 1000 phần tử đồng nghĩa với việc tạo ra 1000 đối tượng, gây ngốn RAM và làm chậm ứng dụng.

Khó quản lý và rò rỉ bộ nhớ: Khi các phần tử này bị xóa khỏi giao diện, nếu không gỡ sự kiện, các handler này vẫn sẽ chạy ngầm trong bộ nhớ.

Phức tạp khi tạo mới: Cứ mỗi lần thêm một phần tử mới vào danh sách, lại phải viết thêm code để bind sự kiện cho nó, rất cồng kềnh.

Cách Event Delegation giải quyết:
Thay vì gắn cho 1000 thẻ con, chỉ gắn duy nhất 1 sự kiện lên thẻ cha bao bọc bên ngoài. Nhờ cơ chế nổi bọt sự kiện, khi click vào bất kỳ thẻ con nào, sự kiện cũng sẽ bọt ngược lên thẻ cha. Tại thẻ cha, chỉ cần kiểm tra e.target để biết chính xác người dùng vừa bấm vào thẻ con nào để xử lý.

Đoạn code sau khi Refactor bằng DocumentFragment

const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
const div = document.createElement("div");
div.textContent = Item ${i};
fragment.appendChild(div);
}

document.body.appendChild(fragment);

Giải thích tại sao DocumentFragment lại nhanh hơn

Mỗi lần thay đổi cấu trúc DOM thật như dùng document.body.appendChild, trình duyệt sẽ phải tính toán lại kích thước, vị trí hình học của các phần tử và vẽ lại giao diện trên màn hình. Quá trình này gọi là Reflow và Repaint, cực kỳ tốn hiệu năng.

Code cũ gọi appendChild trực tiếp vào body 1000 lần, bắt trình duyệt phải Reflow và Repaint liên tục 1000 lần gây hiện tượng giật lag màn hình.

Khi dùng DocumentFragment, nó hoạt động như một vùng đệm ẩn hoàn toàn trong bộ nhớ. Mọi thao tác thêm 1000 thẻ div vào fragment không hề kích hoạt bất kỳ lần Reflow nào. Cuối cùng, khi append fragment vào body, trình duyệt chỉ tốn đúng 1 lần Reflow duy nhất để xử lý toàn bộ, giúp tối ưu tốc độ render lên gấp hàng trăm lần.