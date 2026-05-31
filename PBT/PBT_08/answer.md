# Câu A1 

Function Declaration

function tinhThueBaoHiem(luong) {
    let thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
}

Function Expression

const tinhThueBaoHiem = function(luong) {
    let thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};

Arrow Function

const tinhThueBaoHiem = (luong) => {
    let thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};

Ví dụ:

console.log(tinhThueBaoHiem(15000000));

Kết quả:

{
    thue: 1500000,
    thuc_nhan: 13500000
}

3 cách này có khác nhau về hoisting không?

Có.

Function Declaration được hoisting toàn bộ nên có thể gọi trước khi khai báo.

Ví dụ:

console.log(cong(2, 3));

function cong(a, b) {
    return a + b;
}

Kết quả:

5

Chương trình vẫn chạy bình thường.

Function Expression không được hoisting phần giá trị hàm.

Ví dụ:

console.log(cong(2, 3));

const cong = function(a, b) {
    return a + b;
};

Kết quả:

ReferenceError

Vì biến cong chưa được khởi tạo.

Arrow Function cũng tương tự Function Expression.

Ví dụ:

console.log(cong(2, 3));

const cong = (a, b) => a + b;

Kết quả:

ReferenceError

Kết luận:

Function Declaration được hoisting hoàn toàn nên có thể gọi trước khi khai báo.
Function Expression không được hoisting phần hàm.
Arrow Function cũng không được hoisting phần hàm.
Trong JavaScript hiện đại, Arrow Function thường được sử dụng nhiều vì cú pháp ngắn gọn, nhưng cần khai báo trước khi sử dụng.

# Câu A2 

Đoạn 1

function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const c = counter();

console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.getCount());

Kết quả:

1
2
3
2
2

Giải thích:

Khi gọi:

const c = counter();

biến count được tạo và có giá trị ban đầu là 0.

Mỗi hàm bên trong (increment, decrement, getCount) đều giữ tham chiếu đến biến count thông qua Closure.

Các lần thực hiện:

c.increment()

count từ 0 → 1

Kết quả:

1
c.increment()

count từ 1 → 2

Kết quả:

2
c.increment()

count từ 2 → 3

Kết quả:

3
c.decrement()

count từ 3 → 2

Kết quả:

2
c.getCount()

trả về giá trị hiện tại của count là:

2

Đây là ví dụ điển hình của Closure vì các hàm bên trong vẫn truy cập được biến count dù hàm counter() đã thực thi xong.

Đoạn 2

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}

Kết quả sau khi chạy:

var: 3
var: 3
var: 3

let: 0
let: 1
let: 2

Giải thích:

Trường hợp dùng var

for (var i = 0; i < 3; i++)

var có phạm vi function scope.

Trong toàn bộ vòng lặp chỉ tồn tại một biến i.

Sau khi vòng lặp kết thúc:

i = 3

Các callback của setTimeout chỉ chạy sau 100ms.

Khi đó vòng lặp đã chạy xong nên tất cả callback đều nhìn thấy cùng một giá trị:

i = 3

Do đó:

var: 3
var: 3
var: 3

Trường hợp dùng let

for (let j = 0; j < 3; j++)

let có phạm vi block scope.

Mỗi lần lặp JavaScript tạo ra một biến j mới.

Lần 1:

j = 0

Lần 2:

j = 1

Lần 3:

j = 2

Mỗi callback của setTimeout giữ lại giá trị riêng của biến j tại thời điểm nó được tạo.

Vì vậy kết quả là:

let: 0
let: 1
let: 2

Kết luận:

var có function scope nên tất cả callback dùng chung một biến.
let có block scope nên mỗi lần lặp có một biến riêng.
Khi kết hợp với setTimeout, let thường cho kết quả đúng như mong đợi còn var dễ gây lỗi logic.


# Câu A3

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = nums.filter(n => n % 2 === 0);

const tripleNums = nums.map(n => n * 3);

const total = nums.reduce((sum, n) => sum + n, 0);

const firstGreaterThan7 = nums.find(n => n > 7);

const hasGreaterThan10 = nums.some(n => n > 10);

const allGreaterThan0 = nums.every(n => n > 0);

const descriptions = nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);

const reversedNums = [...nums].reverse();

Kết quả:

evenNums
// [2, 4, 6, 8, 10]

tripleNums
// [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

total
// 55

firstGreaterThan7
// 8

hasGreaterThan10
// false

allGreaterThan0
// true

descriptions
// [
//   "Số 1 là lẻ",
//   "Số 2 là chẵn",
//   ...
// ]

reversedNums
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]



# Câu A4 
Dự đoán kết quả:

const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

const { name, price, specs: { ram, color } } = product;

console.log(name, price, ram, color);

Kết quả:

iPhone 16 25990000 8 Titan

Vì:

name = "iPhone 16"
price = 25990000
ram = 8
color = "Titan"

Được lấy ra từ object bằng destructuring.

console.log(specs);

Kết quả:

ReferenceError: specs is not defined

Vì trong destructuring:

const { name, price, specs: { ram, color } } = product;

chỉ tạo ra các biến:

name
price
ram
color

Không tạo biến tên specs.

const updated = {
    ...product,
    price: 23990000,
    sale: true
};

console.log(updated.price);

Kết quả:

23990000

Giá trị mới ghi đè giá trị cũ.

console.log(updated.sale);

Kết quả:

true

Thuộc tính mới được thêm vào object.

console.log(product.price);

Kết quả:

25990000

Object gốc không bị thay đổi.

Spread tạo object mới.

const copy = { ...product };

copy.specs.ram = 16;

console.log(product.specs.ram);

Kết quả:

16

Giải thích:

Spread chỉ sao chép nông (shallow copy).

const copy = { ...product };

Object ngoài được tạo mới.

Nhưng object lồng bên trong:

specs

vẫn dùng chung vùng nhớ với object gốc.

Có thể hình dung như:

product.specs  ─┐
                ├──► { ram: 8, storage: 256, color: "Titan" }
copy.specs     ─┘

Khi sửa:

copy.specs.ram = 16;

thì object bên trong bị thay đổi.

Do đó:

product.specs.ram

cũng trở thành:

16

Kết luận:

Destructuring giúp lấy dữ liệu từ object nhanh hơn.
Spread (...) tạo bản sao nông (shallow copy).
Các object lồng bên trong vẫn được chia sẻ.
Muốn sao chép hoàn toàn phải dùng deep copy, ví dụ:
const copy = structuredClone(product);

hoặc:

const copy = JSON.parse(JSON.stringify(product));



# C1:

const processOrders = (orders) => orders
  .filter(({ status, total }) => status === "completed" && total > 100000)
  .map(({ id, customer, total }) => ({
    id, customer, total,
    discount: total * 0.1,
    finalTotal: total * 0.9
  }))
  .sort((a, b) => b.finalTotal - a.finalTotal);


# C2:


```const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },
    
    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },
    
    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;
        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
};


console.log(miniArray.map([1, 2, 3], x => x * 2));        // → [2, 4, 6]
console.log(miniArray.filter([1, 2, 3, 4], x => x > 2));    // → [3, 4]
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10 ```