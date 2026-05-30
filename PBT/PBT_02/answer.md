# PHẦN A — KIỂM TRA ĐỌC HIỂU

# Câu A1 — Input Types

1. type="text"
Đây là ô nhập chữ và số cơ bản nhất, giao diện hiển thị là một ô trống màu trắng thông thường. Kiểu này không có tính năng tự động kiểm tra dữ liệu đầu vào. Trong các trang bán hàng, nó thường được áp dụng trực tiếp cho các ô điền Họ và tên, Địa chỉ nhận hàng hoặc Số nhà của người mua

2. type="email"
Giao diện của nó nhìn giống hệt ô nhập văn bản thông thường nhưng trình duyệt sẽ tự động kiểm tra xem chuỗi ký tự người dùng gõ có chứa ký hiệu @ và phần tên miền phía sau hay không. Ô này bắt buộc phải dùng cho các biểu mẫu Đăng ký hoặc Đăng nhập tài khoản trên hệ thống
3. type="password"
Khi người dùng gõ chữ vào ô này, các ký tự sẽ tự động biến thành các dấu chấm tròn đen hoặc dấu sao để bảo mật thông tin. Trình duyệt không tự kiểm tra dữ liệu ở đây trừ khi ta cài thêm thuộc tính phụ. Ứng dụng thực tế là dùng làm ô nhập mật khẩu tài khoản khách hàng

4. type="number"
Ô này hiển thị kèm theo hai mũi tên lên xuống nhỏ ở góc phải để tăng giảm giá trị. Hệ thống sẽ tự động chặn không cho người dùng gõ chữ vào và báo lỗi nếu số nhập vào nằm ngoài khoảng quy định. Trên website thương mại điện tử, nó được dùng để chọn số lượng sản phẩm trong giỏ hàng
5. type="tel"
Về giao diện thì nó là một ô nhập văn bản bình thường và không tự động ép người dùng nhập đúng định dạng số điện thoại trừ khi lập trình viên cài thêm bộ lọc. Ô này dùng để lưu số điện thoại liên hệ của người nhận hàng ở bước thanh toán

6. type="date"
Ô này hiển thị sẵn cấu hình ngày tháng năm kèm theo một biểu tượng lịch nhỏ, khi bấm vào sẽ hiện ra bảng lịch điện tử để chọn ngày. Trình duyệt sẽ tự động kiểm tra tính hợp lệ của ngày tháng theo thời gian thực. Ứng dụng cụ thể là dùng cho mục chọn ngày sinh nhật của khách hàng khi đăng ký thành viên

7. type="checkbox"
Nó hiển thị dưới dạng một ô vuông nhỏ cho phép người dùng bấm vào để hiện dấu tích chọn, dùng được cho việc chọn nhiều phương án cùng lúc. Ô này thường thấy ở bộ lọc tìm kiếm sản phẩm, ví dụ như cho phép khách hàng tích chọn cùng lúc các thương hiệu Apple, Samsung và Xiaomi

8. type="radio"
Giao diện của nó là các nút hình tròn nhỏ, chỉ cho phép chọn duy nhất một phương án trong một nhóm. Nếu cài thuộc tính bắt buộc, người dùng không thể bỏ qua mục này khi gửi form. Ô này áp dụng để chọn phương thức thanh toán như thanh toán khi nhận hàng, thẻ ngân hàng hoặc ví điện tử

9. type="file"
Nó hiển thị dưới dạng một nút bấm có chữ Chọn tệp. Trình duyệt sẽ mở cửa sổ máy tính để người dùng tải file lên và có thể tự động chặn các file sai đuôi quy định. Ứng dụng thực tế là dùng khi khách hàng muốn tải ảnh hóa đơn chuyển khoản hoặc ảnh chụp sản phẩm lỗi để yêu cầu hoàn tiền

10. type="search"
Ô này nhìn giống ô nhập văn bản thông thường nhưng có thêm một dấu x nhỏ ở góc phải để người dùng xóa nhanh toàn bộ chữ vừa gõ. Nó được dùng làm thanh tìm kiếm tên sản phẩm nằm trên đầu trang web


# Câu A2 — Validation Attributes

Dự đoán kết quả khi người dùng bấm Submit cho từng trường hợp:

