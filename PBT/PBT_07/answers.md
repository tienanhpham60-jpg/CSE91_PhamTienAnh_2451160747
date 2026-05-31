# Câu A1 

Đoạn 1

```javascript
console.log(x);
var x = 5;
```

Dự đoán output:

```text
undefined
```

Giải thích:

Biến `var` được hoisting (đưa lên đầu phạm vi) và được khởi tạo giá trị mặc định là `undefined`.

JavaScript hiểu như sau:

```javascript
var x;
console.log(x);
x = 5;
```



Đoạn 2

```javascript
console.log(y);
let y = 10;
```

Dự đoán output:

```text
ReferenceError
```

Giải thích:

Biến `let` cũng được hoisting nhưng không được khởi tạo giá trị ngay.

Khoảng thời gian từ đầu block đến khi khai báo được gọi là Temporal Dead Zone (TDZ). Truy cập biến trong giai đoạn này sẽ gây lỗi.



Đoạn 3

```javascript
const z = 15;
z = 20;
console.log(z);
```

Dự đoán output:

```text
TypeError: Assignment to constant variable
```

Giải thích:

Biến `const` chỉ được gán giá trị một lần. Sau khi khởi tạo không thể gán lại giá trị mới.



Đoạn 4

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

Dự đoán output:

```text
[1, 2, 3, 4]
```

Giải thích:

`const` không cho phép gán lại biến nhưng vẫn cho phép thay đổi nội dung của object hoặc array.

Ví dụ:

```javascript
arr = [5,6,7];
```

sẽ gây lỗi.

Nhưng:

```javascript
arr.push(4);
```

thì hợp lệ.



Đoạn 5

```javascript
let a = 1;

{
    let a = 2;
    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);
```

Dự đoán output:

```text
Trong block: 2
Ngoài block: 1
```

Giải thích:

Biến `let` có phạm vi block (block scope).

Biến `a` bên trong dấu `{}` là một biến khác hoàn toàn với biến `a` bên ngoài.


Kết quả bất ngờ

1. `var` cho phép truy cập trước khi khai báo và trả về `undefined`.

2. `let` và `const` không cho phép truy cập trước khi khai báo do cơ chế Temporal Dead Zone (TDZ).

3. `const` không cho phép gán lại biến nhưng vẫn có thể thay đổi nội dung của object hoặc array.

4. `let` có phạm vi block nên có thể tạo các biến cùng tên ở các block khác nhau mà không ảnh hưởng lẫn nhau.

Kết luận:

 Dùng `const` khi giá trị không cần gán lại.
 Dùng `let` khi cần thay đổi giá trị.
 Hạn chế dùng `var` vì dễ gây lỗi do hoisting và phạm vi hoạt động rộng.


# Câu A2 

Dự đoán kết quả:

```javascript
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "3");
console.log(true + true);
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

Kết quả dự đoán:

```text
typeof null        => "object"
typeof undefined   => "undefined"
typeof NaN         => "number"
"5" + 3            => "53"
"5" - 3            => 2
"5" * "3"          => 15
true + true        => 2
[] + []            => ""
[] + {}            => "[object Object]"
{} + []            => "[object Object]"
```

Giải thích:

`typeof null`

Kết quả là `"object"`.

Đây là một lỗi lịch sử của JavaScript từ những phiên bản đầu tiên và vẫn được giữ lại để đảm bảo tương thích.



`typeof undefined`

Kết quả là `"undefined"`.

Biến chưa được gán giá trị sẽ có kiểu dữ liệu `undefined`.



`typeof NaN`

Kết quả là `"number"`.

Mặc dù NaN có nghĩa là "Not a Number", JavaScript vẫn xem nó là một giá trị thuộc kiểu Number.



`"5" + 3`

Kết quả:

```text
"53"
```

Toán tử `+` ưu tiên nối chuỗi khi có một toán hạng là string.

JavaScript chuyển số 3 thành chuỗi `"3"` rồi ghép lại:

```javascript
"5" + "3"
```

Kết quả:

```text
"53"
```



`"5" - 3`

Kết quả:

```text
2
```

Toán tử `-` chỉ dùng cho phép toán số học.

JavaScript tự động chuyển `"5"` thành số 5:

```javascript
5 - 3
```

Kết quả:

```text
2
```



`"5" * "3"`

Kết quả:

```text
15
```

Toán tử `*` yêu cầu dữ liệu dạng số nên JavaScript tự chuyển cả hai chuỗi thành số.

```javascript
5 * 3
```

Kết quả:

```text
15
```



`true + true`

Kết quả:

```text
2
```

Trong phép toán số học:

```javascript
true = 1
false = 0
```

Nên:

```javascript
1 + 1
```

Kết quả:

```text
2
```



`[] + []`

Kết quả:

```text
""
```

Mảng rỗng khi chuyển sang chuỗi sẽ thành chuỗi rỗng:

```javascript
"" + ""
```

Kết quả:

```text
""
```



`[] + {}`

Kết quả:

```text
"[object Object]"
```

Mảng rỗng chuyển thành:

```javascript
""
```

Object chuyển thành:

```javascript
"[object Object]"
```

Nên:

```javascript
"" + "[object Object]"
```

Kết quả:

```text
"[object Object]"
```



`{} + []`

Kết quả:

```text
"[object Object]"
```

Object được chuyển thành chuỗi:

```javascript
"[object Object]"
```

Mảng rỗng thành:

```javascript
""
```

Nên kết quả cuối cùng là:

```text
"[object Object]"
```

Kết luận:

Sự khác nhau giữa `"5" + 3` và `"5" - 3` là:

 Toán tử `+` có thể dùng để nối chuỗi nên JavaScript ưu tiên ép kiểu sang String.
 Toán tử `-` chỉ thực hiện phép toán số học nên JavaScript ép kiểu sang Number.

Do đó:

```javascript
"5" + 3   // "53"
"5" - 3   // 2
```

Sau khi chạy file kiểm tra, kết quả thực tế trùng với dự đoán ở trên.


# Câu A3 

Dự đoán kết quả:

```javascript
console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);
console.log(null === undefined);
console.log(NaN == NaN);
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
```

Kết quả:

```text
5 == "5"               => true
5 === "5"              => false

