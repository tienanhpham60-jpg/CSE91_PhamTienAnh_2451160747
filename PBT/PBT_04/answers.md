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