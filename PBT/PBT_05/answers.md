# Câu A1: Viewport & Mobile-First
Thẻ meta chuẩn:

Giải thích:

width=device-width: Thiết lập chiều rộng trang web khớp với chiều rộng màn hình thiết bị.

initial-scale=1.0: Đặt tỉ lệ hiển thị ban đầu là 1:1, giúp trang không bị phóng to hoặc thu nhỏ bất thường.

Nếu thiếu thẻ này: Trên iPhone và các thiết bị di động, trang web sẽ bị hiểu là màn hình desktop (980px), làm nội dung bị co bé lại, người dùng phải tự zoom để đọc.

Mobile-First vs Desktop-First:

Mobile-First: Ưu tiên code cho điện thoại trước, sau đó dùng min-width cho màn hình lớn hơn. Cách này tốt vì code mobile nhẹ hơn và tập trung vào nội dung chính.

Desktop-First: Code cho máy tính trước, dùng max-width để thu hẹp lại cho điện thoại.

Ví dụ breakpoint 768px:

Mobile-first: .box { width: 100%; } @media (min-width: 768px) { .box { width: 50%; } }

Desktop-first: .box { width: 50%; } @media (max-width: 767px) { .box { width: 100%; } }

# Câu A2: Breakpoints
Dưới 576px (Extra Small): Điện thoại - 1 cột.

Từ 576px (Small): Tablet nhỏ - 2 cột.

Từ 768px (Medium): Tablet/Laptop - 3 cột.

Từ 992px (Large): Desktop - 4 cột.

Từ 1200px (Extra Large): Màn hình lớn - 4 đến 6 cột.

# Câu A3: Media Queries
Tại mỗi kích thước màn hình, độ rộng của .container sẽ là:

Màn hình 375px: width là 100%

Màn hình 600px: width là 540px

Màn hình 800px: width là 720px

Màn hình 1000px: width là 960px

Màn hình 1400px: width là 1140px

# Câu A4: SCSS Basics
Variables ($): Lưu trữ màu sắc, font để dùng lại toàn trang. Ví dụ: $main-color: #333;.

Nesting: Viết CSS lồng nhau đúng cấu trúc HTML giúp code dễ đọc. Ví dụ: .nav { ul { li { ... } } }.

Mixins (@mixin): Tạo "hàm" CSS để gom các thuộc tính dùng lại nhiều lần. Ví dụ: @mixin center { display: flex; justify-content: center; }.

@extend: Cho phép selector kế thừa toàn bộ thuộc tính của selector khác, tránh lặp code.

Tại sao trình duyệt không đọc được .scss?
Trình duyệt chỉ hiểu CSS thuần. File .scss là file nguồn, bắt buộc phải qua bước biên dịch (compile) thành file .css thì trình duyệt mới hiểu được.