null == undefined      => true
null === undefined     => false

NaN == NaN             => false

0 == false             => true
0 === false            => false

"" == false            => true
```

Giải thích:

`5 == "5"`

Kết quả là `true`.

Toán tử `==` sẽ tự động ép kiểu dữ liệu. Chuỗi `"5"` được chuyển thành số `5`, sau đó so sánh:

```javascript
5 == 5
```

nên kết quả là `true`.



`5 === "5"`

Kết quả là `false`.

Toán tử `===` so sánh cả giá trị và kiểu dữ liệu.

```javascript
5      // number
"5"    // string
```

Hai kiểu dữ liệu khác nhau nên kết quả là `false`.



`null == undefined`

Kết quả là `true`.

Đây là một quy tắc đặc biệt của JavaScript. Khi dùng `==`, `null` và `undefined` được xem là bằng nhau.



`null === undefined`

Kết quả là `false`.

```javascript
null        // kiểu null
undefined   // kiểu undefined
```

Hai kiểu dữ liệu khác nhau nên kết quả là `false`.



`NaN == NaN`

Kết quả là `false`.

`NaN` là giá trị đặc biệt trong JavaScript.

Theo chuẩn JavaScript:

```javascript
NaN !== NaN
```

Để kiểm tra NaN nên dùng:

```javascript
Number.isNaN(value)
```



`0 == false`

Kết quả là `true`.

JavaScript ép kiểu:

```javascript
false → 0
```

Sau đó so sánh:

```javascript
0 == 0
```

nên kết quả là `true`.



`0 === false`

Kết quả là `false`.

```javascript
0       // number
false   // boolean
```

Khác kiểu dữ liệu nên kết quả là `false`.



`"" == false`

Kết quả là `true`.

JavaScript ép kiểu:

```javascript
""      → 0
false   → 0
```

Sau đó so sánh:

```javascript
0 == 0
```

nên kết quả là `true`.



Nên dùng `==` hay `===`?

Trong thực tế nên ưu tiên sử dụng:

```javascript
===
```

Lý do:

 Không tự động ép kiểu dữ liệu.
 Kết quả dễ dự đoán hơn.
 Tránh các lỗi khó phát hiện.
 Là quy tắc được khuyến nghị trong JavaScript hiện đại.

Ví dụ:

```javascript
0 == false      // true
"" == false     // true
```

Những kết quả này có thể gây nhầm lẫn.

Trong khi:

```javascript
0 === false     // false
"" === false    // false
```

rõ ràng và dễ hiểu hơn.

Kết luận:

 `==` so sánh giá trị và có ép kiểu dữ liệu.
 `===` so sánh cả giá trị lẫn kiểu dữ liệu.
 Nên sử dụng `===` trong hầu hết các trường hợp để tránh lỗi và làm code dễ bảo trì hơn.


 # Câu A4 

Các giá trị Falsy trong JavaScript

JavaScript chỉ có một số ít giá trị được xem là Falsy:

```javascript
false
0
-0
0n
""
''
``
null
undefined
NaN
```

Ngoài các giá trị trên, tất cả các giá trị khác đều là Truthy.

---

Dự đoán kết quả:

```javascript
if ("0") console.log("A");
if ("") console.log("B");
if ([]) console.log("C");
if ({}) console.log("D");
if (null) console.log("E");
if (0) console.log("F");
if (-1) console.log("G");
if (" ") console.log("H");
```

Kết quả:

```text
A
C
D
G
H
```

Giải thích từng trường hợp:

`if ("0")`

Kết quả:

```text
A
```

Chuỗi `"0"` không phải chuỗi rỗng nên là Truthy.



`if ("")`

Không in gì.

Chuỗi rỗng `""` là một giá trị Falsy.

`if ([])`

Kết quả:

```text
C
```

Mảng rỗng vẫn là một object nên được xem là Truthy.



`if ({})`

Kết quả:

```text
D
```

Object rỗng cũng là Truthy 

`if (null)`

Không in gì.

`null` là giá trị Falsy.



`if (0)`

Không in gì.

Số `0` là giá trị Falsy.



`if (-1)`

Kết quả:

```text
G
```

Mọi số khác 0 đều là Truthy, kể cả số âm.



`if (" ")`

Kết quả:

```text
H
```

Đây không phải chuỗi rỗng.

Chuỗi chứa một dấu cách vẫn có độ dài lớn hơn 0 nên là Truthy.



Kết luận

Những giá trị dễ gây nhầm lẫn:

```javascript
"0"     // Truthy
[]      // Truthy
{}      // Truthy
" "     // Truthy
```

Những giá trị Falsy thường gặp:

```javascript
false
0
""
null
undefined
NaN
```

Vì vậy khi viết điều kiện trong JavaScript cần phân biệt rõ giữa chuỗi rỗng `""`, chuỗi `"0"` và các object hoặc array rỗng để tránh lỗi logic.



#   Câu A5 

Template Literals sử dụng dấu backtick (`) và cú pháp `${}` để chèn biến vào chuỗi. Cách này giúp code ngắn gọn và dễ đọc hơn so với nối chuỗi bằng dấu `+`.

