PHẦN A — KIỂM TRA ĐỌC HIỂU

Câu A1 — HTTP & Browser


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

Lỗi 1: Dòng 1 — Khai báo <!DOCTYPE> viết thiếu từ khóa html cấu trúc hệ thống — Thay đổi thành <!DOCTYPE html>
Lỗi 2: Dòng 1 — Thẻ <html> mở đầu thiếu thuộc tính ngôn ngữ hỗ trợ SEO — Sửa thành <html lang="vi">
Lỗi 3: Dòng 2 — Thẻ <title> bị bỏ quên, thiếu thẻ đóng hỏng cấu trúc phân tích head — Thêm thẻ đóng để thành <title>Trang web</title>
Lỗi 4: Dòng 3 — Giá trị thuộc tính charset của thẻ meta viết sai định dạng utf8 — Đổi utf8 thành utf-8 chuẩn hóa
Lỗi 5: Dòng 3 — Thiếu thẻ meta viewport cấu hình hiển thị responsive co giãn giao diện di động — Bổ sung thẻ <meta name="viewport" content="width=device-width, initial-scale=1.0">
Lỗi 6: Dòng 4 — Thẻ tiêu đề chính <h1> viết sai cú pháp thẻ đóng thành thẻ mở <h1> — Sửa thẻ đóng ở cuối dòng thành </h1>
Lỗi 7: Dòng 8 — Thẻ liên kết <a> của từ Trang chủ viết sai cú pháp thẻ đóng thiếu dấu gạch chéo — Đổi thẻ mở <a> ở cuối cụm từ thành thẻ đóng </a>
Lỗi 8: Dòng 17 — Thẻ hình ảnh <img> thiếu thuộc tính mô tả alt và giá trị src không bọc nháy kép — Sửa thành <img src="iphone.jpg" alt="iPhone 16 Pro">
Lỗi 9: Dòng 19 — Thẻ nhấn mạnh <b> và thẻ đoạn văn <p> bị đóng lồng chéo, sai thứ tự phân cấp DOM — Sửa lại trật tự đóng thẻ thành <b>25.990.000đ</b></p>
Lỗi 10: Dòng 25 — Bảng dữ liệu lạm dụng toàn bộ thẻ dữ liệu td ở hàng đầu tiên thay vì tiêu đề cột — Đổi các thẻ td hàng đầu thành thẻ th và bọc trong khối thead
Lỗi 11: Dòng 37 — Sử dụng hai thẻ <main> trên cùng một trang và gắn sai ngữ nghĩa cho vùng thông tin phụ sidebar — Chỉ giữ lại một thẻ <main> duy nhất, chuyển khối dữ liệu phụ thành thẻ <aside>
Lỗi 12: Dòng 42 — Thẻ đoạn văn <p> trong khu vực chân trang footer bị bỏ quên không có thẻ đóng — Thêm thẻ đóng </p> vào sau cụm từ Copyright 2026


# PHẦN C — SUY LUẬN

# Câu C1 — Thiết kế cấu trúc HTML cho trang chi tiết sản phẩm

<header>
    <nav aria-label="Menu chính">
        <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>

<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/dien-thoai">Điện thoại</a></li>
        <li>iPhone 16</li>
    </ol>
</nav>

