# Câu A1 

# HTML được cho

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Box 1</div>
        <div class="col-12 col-md-6 col-lg-3">Box 2</div>
        <div class="col-12 col-md-6 col-lg-3">Box 3</div>
        <div class="col-12 col-md-6 col-lg-3">Box 4</div>
    </div>
</div>
```



# Layout theo từng kích thước màn hình

| Kích thước | < 768px        | 768px - 991px | ≥ 992px      |
| ---------- | -------------- | ------------- | ------------ |
| Số cột     | 1 cột          | 2 cột         | 4 cột        |
| Box layout | Mỗi box 1 hàng | 2 box / hàng  | 4 box / hàng |



# Wireframe

# Mobile (< 768px)

```text
+-------+
| Box 1 |
+-------+

+-------+
| Box 2 |
+-------+

+-------+
| Box 3 |
+-------+

+-------+
| Box 4 |
+-------+
```

Giải thích:

 `col-12` = chiếm toàn bộ 12/12 cột.
 Mỗi box nằm trên một dòng riêng.
 Tổng cộng 1 cột.



# Tablet (768px - 991px)

```text
+-------+-------+
| Box 1 | Box 2 |
+-------+-------+

+-------+-------+
| Box 3 | Box 4 |
+-------+-------+
```

Giải thích:

 `col-md-6` = chiếm 6/12 cột.
 Mỗi hàng chứa được 2 box.
 Tổng cộng 2 cột.



# Desktop (≥ 992px)

```text
+-------+-------+-------+-------+
| Box 1 | Box 2 | Box 3 | Box 4 |
+-------+-------+-------+-------+
```

Giải thích:

 `col-lg-3` = chiếm 3/12 cột.
 4 box × 3 cột = 12 cột.
 Tất cả box nằm trên cùng một hàng.
 Tổng cộng 4 cột.



# Câu hỏi thêm

# col-md-6 nghĩa là gì?

`col-md-6` nghĩa là:

 Khi màn hình đạt breakpoint `md` (Medium) trở lên.
 Phần tử sẽ chiếm 6 trên tổng 12 cột của Grid System.
 Tức là chiếm 50% chiều rộng hàng.

Ví dụ:

```text
12 cột Bootstrap

|------6------|------6------|
     Box 1          Box 2
```

Do đó mỗi hàng hiển thị được 2 box.



# Tại sao không cần viết col-sm-12?

Không cần viết `col-sm-12` vì đã có:

```html
col-12
```

Trong Bootstrap:

 `col-12` áp dụng cho tất cả kích thước màn hình.
 Sau đó các breakpoint lớn hơn (`md`, `lg`) sẽ ghi đè.

Ví dụ:

```html
col-12 col-md-6 col-lg-3
```

được hiểu là:

```text
<768px     → 12 cột
≥768px     → 6 cột
≥992px     → 3 cột
```

Vì vậy `col-sm-12` là dư thừa và không cần thiết.



# Kết luận

Layout sẽ thay đổi theo nguyên tắc Responsive Grid:
 Mobile: 1 cột (4 hàng).
 Tablet: 2 cột (2 hàng).
 Desktop: 4 cột (1 hàng).

Việc sử dụng `col-12 col-md-6 col-lg-3` giúp giao diện tự động thích nghi với nhiều kích thước màn hình mà không cần viết thêm CSS tùy chỉnh.


# Câu A2 

1. Giải thích class `d-none d-md-block`

Ví dụ:

```html
<div class="d-none d-md-block">
    Nội dung
