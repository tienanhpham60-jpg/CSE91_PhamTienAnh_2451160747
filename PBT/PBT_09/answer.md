# Câu A1:

1. Sơ đồ cây DOM (DOM Tree)

Document
└── html
├── head
└── body
└── div#app
├── header
│   ├── h1
│   │   └── #text: "Todo App"
│   └── nav
│       ├── a.active (href="#")
│       │   └── #text: "All"
│       ├── a (href="#")
│       │   └── #text: "Active"
│       └── a (href="#")
│           └── #text: "Completed"
└── main
├── form#todoForm
│   ├── input#todoInput (type="text")
│   └── button (type="submit")
│       └── #text: "Add"
└── ul#todoList
├── li.todo-item
│   └── #text: "Learn HTML"
└── li.todo-item.completed
└── #text: "Learn CSS"


# 2. Các câu lệnh querySelector tương ứng

* Chọn thẻ `<h1>`:
  
  document.querySelector('h1');
Chọn input trong form:


document.querySelector('#todoForm input');

Chọn tất cả .todo-item:


document.querySelectorAll('.todo-item');
Chọn link đang active:


document.querySelector('nav a.active');

Chọn <li> đầu tiên trong #todoList:


document.querySelector('#todoList li:first-child');

document.querySelector('#todoList li');
Chọn tất cả <a> bên trong <nav>:


document.querySelectorAll('nav a');

