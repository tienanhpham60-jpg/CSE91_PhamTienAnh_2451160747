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