</div>
```

Class `d-none` dùng để ẩn phần tử bằng `display: none`.

Class `d-md-block` quy định từ breakpoint `md` (768px) trở lên thì phần tử sẽ hiển thị dưới dạng `display: block`.

Điều này có nghĩa là:

* Khi màn hình nhỏ hơn 768px: phần tử bị ẩn.
* Khi màn hình từ 768px trở lên: phần tử được hiển thị.

Class này thường được dùng để ẩn sidebar, banner hoặc các nội dung phụ trên điện thoại nhưng vẫn hiển thị trên tablet và desktop.

2. Liệt kê 5 spacing utilities và giải thích

`mt-3`

Dùng để tạo khoảng cách phía trên của phần tử.

```css
margin-top: 1rem;
```

`mb-auto`

Dùng để đặt margin-bottom ở chế độ tự động.

```css
margin-bottom: auto;
```

Thường dùng kết hợp với Flexbox để đẩy các phần tử.

`px-4`

Dùng để tạo padding bên trái và bên phải.

```css
padding-left: 1.5rem;
padding-right: 1.5rem;
```

`py-2`

Dùng để tạo padding phía trên và phía dưới.

```css
padding-top: 0.5rem;
padding-bottom: 0.5rem;
```

`ms-5`

Dùng để tạo khoảng cách bên trái (start).

```css
margin-left: 3rem;
```

3. Sự khác nhau giữa `.container`, `.container-fluid` và `.container-md`

`.container`

Container có chiều rộng tối đa và được căn giữa màn hình. Kích thước sẽ thay đổi theo từng breakpoint của Bootstrap.

Loại này thường được sử dụng cho hầu hết các website vì giúp nội dung dễ đọc và không bị kéo quá rộng trên màn hình lớn.

`.container-fluid`

Container luôn chiếm 100% chiều rộng màn hình.

Nó không có giới hạn chiều rộng tối đa nên thường được dùng cho banner, hero section hoặc dashboard cần hiển thị toàn màn hình.

`.container-md`

Trên màn hình nhỏ hơn 768px, container sẽ chiếm toàn bộ chiều rộng.

Khi màn hình từ 768px trở lên, nó hoạt động giống `.container` và bắt đầu áp dụng giới hạn chiều rộng.

Kết luận:

* `d-none d-md-block` giúp ẩn nội dung trên mobile và hiển thị từ tablet trở lên.
* Spacing utilities giúp tạo margin và padding nhanh mà không cần viết CSS.
* `.container` có chiều rộng giới hạn.
* `.container-fluid` luôn rộng 100%.
* `.container-md` chỉ bắt đầu giới hạn chiều rộng từ breakpoint md trở lên.



# Câu C1 

Bootstrap được xây dựng bằng SASS nên các màu sắc, kích thước và nhiều thuộc tính khác được quản lý thông qua các biến (variables). Nếu muốn đổi màu `$primary` từ màu xanh mặc định sang `#E63946`, cần thực hiện các bước sau:

Đầu tiên cần cài đặt công cụ SASS và tải mã nguồn Bootstrap. Có thể cài SASS bằng Node.js:

```bash
npm install -g sass
```

Sau đó cài Bootstrap:

```bash
npm install bootstrap
```

Tiếp theo tạo một file SCSS riêng, ví dụ `custom.scss`.

Trong file này, khai báo lại biến `$primary` trước khi import Bootstrap:

```scss
$primary: #E63946;

@import "bootstrap/scss/bootstrap";
```

Sau đó biên dịch SCSS thành CSS:

```bash
sass custom.scss custom.css
```

File `custom.css` được tạo ra sẽ chứa toàn bộ Bootstrap với màu primary mới là `#E63946`.

Tất cả các thành phần sử dụng màu primary như:

 `.btn-primary`
 `.bg-primary`
 `.text-primary`
 `.border-primary`
 Các component liên quan

sẽ tự động đổi sang màu mới.

Không nên override trực tiếp:

```css
.btn-primary{
    background: red;
}
```

vì cách này chỉ thay đổi riêng nút `.btn-primary`.

Các class khác như:

```html
bg-primary
text-primary
border-primary
```

vẫn sử dụng màu xanh mặc định, dẫn đến giao diện không đồng nhất.