Trường hợp 1: Biểu mẫu sẽ bị trình duyệt chặn lại ngay lập tức và hiển thị một thông báo nhắc nhở người dùng không được bỏ trống ô này. Lý do là vì thẻ input có chứa thuộc tính required bắt buộc phải điền thông tin, trong khi giá trị mặc định đang để trống hoàn toàn.
Trường hợp 2: Form không gửi đi được và trình duyệt sẽ hiện cảnh báo yêu cầu người dùng phải nhập đúng cấu trúc email. Lý do là thuộc tính type="email" kích hoạt tính năng kiểm tra tự động của hệ thống, nên chuỗi văn bản abc do không có ký tự @ sẽ bị coi là không hợp lệ.
Trường hợp 3: Trình duyệt sẽ chặn nút gửi và thông báo rằng con số vừa nhập vượt quá mức cho phép. Lý do là giá trị nhập vào bằng 15, trong khi thuộc tính max="10" đã giới hạn mức tối đa mà ô số này được phép nhận chỉ là 10.
Trường hợp 4: Form sẽ báo lỗi nhập sai định dạng văn bản và dừng quá trình gửi dữ liệu. Lý do là thuộc tính pattern="[0-9]{10}" tạo ra một bộ lọc bắt buộc người dùng chỉ được gõ đúng 10 ký tự số, nên chuỗi vừa chữ vừa số abc123 chắc chắn bị từ chối
Trường hợp 5: Trình duyệt sẽ hiện thông báo chuỗi ký tự quá ngắn và yêu cầu nhập thêm. Lý do là thuộc tính minlength="8" quy định độ dài tối thiểu của mật khẩu phải từ 8 ký tự trở lên, nên chuỗi 123 do mới có 3 ký tự nên không vượt qua được bước kiểm tra này

Sau khi chạy thử nghiệm thực tế với file validation_test.html, các thông báo lỗi của trình duyệt hiển thị hoàn toàn trùng khớp với những dự đoán lý thuyết ở trên.



# Câu A3 — Accessibility
Thẻ label kết hợp với thuộc tính for="email" là thành phần cực kỳ quan trọng đối với người khiếm thị sử dụng phần mềm đọc màn hình. Khi họ dùng phím tab để di chuyển đến ô nhập liệu, phần mềm sẽ đọc to nội dung nằm trong thẻ label để họ biết ô đó dùng để điền thông tin gì. Nếu không có label, máy sẽ chỉ đọc một ô trống vô danh, khiến người dùng hoàn toàn bị lạc lối.
Cặp thẻ fieldset và legend được dùng khi form có quá nhiều câu hỏi và cần gom các ô nhập liệu có cùng chủ đề lại với nhau cho ngăn nắp, dễ hiểu. Ví dụ cụ thể là khi làm form thanh toán, ta gom các ô nhập số nhà, tên đường, quận huyện vào trong thẻ fieldset và đặt tiêu đề cho cả nhóm đó bằng thẻ legend với nội dung là Địa chỉ giao hàng.
Thuộc tính aria-label được dùng trong trường hợp một nút bấm hoặc một thành phần trên trang có chức năng tương tác nhưng lại không có chữ hiển thị trực quan trên màn hình, ví dụ như nút đóng form chỉ có icon dấu X hoặc nút tìm kiếm chỉ có icon kính lúp. Ta không nên dùng aria-label khi đã có thẻ label chuẩn vì thẻ label đã làm quá tốt nhiệm vụ cung cấp thông tin cho cả người thường lẫn phần mềm đọc màn hình, việc viết thêm aria-label dễ gây xung đột hệ thống hoặc khiến phần mềm đọc lặp lại từ hai lần.



# Câu A4 — Media

