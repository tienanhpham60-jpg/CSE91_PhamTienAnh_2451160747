# Câu A1 — Sync vs Async
1. Thứ tự output
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
5 - Timeout 100ms
7 - Nested timeout
2. Giải thích cơ chế Event Loop, Microtask Queue và Macrotask Queue
Để hiểu tại sao có thứ tự chạy như trên, cần dựa vào cách trình duyệt xử lý các tác vụ thông qua Event Loop:

Đồng bộ (Synchronous): Các câu lệnh chạy từ trên xuống dưới và được đưa thẳng vào Call Stack để xử lý ngay lập tức. Đó là lý do số 1 và số 4 hiện ra đầu tiên.

Microtask Queue (Hàng đợi vi tác vụ): Nơi chứa các tác vụ ưu tiên cao, phổ biến nhất là các xử lý kết quả của Promise (.then, .catch, async/await). Đặc điểm của Microtask Queue là Event Loop sẽ quét sạch và chạy hết tất cả các tác vụ trong này ngay sau khi Call Stack trống, trước khi chuyển sang làm việc khác. Vì vậy, Promise số 3 và số 6 được chạy ngay sau khi code đồng bộ kết thúc.

Macrotask Queue hay Task Queue (Hàng đợi tác vụ lớn): Nơi chứa các tác vụ như setTimeout, setInterval, các sự kiện click, cuộn chuột của người dùng. Macrotask chỉ được Event Loop bốc từng cái một ra chạy sau khi cả Call Stack lẫn Microtask Queue đã hoàn toàn trống rỗng.

Phân tích cụ thể luồng chạy của đoạn code:

Đầu tiên, chạy các lệnh đồng bộ trong Call Stack: In ra 1 - Start và 4 - End. Trong lúc này, các setTimeout được đẩy qua Web APIs để đếm giờ, còn các Promise được đẩy vào Microtask Queue.

Sau khi Call Stack trống, Event Loop kiểm tra Microtask Queue. Nó thấy hai Promise là số 3 và số 6 nên bốc ra chạy liên tiếp. In ra 3 - Promise và 6 - Promise 2.

Khi đang chạy Promise số 6, có một setTimeout lồng bên trong (Nested timeout). Cái này tiếp tục được đẩy qua Web APIs để chờ xử lý, chứ chưa được xếp vào hàng đợi ngay.

Bây giờ Microtask Queue đã trống hoàn toàn. Event Loop bắt đầu chuyển sang Macrotask Queue. Lúc này, tác vụ Timeout 0ms (số 2) đã xếp hàng sẵn từ trước nên được bốc ra chạy, in ra 2 - Timeout 0ms.

Tiếp theo, tác vụ Timeout 100ms (số 5) và Nested timeout (số 7) lần lượt hoàn thành thời gian chờ và nhảy vào Macrotask Queue để đợi đến lượt. Vì số 5 hoàn thành việc xếp hàng trước số 7 (do số 7 phải đợi đến khi Promise 2 chạy xong mới bắt đầu đếm giờ), nên số 5 được in ra trước, cuối cùng mới đến số 7


