# PHẦN A — KIỂM TRA ĐỌC HIỂU
#

---

## Câu A1 (5đ) — HTTP & Browser

### 1. Khi gõ `https://shopee.vn` và nhấn Enter

Thứ tự các bước cơ bản:

1. Trình duyệt phân tích URL và xác định tên miền cần truy cập.
2. Thực hiện DNS Lookup để tìm địa chỉ IP của máy chủ.
3. Thiết lập kết nối TCP với máy chủ.
4. Thực hiện bắt tay TLS/SSL (do sử dụng HTTPS).
5. Trình duyệt gửi HTTP Request tới máy chủ.
6. Máy chủ xử lý yêu cầu và trả về HTTP Response.
7. Trình duyệt nhận file HTML.
8. Trình duyệt phân tích HTML, tải thêm CSS, JavaScript, hình ảnh và các tài nguyên liên quan.
9. Xây dựng DOM Tree và CSSOM.
10. Render (hiển thị) nội dung trang web lên màn hình.



### 2. Tab Network trong Chrome DevTools

Tab Network cho phép theo dõi toàn bộ các request và response giữa trình duyệt và máy chủ, bao gồm:

- URL request
- HTTP Method (GET, POST, ...)
- Status Code (200, 404, 500, ...)
- Loại tài nguyên (HTML, CSS, JS, Image, ...)
- Kích thước dữ liệu truyền tải
- Thời gian tải (Load Time)
- Headers, Cookies, Response Data

Đánh dấu:
- Status Code của request đầu tiên
- Tổng thời gian load trang
- Một request trả về file CSS



---

## Câu A2 (5đ) — Semantic HTML

### Các lỗi Semantic HTML

#### Lỗi 1: Dùng `<div>` thay cho `<header>`
```html
<div class="header">
```
Nên sửa thành:
```html
<header>
```

#### Lỗi 2: Menu không dùng thẻ `<nav>`
```html
<div class="menu">
```
Nên sửa thành:
```html
<nav>
```

#### Lỗi 3: Tên sản phẩm không dùng heading
```html
<div class="title">iPhone 16 Pro</div>
```
Nên sửa thành:
```html
<h1>iPhone 16 Pro</h1>
```

#### Lỗi 4: Nội dung sản phẩm không dùng `<article>` hoặc `<section>`
```html
<div class="product">
```
Nên sửa thành:
```html
<article>
```

#### Lỗi 5: Footer không dùng thẻ semantic
```html
<div class="footer">
```
Nên sửa thành:
```html
<footer>
```

### Phiên bản semantic tốt hơn

```html
<header>
    <div class="logo">ShopTLU</div>

    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <article class="product">
        <h1>iPhone 16 Pro</h1>
        <p class="price">25.990.000đ</p>
        <img src="iphone.jpg" alt="iPhone 16 Pro">
    </article>
</main>

<footer>
    © 2026 ShopTLU
</footer>
```

### Vì sao SEO tốt hơn?

- Google hiểu rõ cấu trúc trang.
- Dễ xác định nội dung chính.
- Hỗ trợ Accessibility tốt hơn.
- Tăng khả năng xuất hiện trong kết quả tìm kiếm.

**Nguồn tham chiếu:**  
- `04_*.md` – Phần Semantic HTML, SEO và Accessibility.

---

## Câu A3 (5đ) — Block vs Inline

### Kết quả hiển thị

```text
+---------+
| Hộp 1   |
+---------+

Text A Text B

+---------+
| Hộp 2   |
+---------+

Text C Text D

+---------+
| Hộp 3   |
+---------+
```

### Giải thích

- `<div>` là phần tử block-level nên luôn chiếm toàn bộ chiều ngang và tự xuống dòng.
- `<span>` là phần tử inline nên hiển thị trên cùng một dòng nếu còn đủ chỗ.
- `<strong>` cũng là phần tử inline nên hiển thị cùng dòng với `Text C`.

Do đó:

```html
<div>Hộp 1</div>
```
xuất hiện một dòng riêng.

```html
<span>Text A</span>
<span>Text B</span>
```
hiển thị cùng dòng.

```html
<div>Hộp 2</div>
```
lại xuống dòng.

```html
<span>Text C</span>
<strong>Text D</strong>
```
cùng nằm trên một dòng.

**Nguồn tham chiếu:**  
- Chương về Block Elements và Inline Elements.

---

## Câu A4 (5đ) — Table

### Sự khác nhau giữa `<thead>`, `<tbody>`, `<tfoot>`

#### `<thead>`
Chứa phần tiêu đề của bảng.

Ví dụ:
```html
<thead>
    <tr>
        <th>Tên</th>
        <th>Tuổi</th>
    </tr>
</thead>
```

#### `<tbody>`
Chứa dữ liệu chính của bảng.

Ví dụ:
```html
<tbody>
    <tr>
        <td>Nam</td>
        <td>20</td>
    </tr>
</tbody>
```

#### `<tfoot>`
Chứa phần tổng kết hoặc ghi chú cuối bảng.

Ví dụ:
```html
<tfoot>
    <tr>
        <td colspan="2">Tổng cộng: 100</td>
    </tr>
</tfoot>
```

### Vì sao KHÔNG NÊN dùng table để tạo layout website?

#### 1. Không đúng ngữ nghĩa (Semantic)
Table được tạo ra để hiển thị dữ liệu dạng bảng, không phải để bố trí giao diện.

#### 2. Khó bảo trì
Layout bằng table thường lồng nhiều bảng, làm mã nguồn phức tạp và khó chỉnh sửa.

#### 3. Responsive kém
Khó thích ứng với màn hình điện thoại và tablet.

#### 4. Hiệu năng thấp hơn
Trình duyệt phải tính toán toàn bộ cấu trúc bảng trước khi render.

#### 5. SEO và Accessibility kém
Công cụ tìm kiếm và trình đọc màn hình khó hiểu nội dung hơn so với layout bằng semantic HTML + CSS.

**Nguồn tham chiếu:**  
- Chương 05 – Table (`<thead>`, `<tbody>`, `<tfoot>`).
- Chương Semantic HTML và CSS Layout.