Thuộc tính loading="lazy" cài trên thẻ img có tác dụng trì hoãn việc tải hình ảnh cho đến khi người dùng cuộn màn hình đến gần vị trí của bức ảnh đó. Nó giúp trang web ban đầu tải nhanh hơn hẳn, tiết kiệm rất nhiều dung lượng mạng cho khách hàng vì không phải tải những bức ảnh nằm sâu bên dưới. Tuy nhiên, tuyệt đối không được dùng thuộc tính này cho các bức ảnh nằm ngay ở đầu trang như ảnh bìa hay biểu ngữ chính, vì nó sẽ gây ra hiện tượng ảnh bị chậm hiển thị khi vừa mở trang.
Việc cung cấp nhiều thẻ source bên trong thẻ video giúp đảm bảo trang web chạy mượt mà trên mọi trình duyệt khác nhau. Mỗi trình duyệt như Chrome, Safari hay Firefox lại ưa chuộng một kiểu giải mã video riêng, nếu nó không đọc được định dạng ở thẻ source thứ nhất thì sẽ tự động chuyển xuống đọc tiếp các thẻ source dự phòng ở bên dưới. Ba định dạng video phổ biến nhất trên web hiện nay là .mp4, .webm và .ogg.
Thuộc tính alt trên thẻ img dùng để hiển thị một đoạn văn bản thay thế trong trường hợp mạng bị lỗi không tải được ảnh, đồng thời giúp bot tìm kiếm hiểu nội dung ảnh để làm SEO. 
Với ảnh sản phẩm iPhone 16, dòng alt tốt sẽ là: alt="Điện thoại iPhone 16 phiên bản 128GB màu hồng chính hãng"
Với ảnh thuần túy mang tính chất trang trí giao diện, ta để trống giá trị: alt="" để phần mềm tự động bỏ qua.
Với ảnh biểu đồ doanh thu Q1/2026, dòng alt cần tóm tắt được số liệu: alt="Biểu đồ cột thể hiện doanh thu Quý 1 năm 2026 tăng trưởng 15% so với cùng kỳ năm ngoái"



# Câu A5 — So sánh figure vs img

Cách 1 (chỉ dùng thẻ img độc lập) được áp dụng khi bức ảnh đó chỉ đóng vai trò là một thành phần đồ họa nhỏ, mang tính chất trang trí hoặc bổ trợ nằm ngay trong dòng chữ của đoạn văn mà không cần tiêu đề giải thích đi kèm. Ví dụ thực tế là các icon hình giỏ hàng trên thanh công cụ hoặc hình ảnh avatar đại diện nhỏ của người dùng ở góc trang web.
Cách 2 (dùng khối figure bọc ngoài img và figcaption) được chọn khi bức ảnh đó là một nội dung quan trọng, đứng độc lập và bắt buộc phải có một dòng chú thích rõ ràng ở ngay bên dưới để người đọc hiểu được ý nghĩa. Ví dụ thực tế là khung hiển thị ảnh chi tiết của sản phẩm có kèm tên máy và giá tiền ở ngay dưới ảnh, hoặc các hình ảnh sơ đồ minh họa từng bước hướng dẫn người dùng cách kích hoạt ví điện tử.


# PHẦN C — PHÂN TÍCH & SUY LUẬN
# Câu C1 — Debug Form
Dưới đây là danh sách 8 lỗi được phát hiện trong đoạn mã nguồn biểu mẫu cũ cùng với giải pháp khắc phục chi tiết

Lỗi 1: Dòng 2 — Thẻ nhập liệu "Tên" viết chữ thô bên ngoài, không có thẻ label bọc hoặc gắn thuộc tính liên kết for, vi phạm nghiêm trọng quy chuẩn tiếp cận
Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required placeholder="Nhập họ và tên">

Lỗi 2: Dòng 4 — Ô nhập "Email" hoàn toàn không có nhãn hiển thị hoặc thẻ danh nghĩa, lạm dụng thuộc tính placeholder để thay thế nhãn điều hướng
Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" required placeholder="Email của bạn">

Lỗi 3: Dòng 6 — Ô nhập dữ liệu mật khẩu thứ nhất thiếu nhãn định danh và thiếu cấu hình độ dài tối thiểu an toàn minlength
Sửa: <label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" minlength="8" required placeholder="Nhập mật khẩu">

Lỗi 4: Dòng 7 — Ô xác nhận lại mật khẩu dùng trùng kiểu dữ liệu nhưng thiếu tên name và nhãn định danh để phân biệt với ô mật khẩu chính
Sửa: <label for="confirm_password">Nhập lại mật khẩu:</label> <input type="password" id="confirm_password" name="confirm_password" minlength="8" required placeholder="Nhập lại mật khẩu">

