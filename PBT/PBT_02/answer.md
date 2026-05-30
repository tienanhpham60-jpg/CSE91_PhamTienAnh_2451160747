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