Ngoài ra, khi Bootstrap được cập nhật phiên bản mới, việc override thủ công nhiều class sẽ khó bảo trì và dễ phát sinh lỗi.

Sử dụng SASS variables giúp:

 Thay đổi màu sắc toàn bộ hệ thống chỉ ở một nơi.
 Đảm bảo tính nhất quán của giao diện.
 Dễ bảo trì và mở rộng.
 Tận dụng đúng cơ chế tùy biến mà Bootstrap cung cấp.

Vì vậy, khi cần thay đổi màu sắc hoặc theme của Bootstrap, nên chỉnh sửa SASS variables thay vì ghi đè trực tiếp các class CSS có sẵn.






# Câu C2 

Ví dụ CSS thuần để tạo Navbar Responsive:

```html
<nav class="navbar">
    <div class="logo">MyShop</div>

    <ul class="menu">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
    </ul>
</nav>
```

```css
.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#333;
    color:white;
    padding:16px;
}

.menu{
    display:flex;
    gap:20px;
    list-style:none;
}

@media (max-width:768px){
    .menu{
        display:none;
    }
}
```

Ví dụ Product Card:

```html
<div class="card">
    <img src="product.jpg" alt="">
    <h3>Product Name</h3>
    <p>Product Description</p>
    <button>Buy Now</button>
</div>
```

```css
.card{
    width:300px;
    border:1px solid #ddd;
    border-radius:8px;
    padding:16px;
}

.card img{
    width:100%;
}

.card button{
    background:#E63946;
    color:white;
    border:none;
    padding:10px 20px;
}
```

Trong Bootstrap, các thành phần tương đương chỉ cần:

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    ...
</nav>

<div class="card">
    <img class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">Product</h5>
        <button class="btn btn-primary">
            Buy Now
        </button>
    </div>
</div>
```

So sánh:

1. Số dòng CSS cần viết

CSS thuần:

* Navbar: khoảng 20–30 dòng CSS.
* Product Card: khoảng 15–20 dòng CSS.
* Tổng cộng khoảng 40–50 dòng CSS.

Bootstrap:

* Gần như không cần viết CSS.
* Chỉ sử dụng các class có sẵn của Bootstrap.

2. Thời gian phát triển

CSS thuần:

* Mất nhiều thời gian hơn.
* Phải tự viết layout, responsive, spacing và styling.

Bootstrap:

* Phát triển rất nhanh.
* Có thể tạo giao diện hoàn chỉnh chỉ với các class có sẵn.

3. Khả năng tùy biến

CSS thuần:

* Tùy biến gần như không giới hạn.
* Có thể thiết kế giao diện độc đáo theo ý muốn.

Bootstrap:

* Tùy biến được nhưng phụ thuộc vào hệ thống class của framework.
* Nếu chỉnh sửa quá nhiều có thể làm mất lợi thế của Bootstrap.

4. Khi nào nên dùng Bootstrap?

Nên dùng Bootstrap khi:

* Cần phát triển nhanh.
* Làm website quản trị (Dashboard).
* Làm landing page đơn giản.
* Prototype hoặc dự án học tập.
* Nhóm phát triển muốn thống nhất giao diện.

5. Khi nào không nên dùng Bootstrap?

Không nên dùng Bootstrap khi:

* Thiết kế yêu cầu giao diện độc quyền, khác biệt hoàn toàn.
* Website có hệ thống design riêng.
* Dự án cần tối ưu kích thước CSS tối đa.
* Muốn kiểm soát hoàn toàn giao diện và hiệu năng.

Kết luận:

Bootstrap giúp giảm đáng kể thời gian phát triển nhờ các component và utility classes có sẵn. Tuy nhiên, CSS thuần cho khả năng tùy biến cao hơn và phù hợp với các dự án yêu cầu thiết kế riêng biệt. Việc lựa chọn Bootstrap hay CSS thuần phụ thuộc vào mục tiêu, thời gian và yêu cầu của dự án.