Lỗi 5: Dòng 9 — Ô nhập liệu "Phone" sử dụng sai kiểu dữ liệu hệ thống type="text" thay vì type="tel" và thiếu bộ lọc định dạng kiểm tra pattern
Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="Nhập số điện thoại 10 số">

Lỗi 6: Dòng 11 — Thẻ lựa chọn danh sách select không được đặt tên và không có nhãn liên kết hỗ trợ cho phần mềm đọc màn hình
Sửa: <label for="city">Thành phố:</label> <select id="city" name="city" required><option value="">-- Chọn thành phố --</option><option value="hn">Hà Nội</option><option value="hcm">TP.HCM</option></select>

Lỗi 7: Dòng 16 — Thẻ label của ô điều khoản viết trống rỗng bên ngoài, không chứa thuộc tính liên kết và thiếu thành phần tương tác chọn input type="checkbox"
Sửa: <input type="checkbox" id="terms" name="terms" required> <label for="terms">Tôi đồng ý điều khoản</label>

Lỗi 8: Dòng 19 — Nút gửi dữ liệu sử dụng thẻ cũ input type="submit" thay vì dùng thẻ thế hệ mới button type="submit" linh hoạt hơn theo thực tế làm việc
Sửa: <button type="submit">Gửi dữ liệu</button>

# Câu C2 — Thiết kế chiến lược Validation
1 Biểu thức chính quy cho các trường dữ liệu
Mã CMND/CCCD đúng 12 chữ số: pattern="[0-9]{12}"
Số tài khoản ngân hàng từ 10 đến 15 chữ số: pattern="[0-9]{10,15}"
Mã PIN đúng 6 chữ số và không hiển thị ký tự: type="password" pattern="[0-9]{6}" inputmode="numeric"

2 Đánh giá tính an toàn của HTML5 Validation đối với hệ thống ngân hàng số
HTML5 validation hoàn toàn không đủ an toàn cho một ứng dụng mang tính chất bảo mật cao như ngân bank. Các thuộc tính kiểm tra của HTML5 chỉ hoạt động như một lớp bảo vệ vòng ngoài trên giao diện người dùng. Lớp bảo vệ này cực kỳ dễ bị vô hiệu hóa hoặc vượt qua bởi bất kỳ ai có kiến thức cơ bản về công nghệ bằng cách tắt tính năng JavaScript trên trình duyệt, sửa mã nguồn trực tiếp qua công cụ Inspect F12, hoặc gửi các gói tin dữ liệu giả mạo bằng công cụ như Postman lên thẳng máy chủ.

3 Ba loại validation phức tạp mà HTML5 không thể làm được (Bắt buộc dùng JavaScript)
Đối chiếu chéo dữ liệu thời gian thực: Kiểm tra xem ô xác nhận mật khẩu có trùng khớp 100% với ô mật khẩu đã nhập trước đó hay không.
Kiểm tra tính logic của dữ liệu: Ví dụ như tính toán xem ngày sinh của người đăng ký mở tài khoản ngân hàng đã đủ 18 tuổi trở lên hay chưa dựa vào mốc thời gian thực tế hiện tại.
Xác thực bất đồng bộ với cơ sở dữ liệu: Gửi yêu cầu ngầm xuống máy chủ để kiểm tra xem số điện thoại hoặc email mà người dùng vừa gõ đã tồn tại trong hệ thống ngân hàng hay chưa để đưa ra cảnh báo trùng lặp ngay tại chỗ.

4 Hai rủi ro bảo mật nghiêm trọng nếu chỉ kiểm tra dữ liệu trên Frontend
Nguy cơ tấn công tiêm mã độc: Kẻ tấn công có thể dễ dàng sửa công cụ F12 để xóa bỏ thuộc tính lọc dữ liệu, sau đó chèn các chuỗi câu lệnh phá hoại vào các ô nhập liệu nhằm chiếm quyền kiểm soát hệ thống dữ liệu cốt lõi bên dưới máy chủ.
Rác dữ liệu và phá hoại hệ thống: Việc thiếu bộ lọc chặn dữ liệu ở Backend khiến máy chủ sẵn sàng tiếp nhận những thông tin sai lệch, định dạng rác gây lỗi logic tính toán, hoặc bị kẻ xấu chạy các đoạn script tự động gửi hàng nghìn đơn đăng ký rác liên tục làm nghẽn băng thông và sập hệ thống.