Cách 1:

Code ban đầu:

```javascript
var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";
```

Viết lại bằng Template Literal:

```javascript
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```



Cách 2:

Code ban đầu:

```javascript
var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;
```

Viết lại bằng Template Literal:

```javascript
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```



Cách 3:

Code ban đầu:

```javascript
var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";
```

Viết lại bằng Template Literal:

```javascript
const html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

Ưu điểm của Template Literals:

 Code ngắn gọn và dễ đọc hơn.
 Không cần nối chuỗi bằng nhiều dấu `+`.
 Hỗ trợ chèn biến trực tiếp bằng `${}`.
 Hỗ trợ chuỗi nhiều dòng mà không cần ký tự xuống dòng đặc biệt.

Vì những lý do trên, trong JavaScript hiện đại nên ưu tiên sử dụng Template Literals thay cho cách nối chuỗi truyền thống.


# C1
Lỗi 1: Thiếu dấu ;

return "Phần trăm giảm không hợp lệ"

Nên viết:

return "Phần trăm giảm không hợp lệ";

JavaScript có thể tự thêm dấu ; nhưng không nên phụ thuộc vào cơ chế đó.

Lỗi 2: Không kiểm tra kiểu dữ liệu đầu vào

const gia = tinhGiaGiamGia("100000", 20);

"100000" là kiểu string, không phải number.

Nên kiểm tra:

if (typeof giaBan !== "number" || typeof phanTramGiam !== "number") {
    return "Dữ liệu không hợp lệ";
}

Lỗi 3: Dùng phép gán thay vì phép so sánh

if (giaSauGiam = 0)

Dấu = là phép gán giá trị.

Nên sửa thành:

if (giaSauGiam === 0)

Lỗi 4: Làm thay đổi giá trị của biến

Trong câu lệnh:

if (giaSauGiam = 0)

giá trị của giaSauGiam bị gán thành 0.

Điều này làm sai kết quả tính toán và là một lỗi logic nghiêm trọng.

Lỗi 5: Dùng var trong vòng lặp kết hợp setTimeout

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}

Kết quả thực tế:

Item 5
Item 5
Item 5
Item 5
Item 5

Nguyên nhân:

var có phạm vi function scope. Khi setTimeout chạy thì vòng lặp đã kết thúc và giá trị của i đã là 5.

Cách sửa:

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}

Kết quả:

Item 0
Item 1
Item 2
Item 3
Item 4

Lỗi 6: Xử lý kết quả trả về chưa hợp lý

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);

Hàm trả về:

Phần trăm giảm không hợp lệ

Nên kết quả sẽ là:

Giá: Phần trăm giảm không hợp lệ

Nên kiểm tra trước khi in hoặc in trực tiếp thông báo lỗi.

Code sau khi sửa:

function tinhGiaGiamGia(giaBan, phanTramGiam) {

    if (
        typeof giaBan !== "number" ||
        typeof phanTramGiam !== "number"
    ) {
        return "Dữ liệu không hợp lệ";
    }

    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }

    let giamGia = giaBan * phanTramGiam / 100;
    let giaSauGiam = giaBan - giamGia;

    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }

    return giaSauGiam;
}

const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log(gia2);

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("Item " + i);
    }, 1000);
}

Tổng số lỗi tìm được:

Thiếu dấu ;
Không kiểm tra kiểu dữ liệu đầu vào
Dùng = thay vì ===
Làm thay đổi giá trị của biến khi kiểm tra điều kiện
Dùng var trong vòng lặp với setTimeout
Xử lý kết quả lỗi trả về chưa hợp lý

Lỗi "ẩn" mà đề yêu cầu giải thích là lỗi dùng var trong vòng lặp kết hợp với setTimeout. Khi callback được thực thi thì vòng lặp đã kết thúc nên tất cả đều in ra Item 5. Dùng let sẽ tạo biến riêng cho mỗi lần lặp và khắc phục được vấn đề này.

