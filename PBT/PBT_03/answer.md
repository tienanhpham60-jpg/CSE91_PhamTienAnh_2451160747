## PHẦN A — KIỂM TRA ĐỌC HIỂU (CSS & BOX MODEL)
# Câu A1 — 3 Cách nhúng CSS
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

# Câu A2 — CSS Selectors — Dự đoán kết quả
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

# Câu A3 — Box Model — Tính toán kích thước
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

# Câu A4 — Specificity (Độ ưu tiên)
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


## PHẦN B — THỰC HÀNH CODE

# Bài B1 — Liệt kê các loại selector sử dụng trong file CSS
Để hoàn thành trang Profile, hệ thống mã nguồn đã áp dụng đầy đủ 5 loại bộ chọn khác nhau bao gồm:
1. Selector loại phần tử (Element selector): body, table, footer (áp dụng thuộc tính chung cho toàn bộ thẻ)
2. Selector định danh (ID selector): #main-header, #profile-avatar (gắn thuộc tính cho phần tử duy nhất)
3. Selector lớp (Class selector): .nav-link, .active-page (tái sử dụng cấu trúc cho nhiều thành phần)
4. Selector con cháu (Descendant selector): nav a, table th (định vị chính xác thẻ nằm bên trong một khối)
5. Selector giả (Pseudo-class selector): .nav-link:hover, tr:nth-child(even), tr:hover (tạo hiệu ứng tương tác động)

# Bài B2 — Kết quả thực nghiệm Box Model Lab

# Phần 1 — Chứng minh content-box và border-box
Sau khi chạy kiểm tra trực tiếp trên công cụ DevTools (tab Computed), kích thước thực tế hiển thị của hai hộp được ghi nhận như sau:
 Hộp 1 (áp dụng content-box): chiều rộng thực tế hiển thị trên trình duyệt = 350px (đo từ DevTools)
 Hộp 2 (áp dụng border-box): chiều rộng thực tế hiển thị trên trình duyệt = 300px (đo từ DevTools)

Giải thích sự khác biệt: Với thuộc tính content-box mặc định, chiều rộng thực tế sẽ bằng thông số width cộng thêm với phần padding và border hai bên (300 + 20 + 20 + 5 + 5 = 350px). Ngược lại, khi chuyển sang border-box, trình duyệt sẽ tự động bóp nhỏ không gian chứa nội dung bên trong lại để đảm bảo toàn bộ khung viền bên ngoài của hộp cố định đúng bằng kích thước width ban đầu là 300px.

## Phần 2 — Báo cáo tính toán hệ thống Layout 3 cột
Khi không sử dụng thuộc tính border-box, tổng chiều rộng của hệ thống sẽ bị phình to vượt mức cho phép do cộng dồn padding của các cột: 
Tổng kích thước = (250 + 15 + 15) + (500 + 20 + 20) + (250 + 15 + 15) = 280 + 540 + 280 = 1100px (vượt quá 100px so với container 1000px khiến các cột bị vỡ trận, đẩy xuống hàng dưới).
Giải pháp xử lý triệt để là áp dụng border-box cho cả 3 cột, lúc này kích thước thực tế của từng cột sẽ giữ nguyên theo đúng cấu hình (250px + 500px + 250px = 1000px), giúp bố cục nằm vừa vặn trên một hàng ngang.

# Bài B3 — Specificity Battle Báo cáo độ ưu tiên

# 1 Danh sách 10 quy tắc CSS xếp chồng theo thứ tự độ ưu tiên từ thấp đến cao:
 Quy tắc 1: * { color: gray; } -> Điểm số độ ưu tiên: (0, 0, 0)
 Quy tắc 2: p { color: silver; } -> Điểm số độ ưu tiên: (0, 0, 1)
 Quy tắc 3: p.text { color: maroon; } -> Điểm số độ ưu tiên: (0, 1, 1)
 Quy tắc 4: .text { color: purple; } -> Điểm số độ ưu tiên: (0, 1, 0)
 Quy tắc 5: .highlight { color: fuchsia; } -> Điểm số độ ưu tiên: (0, 1, 0)
 Quy tắc 6: .text.highlight { color: green; } -> Điểm số độ ưu tiên: (0, 2, 0)
 Quy tắc 7: p.text.highlight { color: lime; } -> Điểm số độ ưu tiên: (0, 2, 1)
 Quy tắc 8: #demo { color: olive; } -> Điểm số độ ưu tiên: (1, 0, 0)
 Quy tắc 9: p#demo { color: yellow; } -> Điểm số độ ưu tiên: (1, 0, 1)
 Quy tắc 10: p#demo.text.highlight { color: navy; } -> Điểm số độ ưu tiên: (1, 2, 1)

# 2 Kết quả hiển thị màu sắc cuối cùng
 Phần tử văn bản cuối cùng trên màn hình sẽ hiển thị màu xanh hải quân (navy)
 Giải thích lý do: Quy tắc số 10 sở hữu bộ selector chi tiết nhất kết hợp giữa ID, hai Class và thẻ phần tử, đem lại trọng số điểm số cao nhất là (1, 2, 1). Do đó nó hoàn toàn áp đảo các quy tắc tính điểm còn lại để hiển thị màu sắc này.

# 3 Thử nghiệm thay đổi thứ tự các quy tắc trong file CSS
Khi ta tiến hành thay đổi xáo trộn thứ tự đứng trước sau của các quy tắc trong file CSS, màu sắc hiển thị của phần tử hoàn toàn không bị thay đổi.
Giải thích: Trình duyệt web luôn ưu tiên so sánh dựa trên điểm số trọng số Specificity trước tiên chứ không dựa vào thứ tự dòng lệnh. Do quy tắc số 10 vẫn giữ nguyên điểm số cao nhất nên cho dù đảo nó lên đầu file hay giữa file thì nó vẫn giành chiến thắng. Thứ tự dòng lệnh xếp sau chỉ có tác dụng khi hai quy tắc có điểm số độ ưu tiên bằng nhau hoàn toàn.


Danh sách 10 Rules và Specificity Score:

* : (0,0,0,0)

p : (0,0,0,1)

.text : (0,0,1,0)

.text.highlight : (0,0,2,0)

p[id="demo"] : (0,0,1,1)

p.text : (0,0,1,1)

#demo : (0,1,0,0)

#demo.text : (0,1,1,0)

#demo p : (0,1,0,1)

Inline Style : (1,0,0,0)

Kết quả:

Phần tử hiển thị màu gì? Nếu bạn dùng inline style, nó sẽ màu đỏ. Nếu không có inline style, nó sẽ lấy màu của rule có độ đặc hiệu cao nhất (theo ví dụ trên là màu vàng xanh yellowgreen của #demo.text).

Tại sao? Trình duyệt ưu tiên rule có độ đặc hiệu (specificity) cao hơn. Specificity giống như một hệ thống "cấp bậc", dù bạn viết rule đó ở dòng đầu tiên hay cuối cùng của file CSS, rule có cấp bậc cao hơn vẫn sẽ thắng.

Thay đổi thứ tự rules:

Kết quả có đổi không? KHÔNG đổi (ngoại trừ trường hợp 2 rule có cùng độ đặc hiệu).

Giải thích: Nếu hai rule có cùng độ đặc hiệu (ví dụ .text và .highlight), lúc này trình duyệt mới áp dụng quy tắc "cái nào đứng sau cùng sẽ đè lên cái trước". Nhưng với các rule có độ đặc hiệu khác nhau, trình duyệt luôn chọn rule "mạnh nhất" bất kể nó nằm ở vị trí nào trong file CSS.