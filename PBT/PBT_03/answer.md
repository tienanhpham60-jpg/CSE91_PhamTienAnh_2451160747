PHẦN A — KIỂM TRA ĐỌC HIỂU (CSS & BOX MODEL)
Câu A1 — 3 Cách nhúng CSS
1 Cách nhúng Inline (Trực tiếp trên thẻ)
Ví dụ code

HTML
<p style="color: blue; font-size: 16px;">Đoạn văn này có màu xanh</p>
Ưu điểm và nhược điểm

Ưu điểm: Áp dụng nhanh cho một phần tử riêng lẻ, không cần tạo file hay viết vùng chọn, độ ưu tiên cao nhất trong các kiểu nhúng thông thường

Nhược điểm: Làm mã HTML bị rối, khó quản lý khi code nhiều lên, không thể tái sử dụng lại mã CSS cho các thẻ khác nên file sẽ rất nặng

Khi nào nên dùng
Dùng khi cần test nhanh giao diện trên trình duyệt, hoặc khi cần can thiệp trực tiếp thuộc tính style bằng JavaScript vào một phần tử cụ thể

2 Cách nhúng Internal (Trong thẻ style ở đầu trang)
Ví dụ code

HTML
<head>
    <style>
        body { background-color: #f0f0f0; }
        .main-title { color: #333; text-align: center; }
    </style>
</head>
Ưu điểm và nhược điểm

Ưu điểm: Gom code CSS của một trang vào một chỗ dễ quản lý, tái sử dụng được các class và id cho nhiều thẻ khác nhau trong cùng trang đó

Nhược điểm: Code CSS chỉ có tác dụng trong file HTML này, không áp dụng được sang các trang khác trong cùng một website

Khi nào nên dùng
Dùng cho các trang web độc lập, trang đơn làm sự kiện hoặc các bài tập nhỏ chỉ cần viết trên một file duy nhất

3 Cách nhúng External (Dùng file .css độc lập nằm ngoài)
Ví dụ code

HTML
<link rel="stylesheet" href="style.css">
Nội dung file style.css riêng biệt

CSS
.product-card {
    border: 1px solid #ddd;
    padding: 15px;
}
Ưu điểm và nhược điểm

Ưu điểm: Tách biệt hoàn toàn giao diện và nội dung, một file CSS dùng được cho nhiều trang HTML cùng lúc, trình duyệt tải một lần rồi lưu vào bộ nhớ đệm nên các trang sau sẽ mở rất nhanh

Nhược điểm: Tạo thêm một yêu cầu tải file từ máy chủ về khi chạy trang, nếu file CSS bên ngoài lỗi hoặc mất kết nối thì trang web sẽ mất sạch giao diện

Khi nào nên dùng
Đây là cách làm chuẩn bắt buộc cho mọi dự án thực tế khi làm website nhiều trang chuyên nghiệp

Trả lời câu hỏi thêm về độ ưu tiên
Nếu cùng áp dụng cả 3 cách trên vào một phần tử, cách nhúng Inline sẽ thắng
Giải thích: Theo quy tắc tính độ ưu tiên, trình duyệt sẽ ưu tiên mã nằm gần phần tử nhất. Inline nằm ngay trong thẻ HTML nên có trọng số cao hơn Internal và External ở trên đầu trang hay ở file ngoài

Câu A2 — CSS Selectors — Dự đoán kết quả
Dựa vào cấu trúc cây thư mục HTML được cung cấp, dưới đây là kết quả chọn của từng selector

1 selector h1
Chọn: Thẻ tiêu đề chứa nội dung văn bản ShopTLU

2 selector .price
Chọn: Cả 2 thẻ p chứa giá tiền của hai sản phẩm là 25.990.000đ và 45.990.000đ

3 selector #app header
Chọn: Toàn bộ khối tiêu đề đầu trang chứa cả thẻ h1 và khối thanh điều hướng nav nằm bên trong phần tử có id app

4 selector nav a:first-child
Chọn: Thẻ liên kết đầu tiên nằm trong khối nav, cụ thể là chữ Home

5 selector .product.featured h2
Chọn: Thẻ tiêu đề h2 của sản phẩm nổi bật, cụ thể là chữ MacBook Pro

6 selector article > p
Chọn: Tất cả các thẻ p nằm trực tiếp bên trong thẻ bài viết article, cụ thể gồm 4 đoạn văn: 25.990.000đ, Mô tả sản phẩm... của điện thoại và 45.990.000đ, Mô tả sản phẩm... của máy tính

7 selector a[href="/"]
Chọn: Thẻ liên kết có đường dẫn trỏ về trang chủ, cụ thể là chữ Home

8 selector .top-bar.dark h1
Chọn: Thẻ tiêu đề h1 nằm trong khối header có chứa cả hai class top-bar và dark, cụ thể là chữ ShopTLU

Câu A3 — Box Model — Tính toán kích thước
1 Trường hợp 1: áp dụng thuộc tính content-box
Chiều rộng hiển thị thực tế trên màn hình = width + padding trái + padding phải + border trái + border phải = 400 + 20 + 20 + 5 + 5 = 450px
Không gian chiếm dụng trên bố cục trang = Chiều rộng hiển thị + margin trái + margin phải = 450 + 10 + 10 = 470px

2 Trường hợp 2: áp dụng thuộc tính border-box
Chiều rộng hiển thị thực tế trên màn hình = Đóng băng cố định theo thuộc tính width = 400px
Kích thước vùng chứa nội dung thực tế bên trong = width - (padding trái + phải) - (border trái + phải) = 400 - 40 - 10 = 350px
Không gian chiếm dụng trên bố cục trang = Chiều rộng hiển thị + margin trái + margin phải = 400 + 10 + 10 = 420px

3 Trường hợp 3: Hiện tượng Margin collapse (Sập lề dọc)
Khoảng cách thực tế giữa đáy box-a và đỉnh box-b = 40px
Giải thích tại sao không phải 65px: Trong CSS, khi hai khối nằm xếp chồng dọc lên nhau, khoảng cách lề dọc của chúng sẽ bị hòa tan vào nhau chứ không cộng dồn. Trình duyệt sẽ tự động lấy giá trị lớn nhất trong hai lề để áp dụng, ở đây lề trên của box-b là 40px lớn hơn lề dưới 25px của box-a nên khoảng cách thực tế sẽ là 40px

Giải bài tập nâng cao
Nếu box-a có lề dưới âm -10px và box-b có lề trên dương 40px, quy tắc tính lề sập lúc này sẽ bằng tổng đại số của lề dương lớn nhất cộng với lề âm. Khoảng cách thực tế giữa hai khối sẽ là: 40px + (-10px) = 30px

Câu A4 — Specificity (Độ ưu tiên)
1 Điểm số độ ưu tiên Specificity Score (a, b, c) của từng dòng lệnh
Rule A (p): Điểm số là (0, 0, 1) vì chỉ có 1 selector thẻ loại phần tử
Rule B (.price): Điểm số là (0, 1, 0) vì sở hữu 1 selector dạng class
Rule C (#main-price): Điểm số là (1, 0, 0) vì sở hữu 1 selector dạng id
Rule D (p.price): Điểm số là (0, 1, 1) vì kết hợp giữa 1 thẻ phần tử và 1 class

2 Kết quả hiển thị màu sắc và giải thích
Thẻ văn bản sẽ hiển thị màu đỏ (red)
Giải thích: Trình duyệt so sánh điểm số từ trái qua phải, dòng Rule C sở hữu selector id đem lại trọng số (1, 0, 0) lớn nhất vượt trội hoàn toàn so với class và thẻ phần tử của các dòng còn lại, do đó nó sẽ đè bẹp các quy tắc khác để áp màu đỏ lên thẻ p

3 Trường hợp bổ sung thuộc tính inline style trực tiếp trên thẻ
Nếu thêm đoạn mã style="color: orange;" trực tiếp vào thẻ HTML, phần tử sẽ đổi sang màu cam (orange). Lý do là vì thuộc tính inline viết trực tiếp trên thẻ có cấp độ ưu tiên tối thượng, cao hơn tất cả các bộ vùng chọn viết trong file CSS bên ngoài

4 Trường hợp bổ sung từ khóa !important vào Rule A
Nếu dòng Rule A được gắn thêm từ khóa !important, phần tử sẽ chuyển sang hiển thị màu đen (black). Giải thích là vì từ khóa !important sẽ phá vỡ mọi quy tắc tính điểm thông thường, nó ép trình duyệt phải ưu tiên dòng lệnh chứa nó lên mức cao nhất, đè bẹp cả thuộc tính inline style hay selector dạng id