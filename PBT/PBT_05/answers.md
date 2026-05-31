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



# Câu C1  – Phân tích Responsive Design

# Website được chọn

YouTube (https://www.youtube.com)



# 1. Mobile (375px)

# Navigation

- Giao diện được tối giản để phù hợp với màn hình điện thoại.
- Sidebar bên trái được thu gọn hoặc ẩn.
- Thanh tìm kiếm chiếm ít không gian hơn.
- Một số menu và tính năng phụ được đưa vào biểu tượng hoặc menu ẩn.

# Content Grid

- Các video hiển thị theo 1 cột.
- Mỗi video chiếm gần toàn bộ chiều rộng màn hình.

# Elements bị ẩn trên Mobile

- Sidebar mở rộng.
- Một số menu điều hướng bên trái.
- Một số thông tin phụ hoặc gợi ý mở rộng.

# Font Size

- Kích thước chữ nhỏ hơn so với Tablet và Desktop để phù hợp màn hình nhỏ.
- Nội dung vẫn đảm bảo dễ đọc.



# 2. Tablet (768px)

# Navigation

- Sidebar xuất hiện dưới dạng thu gọn.
- Thanh tìm kiếm rộng hơn Mobile.
- Nhiều thành phần điều hướng được hiển thị hơn.

# Content Grid

- Hiển thị khoảng 2–3 cột video.
- Tận dụng không gian màn hình tốt hơn so với Mobile.

# Elements bị ẩn trên Tablet

- Một số menu phụ vẫn được thu gọn.
- Sidebar chưa hiển thị đầy đủ như Desktop.

# Font Size

- Lớn hơn Mobile.
- Khoảng cách giữa các thành phần giao diện được tăng lên.



# 3. Desktop (1440px)

# Navigation

- Sidebar hiển thị đầy đủ.
- Thanh tìm kiếm mở rộng.
- Các nút chức năng xuất hiện đầy đủ trên thanh điều hướng.

# Content Grid

- Hiển thị khoảng 5–6 cột video.
- Mật độ nội dung cao hơn do không gian màn hình lớn.

# Elements bị ẩn trên Desktop

- Hầu như không có thành phần chính nào bị ẩn.
- Tất cả khu vực điều hướng và nội dung đều được hiển thị.

# Font Size

- Lớn và dễ đọc hơn.
- Khoảng cách giữa các thành phần được tối ưu cho màn hình lớn.

YouTube sử dụng Responsive Web Design để thích nghi với nhiều kích thước màn hình khác nhau. Trên Mobile, giao diện được tối giản với ít thành phần hiển thị hơn và nội dung được sắp xếp thành một cột. Trên Tablet, số lượng cột nội dung tăng lên và thanh điều hướng được mở rộng hơn. Trên Desktop, giao diện hiển thị đầy đủ các thành phần như sidebar, thanh tìm kiếm và nhiều cột video hơn. Qua DevTools có thể thấy website sử dụng các media queries để thay đổi bố cục, kích thước và cách hiển thị nội dung theo từng breakpoint.