PHẦN A — KIỂM TRA ĐỌC HIỂU

Câu A1 — HTTP & Browser
Nguồn tham chiếu từ file 01_introduction_html_universe.md mục How the Web Works & Browser Mechanics.

1. Quy trình xử lý khi gõ URL https://shopee.vn:
Trình duyệt sẽ đọc địa chỉ để nhận diện giao thức bảo mật HTTPS và tên miền shopee.vn.
Tiếp theo nó thực hiện DNS Lookup để tra cứu bộ nhớ cache hoặc gửi yêu cầu lên DNS Server nhằm dịch tên miền shopee.vn sang địa chỉ IP của máy chủ.
Sau khi có IP, trình duyệt tiến hành bắt tay 3 bước TCP (TCP Handshake) để thiết lập kết nối, đồng thời xác thực chứng chỉ TLS/SSL nhằm mã hóa dữ liệu.
Kết nối xong, trình duyệt gửi một HTTP GET Request lên server Shopee để xin nội dung trang chủ.
Server xử lý xong sẽ phản hồi mã trạng thái 200 OK kèm theo file HTML. Trình duyệt tải file này về, đọc từ trên xuống để xây dựng cây DOM, tải tiếp các file CSS, JS, hình ảnh liên quan rồi vẽ giao diện lên màn hình.

2. Tab Network trong DevTools:
Tab này dùng để theo dõi toàn bộ quá trình truyền tải dữ liệu giữa máy tính của mình và server. Nhìn vào đây ta sẽ biết được các file tải thành công hay lỗi, dung lượng bao nhiêu và tốn bao nhiêu thời gian để tải xong.
Khi chụp ảnh màn hình để đánh dấu:
Xem cột Status ở ngay dòng đầu tiên của danh sách để tìm Status Code của request đầu tiên (thường là số 200 màu xanh).
Nhìn xuống thanh trạng thái ở mép dưới cùng của tab Network để tìm thông số tổng thời gian load trang (chỗ ghi Load: X.XX s).
Tìm file có đuôi .css ở cột Name hoặc chữ stylesheet ở cột Type để đánh dấu một request trả về file CSS.



Câu A2 — Semantic HTML
Nguồn tham chiếu từ Chương 04 mục Semantic Elements & Accessibility.

1. Lý do điểm SEO thấp:
Trang web này bị lạm dụng thẻ div quá nhiều để chia bố cục. Khi bot của Google quét qua, nó chỉ thấy các khối trống rỗng mà không thể hiểu được đâu là phần đầu trang, nội dung chính hay chân trang. Điều này khiến cấu trúc trang trở nên mơ hồ, làm giảm khả năng lập chỉ mục của công cụ tìm kiếm và không hỗ trợ tốt cho các trình đọc màn hình.

2. Các lỗi cụ thể và cách sửa:
Lỗi 1: Dùng div bọc đầu trang <div class="header"> -> Cần sửa thành thẻ <header>.
Lỗi 2: Menu điều hướng dùng <div class="menu"> -> Cần sửa thành thẻ <nav>.
Lỗi 3: Tên sản phẩm dùng thẻ div <div class="title"> -> Nên đổi sang dùng thẻ heading như h2 hoặc h3 để Google nhận diện từ khóa tốt hơn.
Lỗi 4: Khối bọc sản phẩm dùng <div class="product"> -> Nên đổi thành <article> vì đây là một cụm nội dung độc lập.
Lỗi 5: Phần chân trang dùng <div class="footer"> -> Cần sửa thành thẻ <footer>.

3. Code HTML sau khi sửa lại:
<header>
    <div class="logo">ShopTLU</div>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <article class="product">
        <h2>iPhone 16 Pro</h2>
        <p class="price">25.990.000đ</p>
        <figure class="image">
            <img src="iphone.jpg" alt="Điện thoại iPhone 16 Pro chính hãng">
        </figure>
    </article>
</main>

<footer>© 2026 ShopTLU</footer>



Câu A3 — Block vs Inline
Nguồn tham chiếu từ Chương 03 & 04 mục Display property: Block vs Inline.

1. Kết quả hiển thị trên màn hình:
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3

2. Giải thích:
Thẻ div là phần tử khối (Block-level element). Đặc tính mặc định của nó là luôn chiếm trọn 100% chiều ngang của hàng và tự động đẩy các phần tử phía sau xuống dòng mới. Vì thế các chữ Hộp 1, Hộp 2, Hộp 3 đều nằm riêng biệt ở các dòng khác nhau.
Thẻ span và strong là các phần tử nội dòng (Inline element). Chúng chỉ chiếm vừa đủ khoảng không gian của phần chữ bên trong và cho phép các phần tử inline khác đứng kế bên trên cùng một hàng. Do đó Text A đứng cạnh Text B, còn Text C đứng cạnh Text D mà không bị xuống dòng.