# Câu A2 — Fetch API
1. Giải thích từng dòng code
async function getData() {: Khai báo một hàm bất đồng bộ với từ khóa async. Hàm này sẽ luôn trả về một Promise.

try {: Bắt đầu khối lệnh kiểm tra lỗi. Nếu có bất kỳ lỗi nào xảy ra trong khối này, chương trình sẽ lập tức nhảy xuống khối catch.

const response = await fetch("https://api.example.com/data");: Gửi một yêu cầu mạng (HTTP request) đến đường dẫn URL. Từ khóa await bắt chương trình dừng lại đợi cho đến khi nhận được phản hồi từ máy chủ.

if (!response.ok) {: Kiểm tra xem phản hồi từ máy chủ có thành công hay không (mã trạng thái có nằm trong khoảng 200 - 299 không).

throw new Error(\HTTP ${response.status}`);: Nếu phản hồi thất bại, chủ động tạo và ném ra một lỗi kèm theo mã trạng thái HTTP để khối catch` xử lý.

const data = await response.json();: Chuyển đổi dữ liệu phản hồi thô nhận được từ máy chủ sang định dạng đối tượng JavaScript (JSON). Thao tác này tốn thời gian nên cũng cần từ khóa await.

return data;: Trả về dữ liệu đã được chuyển đổi thành công.

} catch (error) {: Khối lệnh bắt lỗi. Biến error sẽ chứa thông tin về lỗi vừa xảy ra ở khối try.

console.error("Failed:", error.message);: In thông báo lỗi chi tiết ra tab console của trình duyệt.

return null;: Trả về null như một cách báo hiệu cho nơi gọi hàm rằng quá trình lấy dữ liệu đã thất bại.

}: Kết thúc hàm.

2. Trả lời các câu hỏi chi tiết
await fetch(...) — fetch trả về gì? Tại sao cần await?
fetch() trả về một Promise, bên trong Promise này chứa một đối tượng Response (đại diện cho toàn bộ phản hồi HTTP bao gồm header, status, body thô).

Cần await vì việc gửi yêu cầu qua mạng internet cần thời gian để truyền tải dữ liệu đi và về. Từ khóa await giúp tạm dừng thực thi các dòng code tiếp theo cho đến khi mạng trả về kết quả thành công hoặc thất bại, giúp viết code bất đồng bộ nhìn tự nhiên giống như code đồng bộ.

response.ok — Khi nào false? Liệt kê 3 status codes tương ứng.
response.ok sẽ trả về false khi mã trạng thái (status code) của phản hồi HTTP nằm ngoài khoảng thành công (tức là không thuộc khoảng 200 - 299).

3 mã status code tương ứng khiến response.ok bằng false:

404: Not Found (Không tìm thấy đường dẫn hoặc tài nguyên).

403: Forbidden (Bị từ chối truy cập do không có quyền).

500: Internal Server Error (Máy chủ của API gặp lỗi hệ thống).

response.json() — Tại sao cần await lần nữa?
Cần await ở response.json() vì hàm này trả về một Promise. Khi dữ liệu từ máy chủ gửi về, trình duyệt mới chỉ nhận được các luồng dữ liệu thô (Stream). Hàm .json() phải mất thời gian đọc toàn bộ luồng dữ liệu này và phân tích cú pháp (parse) để chuyển chuỗi văn bản đó thành một đối tượng JavaScript hoàn chỉnh.

try...catch — Catch những lỗi gì?
Khối try...catch trong đoạn code trên sẽ bắt được các loại lỗi sau:

Network error (Lỗi mạng): Máy tính bị mất kết nối internet, đứt cáp, sai địa chỉ domain, hoặc máy chủ API bị sập hoàn toàn khiến yêu cầu không thể gửi đi hoặc nhận về.

Lỗi chủ động ném ra (throw new Error): Khi response.ok là false (gặp các lỗi như 404, 500, 403), code tự kích hoạt throw nên catch sẽ bắt được lỗi này.

Lỗi JSON parse error: Nếu máy chủ trả về dữ liệu thành công (mã 200) nhưng nội dung bên trong lại là một chuỗi văn bản thuần hoặc HTML lỗi chứ không phải định dạng JSON đúng chuẩn, hàm response.json() sẽ bị lỗi cú pháp và đẩy xuống catch



# Câu A3 — Promise States
1. Sơ đồ 3 trạng thái của Promise
                 ┌───────────────┐
                 │    Pending    │
                 └───────┬───────┘
                         │
           ┌─────────────┴─────────────┐
           ▼                           ▼
    [Khi gọi resolve()]         [Khi gọi reject()]
           │                           │
   ┌───────┴───────┐           ┌───────┴───────┐
   │   Fulfilled   │           │   Rejected    │
   └───────────────┘           └───────────────┘
Giải thích các trạng thái:

Pending (Chờ xử lý): Trạng thái ban đầu của Promise khi hành động bất đồng bộ đang chạy, chưa có kết quả thành công hay thất bại.

Fulfilled (Thành công): Trạng thái khi hành động bất đồng bộ xử lý xong và gọi hàm resolve(). Lúc này Promise trả về một dữ liệu cụ thể.

Rejected (Thất bại): Trạng thái khi hành động bất đồng bộ gặp lỗi hoặc gọi hàm reject(). Lúc này Promise trả về một lý do lỗi.

2. Giải thích Callback Hell và ví dụ Refactor
Callback Hell là gì?
Callback Hell là hiện tượng các hàm callback bị lồng vào nhau quá nhiều tầng để xử lý một chuỗi các hành động bất đồng bộ liên tiếp (hành động sau cần kết quả của hành động trước). Điều này khiến cho mã nguồn bị phình to sang bên phải theo hình kim tự tháp (Pyramid of Doom), dẫn đến việc đọc hiểu, bảo trì và bắt lỗi cực kỳ khó khăn.

Ví dụ 4 cấp Callback Hell
Đây là giả lập quá trình đăng nhập, lấy thông tin người dùng, lấy danh sách bài viết và lấy chi tiết bình luận:

JavaScript
// Ví dụ 4 cấp lồng nhau
login("user1", "password", function(token) {
    getUserInfo(token, function(user) {
        getPosts(user.id, function(posts) {
            getComments(posts[0].id, function(comments) {
                console.log("Danh sach binh luan:", comments);
            });
        });
    });
});
Refactor thành async/await
Khi chuyển đổi sang dùng async/await, các hành động bất đồng bộ được viết tuần tự từ trên xuống dưới, giúp cấu trúc code phẳng và dễ đọc hơn rất nhiều:

JavaScript
async function getCommentData() {
    try {
        const token = await login("user1", "password");
        const user = await getUserInfo(token);
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0].id);
        
        console.log("Danh sach binh luan:", comments);
    } catch (error) {
        console.error("Gap loi trong qua trinh xu ly:", error);
    }
}

getCommentData();