<main>

    <article class="product-details">
        
        <section class="product-gallery">
            <h2>Hình ảnh sản phẩm</h2>
            <figure>
                <img src="iphone16-main.jpg" alt="iPhone 16 bản chính thức mặt trước">
                <img src="iphone16-side1.jpg" alt="iPhone 16 góc nghiêng cạnh trái">
                <img src="iphone16-side2.jpg" alt="iPhone 16 góc nghiêng cạnh phải">
                <img src="iphone16-back.jpg" alt="iPhone 16 mặt lưng">
                <img src="iphone16-box.jpg" alt="Hộp đựng iPhone 16">
                <figcaption>Bộ ảnh thực tế các góc cạnh của iPhone 16</figcaption>
            </figure>
        </section>

        <section class="product-info">
            <h1>Điện thoại iPhone 16 128GB Chính Hãng</h1>
            
            <p class="rating">Đánh giá: 5/5 sao (120 bình luận)</p>
            <p class="price">Giá bán: <strong>22.990.000đ</strong></p> <p class="description">Mô tả ngắn: Thiết kế camera dọc mới, chip A18 mạnh mẽ và nút Control Camera đột phá.</p>
        </section>

        <section class="product-specs">
            <h2>Thông số kỹ thuật</h2>
            <table>
                <tbody>
                    <tr>
                        <th scope="row">Màn hình</th> <td>6.1 inch, Super Retina XDR</td>
                    </tr>
                    <tr>
                        <th scope="row">Chipset</th>
                        <td>Apple A18</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="product-reviews">
            <h2>Đánh giá từ khách hàng</h2>
            <article class="review-item">
                <h3>Nguyễn Văn A</h3>
                <p>Máy dùng rất mượt, pin trâu hơn hẳn đời trước. Đóng gói giao hàng nhanh.</p>
            </article>
        </section>

    </article>

    <aside class="suggested-products">
        <h2>Sản phẩm tương tự</h2>
        <ul>
            <li><a href="/iphone-16-pro">iPhone 16 Pro</a></li>
            <li><a href="/iphone-15">iPhone 15</a></li>
        </ul>
    </aside>

</main>

<footer>
    <p>&copy; 2026 Shopee/Tiki Clone. All rights reserved.</p>
</footer>

Câu C2 — So sánh & Tranh luận về Semantic HTML
Quan điểm "chỉ cần dùng thẻ <div> rồi thêm class" nghe thì có vẻ nhanh ở giai đoạn đầu, nhưng xét về mặt kỹ thuật lâu dài thì đó là một tư duy sai lầm lớn.

Thứ nhất, về mặt SEO, các công cụ tìm kiếm như Google dựa vào thẻ semantic để hiểu cấu trúc trang web. Một con bot không thể biết <div class="title"> quan trọng hơn <div class="footer"> vì đối với nó, mọi thẻ <div> đều có giá trị bằng không. Việc dùng đúng thẻ <h1>, <main>, <article> giúp trang web có "bộ khung" rõ ràng, từ đó được xếp hạng từ khóa tốt hơn trên Google. Thứ hai là vấn đề Accessibility (khả năng tiếp cận). Trình đọc màn hình (Screen Reader) của người khiếm thị sẽ đọc dựa trên các cột mốc thẻ ngữ nghĩa. Nếu toàn bộ trang chỉ là thẻ <div>, người khiếm thị sẽ hoàn toàn bị "lạc lối" vì phần mềm không thể phân biệt nổi đâu là thanh menu, đâu là nội dung bài viết để đọc cho họ nghe.

Một ví dụ cụ thể: Nếu ta đổi cụm nút mua hàng từ <div class="btn" onclick="...">Mua ngay</div> thành thẻ chuẩn <button type="button">Mua ngay</button>, trang web sẽ tự động kích hoạt khả năng nhấn Enter/Space để chọn nút mà không cần lập trình viên phải viết thêm một đống code JavaScript bắt sự kiện bàn phím cho người dùng lướt web bằng phím tab.

Tuy nhiên, thẻ <div> không hoàn toàn bị loại bỏ. Nó vẫn là lựa chọn hoàn hảo nhất trong các trường hợp mang tính chất thuần trang trí, làm layout hoặc bọc các khối để viết CSS (ví dụ như tạo một lớp màng bọc mờ overlay, tạo khung bo tròn bao ngoài để căn lề flexbox, chia layout 2 cột). Ở những vị trí đó, cái ta cần là một chiếc hộp trống rỗng không mang bất kỳ ngữ nghĩa nào, và đó chính là lúc thẻ <div> phát huy tác dụng