Câu A4 — Table
Nguồn tham chiếu từ Chương 05 mục HTML Tables & Data Structure.

1. Phân biệt thead, tbody, tfoot:
Thẻ thead dùng để nhóm các hàng chứa tiêu đề cột của bảng, bên trong thường chứa các thẻ th để làm nổi bật tiêu đề.
Thẻ tbody dùng để chứa toàn bộ các hàng dữ liệu và nội dung chính của bảng bằng các thẻ td.
Thẻ tfoot dùng để nhóm các hàng chứa thông tin tổng kết, thống kê hoặc ghi chú ở dưới cùng của bảng.

2. Các lý do không nên dùng table để làm layout website:
Khả năng responsive rất kém. Cấu trúc hàng cột của table rất cứng nhắc nên khi xem trên màn hình điện thoại nhỏ, các ô dữ liệu dễ bị bóp méo hoặc tràn ra ngoài màn hình, rất khó xếp dọc lại như khi dùng Flexbox hay Grid.
Gây ảnh hưởng xấu đến SEO và Accessibility. Trình đọc màn hình dành cho người khiếm thị sẽ đọc nội dung theo thứ tự từng ô từ trái sang phải, làm đảo lộn hoàn toàn thứ tự đọc hiểu logic của một giao diện thông thường.
Làm chậm tốc độ tải trang. Trình duyệt buộc phải nhận đầy đủ toàn bộ dữ liệu nằm trong thẻ table thì mới có thể tính toán chính xác kích thước hàng cột để render giao diện, tạo ra độ trễ lớn cho người dùng.
    

PHẦN C — SỬA LỖI MÃ NGUỒN (DEBUG)

Danh sách các lỗi phát hiện trong file HTML cũ và cách khắc phục:

Lỗi 1 ở dòng 1: Khai báo <!DOCTYPE> viết thiếu chữ html -> Sửa lại thành <!DOCTYPE html>.
Lỗi 2 ở dòng 1: Thẻ html mở đầu trang web thiếu thuộc tính ngôn ngữ -> Sửa lại thành <html lang="vi">.
Lỗi 3 ở dòng 2: Thẻ <title> bị quên không đóng thẻ -> Thêm </title> vào ngay sau chữ Trang web.
Lỗi 4 ở dòng 3: Thuộc tính mã hóa kí tự charset viết sai chuẩn utf8 -> Sửa lại thành charset="UTF-8".
Lỗi 5 ở dòng 3: Thiếu thẻ meta viewport để hiển thị responsive trên di động -> Thêm <meta name="viewport" content="width=device-width, initial-scale=1.0">.
Lỗi 6 ở dòng 4: Thẻ tiêu đề chính <h1> viết nhầm thẻ đóng thành thẻ mở <h1> -> Sửa lại thành </h1> ở cuối dòng.
Lỗi 7 ở dòng 8: Thẻ liên kết <a> của chữ Trang chủ viết sai thẻ đóng thành thẻ mở <a> -> Sửa lại thành </a>.
Lỗi 8 ở dòng 17: Thẻ <img> thiếu thuộc tính alt bắt buộc và giá trị src không nằm trong dấu nháy kép -> Sửa lại thành <img src="iphone.jpg" alt="iPhone 16 Pro">.
Lỗi 9 ở dòng 19: Thẻ <b> và thẻ <p> đang bị đóng lồng chéo nhau sai quy tắc -> Sửa lại thứ tự thành <b>25.990.000đ</b></p>.
Lỗi 10 ở dòng 25: Hàng đầu tiên của bảng chứa tiêu đề nhưng lại lạm dụng thẻ dữ liệu td -> Sửa các thẻ td đó thành thẻ th và bọc trong khối thead.
Lỗi 11 ở dòng 37: Trang web xuất hiện tới hai thẻ <main> trong khi quy chuẩn chỉ cho phép một thẻ độc nhất, đồng thời gắn sai ngữ nghĩa cho sidebar -> Bỏ thẻ <main> thứ hai đi và thay bằng thẻ <aside>.
Lỗi 12 ở dòng 42: Thẻ <p> ở phần chân trang footer bị quên không đóng -> Thêm thẻ đóng </p> vào sau cụm từ Copyright 2026.