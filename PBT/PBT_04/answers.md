# Câu A1: 5 Loại Positioning trong CSS
1. static (Mặc định)

Chiếm chỗ trong flow: CÓ

Tham chiếu vị trí: Không (theo luồng tự nhiên)

Cuộn theo trang: CÓ

Use case: Các phần tử thông thường trên trang web.

2. relative

Chiếm chỗ trong flow: CÓ

Tham chiếu vị trí: Chính vị trí ban đầu của nó

Cuộn theo trang: CÓ

Use case: Chỉnh lệch vị trí nhẹ hoặc làm "cái mỏ neo" (gốc tọa độ) cho phần tử con absolute.

3. absolute

Chiếm chỗ trong flow: KHÔNG

Tham chiếu vị trí: Tổ tiên (ancestor) được định vị gần nhất (position khác static)

Cuộn theo trang: CÓ

Use case: Đặt các phần tử đè lên trên phần tử cha cụ thể.

4. fixed

Chiếm chỗ trong flow: KHÔNG

Tham chiếu vị trí: Cửa sổ trình duyệt (viewport)

Cuộn theo trang: KHÔNG (luôn nằm yên một chỗ)

Use case: Thanh menu cố định, nút "back to top".

5. sticky

Chiếm chỗ trong flow: CÓ

Tham chiếu vị trí: Phần tử cha cuộn gần nhất

Cuộn theo trang: CÓ (nhưng dính lại khi chạm ngưỡng top)

Use case: Header bảng hoặc menu dính khi cuộn qua nó.

Giải đáp câu hỏi thêm:
Khi nào absolute tham chiếu body?
Khi phần tử absolute đó không có tổ tiên nào được đặt position (khác static), nó sẽ mặc định lấy thẻ <html> hoặc <body> làm gốc.

Khi nào absolute tham chiếu parent?
Khi phần tử cha (hoặc bất kỳ tổ tiên nào) được thiết lập position là relative, absolute, fixed, hoặc sticky.

Khái niệm "nearest positioned ancestor":
Là phần tử cha/ông/cụ gần nhất mà có thuộc tính position (không phải là static). Khi bạn dùng absolute, con sẽ dựa vào phần tử này để tính tọa độ.

# Câu A2: Dự đoán Layout Flexbox & Grid
Trường hợp 1: display: flex; flex: 1; (4 items)

Bố cục: 1 hàng, 4 cột bằng nhau.

Giải thích: flex: 1 làm các item giãn đều để lấp đầy toàn bộ chiều ngang container.

Sơ đồ: [Item1][Item2][Item3][Item4]

Trường hợp 2: display: flex; flex-wrap: wrap; (6 items, width 45%, margin 2.5%)

Bố cục: 3 hàng, mỗi hàng 2 cột.

Giải thích: Mỗi item chiếm 45% + 5% (tổng 2 margin 2.5%) = 50%. Vì 50% * 2 = 100%, hàng thứ 3 sẽ tự xuống dòng.

Sơ đồ:
[I1][I2]
[I3][I4]
[I5][I6]

Trường hợp 3: display: flex; justify-content: space-between; align-items: center; (3 items)

Bố cục: 1 hàng duy nhất.

Giải thích: Các item nằm trên một hàng, canh giữa theo chiều dọc. space-between đẩy Item 1 sang sát trái, Item 3 sang sát phải, Item 2 ở chính giữa.

Sơ đồ: [Item1]  [Item2]  [Item3]

Trường hợp 4: display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; (3 items)

Bố cục: 1 hàng, 3 cột cố định (cột trái 200px, cột giữa chiếm phần còn lại, cột phải 200px).

Sơ đồ: [ 200px ] [ 1fr ] [ 200px ]

Trường hợp 5: display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; (7 items)

Bố cục: 3 hàng (Hàng 1, 2 có 3 item; Hàng 3 có 1 item).

Giải thích: Cứ mỗi hàng có 3 cột, item thứ 7 sẽ rơi xuống hàng thứ 3 và nằm ở cột đầu tiên bên trái.

Sơ đồ:
[I1][I2][I3]
[I4][I5][I6]
[I7][  ][  ]


# Câu C1:

Flexbox và Grid: Khi nào dùng gì?
Navigation bar ngang
Lựa chọn: Flexbox.
Lý do: Đây là layout 1 chiều, Flexbox mạnh nhất ở việc căn chỉnh các phần tử trên cùng một hàng bằng justify-content và align-items.

Lưới ảnh Instagram
Lựa chọn: Grid.
Lý do: Layout 2 chiều. Grid giúp định nghĩa lưới đều nhau và tự động xử lý các dòng mới khi có thêm ảnh mà không cần tính toán nhiều.

Layout blog (Main + Sidebar)
Lựa chọn: Grid.
Lý do: Grid giúp chia khung trang web một cách chính xác với tỉ lệ cố định và khoảng cách giữa các cột được kiểm soát dễ dàng.

Footer 4 cột
Lựa chọn: Grid.
Lý do: Grid tạo ra các cột đều nhau rất nhanh chóng. Nếu nội dung mỗi cột khác nhau nhiều, Flexbox cũng là một lựa chọn tốt.

Card sản phẩm (nút dính đáy)
Lựa chọn: Flexbox.
Lý do: Khi dùng flex-direction: column, thuộc tính margin-top: auto trên nút bấm sẽ tự động đẩy nó xuống đáy card, giúp các nút luôn thẳng hàng nhau.

Quy tắc sử dụng
Grid: Dùng cho bố cục tổng thể (chia trang thành các khu vực lớn).

Flexbox: Dùng cho các thành phần nhỏ (căn chỉnh nội dung bên trong một khối).

Kết hợp: Dùng Grid để chia khung trang, sau đó dùng Flexbox để dàn trải nội dung bên trong các khung đó.

# Câu C2:
Lỗi 1: Cards không đều chiều cao

Nguyên nhân: Các card có nội dung dài ngắn khác nhau, nhưng vì không được thiết lập flex-direction: column và margin-top: auto, nút "Mua" sẽ nằm ngay sau phần text, khiến nó bị nhảy vị trí tùy theo độ dài của tiêu đề.

Cách sửa:


.card {
    display: flex;
    flex-direction: column;
}
.btn {
    margin-top: auto;
}
Lỗi 2: Item không nằm giữa container

Nguyên nhân: Bạn đã dùng display: flex nhưng thiếu các thuộc tính căn chỉnh dọc và ngang. Mặc định align-items là stretch và justify-content là flex-start.

Cách sửa:


.hero {
    height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;     
}
Lỗi 3: Sidebar bị co lại

Nguyên nhân: Mặc định của Flexbox là flex-shrink: 1, nên khi nội dung bên cạnh quá dài, trình duyệt sẽ tự ép sidebar co lại để nhường chỗ.

Cách sửa:


.sidebar {
    width: 250px;
    flex-shrink: 0; 
}