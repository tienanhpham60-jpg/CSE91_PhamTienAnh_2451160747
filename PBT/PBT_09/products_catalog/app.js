const products = [
    { id: 1, name: "iPhone 16 Pro", price: 28990000, category: "phone", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 2, name: "Samsung Galaxy S24", price: 21990000, category: "phone", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 3, name: "Xiaomi 14 Ultra", price: 26490000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: false },
    { id: 4, name: "MacBook Air M3", price: 27990000, category: "laptop", image: "https://placehold.co/200", rating: 4.9, inStock: true },
    { id: 5, name: "Dell XPS 13", price: 34500000, category: "laptop", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 6, name: "Asus ROG Strix", price: 31990000, category: "laptop", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 7, name: "iPad Pro M4", price: 26990000, category: "tablet", image: "https://placehold.co/200", rating: 4.9, inStock: true },
    { id: 8, name: "Samsung Galaxy Tab S9", price: 18490000, category: "tablet", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 9, name: "Lenovo Tab P12", price: 8990000, category: "tablet", image: "https://placehold.co/200", rating: 4.1, inStock: false },
    { id: 10, name: "Apple Watch Ultra 2", price: 21490000, category: "watch", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 11, name: "Samsung Galaxy Watch 6", price: 6990000, category: "watch", image: "https://placehold.co/200", rating: 4.3, inStock: true },
    { id: 12, name: "Garmin Fenix 7 Pro", price: 19990000, category: "watch", image: "https://placehold.co/200", rating: 4.7, inStock: true }
];

let cartCount = 0;
let currentCategory = "all";
let searchKeyword = "";
let currentSort = "default";

const appRoot = document.getElementById("app-root");

const header = document.createElement("header");
header.className = "header-catalog";
const title = document.createElement("h2");
title.textContent = "Product Catalog";

const headerRight = document.createElement("div");
headerRight.style.display = "flex";
headerRight.style.gap = "20px";
headerRight.style.alignItems = "center";

const btnToggleMode = document.createElement("button");
btnToggleMode.className = "btn-mode";
btnToggleMode.textContent = "🌙 Dark Mode";

const cartBox = document.createElement("div");
cartBox.className = "cart-box";
cartBox.textContent = "🛒 Giỏ hàng";
const cartBadge = document.createElement("span");
cartBadge.className = "cart-badge";
cartBadge.textContent = "0";
cartBox.appendChild(cartBadge);

headerRight.appendChild(btnToggleMode);
headerRight.appendChild(cartBox);
header.appendChild(title);
header.appendChild(headerRight);
appRoot.appendChild(header);

const controlsWrapper = document.createElement("section");
controlsWrapper.className = "controls-wrapper";

const cateGroup = document.createElement("div");
const categories = [
    { key: "all", label: "Tất cả" },
    { key: "phone", label: "Điện thoại" },
    { key: "laptop", label: "Laptop" },
    { key: "tablet", label: "Máy tính bảng" },
    { key: "watch", label: "Đồng hồ" }
];

categories.forEach(cate => {
    const btn = document.createElement("button");
    btn.className = "btn-cate";
    btn.textContent = cate.label;
    btn.setAttribute("data-category", cate.key);
    if (cate.key === "all") btn.classList.add("active");
    cateGroup.appendChild(btn);
});

const searchSortGroup = document.createElement("div");
searchSortGroup.className = "search-sort-group";

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Tìm sản phẩm...";

const sortSelect = document.createElement("select");
const sortOptions = [
    { value: "default", label: "Sắp xếp mặc định" },
    { value: "price-asc", label: "Giá tăng dần" },
    { value: "price-desc", label: "Giá giảm dần" },
    { value: "name-asc", label: "Tên A-Z" },
    { value: "rating-desc", label: "Đánh giá cao nhất" }
];
sortOptions.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.label;
    sortSelect.appendChild(option);
});

searchSortGroup.appendChild(searchInput);
searchSortGroup.appendChild(sortSelect);
controlsWrapper.appendChild(cateGroup);
controlsWrapper.appendChild(searchSortGroup);
appRoot.appendChild(controlsWrapper);

const productsGrid = document.createElement("section");
productsGrid.className = "products-grid";
appRoot.appendChild(productsGrid);

const modalMask = document.createElement("div");
modalMask.className = "modal-mask hidden";
const modalContent = document.createElement("div");
modalContent.className = "modal-content";
const closeBtn = document.createElement("span");
closeBtn.className = "close-btn";
closeBtn.innerHTML = "&times;";
const modalBody = document.createElement("div");

modalContent.appendChild(closeBtn);
modalContent.appendChild(modalBody);
modalMask.appendChild(modalContent);
appRoot.appendChild(modalMask);

function renderProducts() {
    productsGrid.innerHTML = "";

    let processedList = [...products];

    if (currentCategory !== "all") {
        processedList = processedList.filter(p => p.category === currentCategory);
    }

    if (searchKeyword !== "") {
        processedList = processedList.filter(p => p.name.toLowerCase().includes(searchKeyword));
    }

    if (currentSort === "price-asc") {
        processedList.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
        processedList.sort((a, b) => b.price - a.price);
    } else if (currentSort === "name-asc") {
        processedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === "rating-desc") {
        processedList.sort((a, b) => b.rating - a.rating);
    }

    if (processedList.length === 0) {
        const noData = document.createElement("p");
        noData.style.gridColumn = "1 / -1";
        noData.style.textAlign = "center";
        noData.style.color = "var(--text-muted)";
        noData.textContent = "Không tìm thấy sản phẩm nào phù hợp.";
        productsGrid.appendChild(noData);
        return;
    }

    processedList.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("data-id", product.id);

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        const info = document.createElement("div");
        info.className = "product-info";
        const name = document.createElement("h3");
        name.textContent = product.name;
        const meta = document.createElement("p");
        meta.className = "product-meta";
        meta.textContent = `⭐ ${product.rating} | ${product.inStock ? "Còn hàng" : "Hết hàng"}`;
        info.appendChild(name);
        info.appendChild(meta);

        const priceRow = document.createElement("div");
        priceRow.className = "product-price-row";
        const price = document.createElement("span");
        price.className = "price";
        price.textContent = product.price.toLocaleString("vi-VN") + " đ";

        const btnAdd = document.createElement("button");
        btnAdd.className = "btn-add-cart";
        btnAdd.textContent = "Thêm giỏ";
        if (!product.inStock) {
            btnAdd.textContent = "Hết hàng";
            btnAdd.style.background = "#94a3b8";
            btnAdd.disabled = true;
        }

        priceRow.appendChild(price);
        priceRow.appendChild(btnAdd);

        card.appendChild(img);
        card.appendChild(info);
        card.appendChild(priceRow);

        productsGrid.appendChild(card);
    });
}

function filterByCategory(category) {
    currentCategory = category;
    renderProducts();
}

function searchProducts(keyword) {
    searchKeyword = keyword.toLowerCase().trim();
    renderProducts();
}

function sortProducts(sortValue) {
    currentSort = sortValue;
    renderProducts();
}

function openModal(product) {
    modalBody.innerHTML = "";

    const img = document.createElement("img");
    img.src = product.image;

    const title = document.createElement("h2");
    title.textContent = product.name;
    title.style.margin = "10px 0";

    const desc = document.createElement("p");
    desc.style.color = "var(--text-muted)";
    desc.style.marginBottom = "15px";
    desc.textContent = `Sản phẩm thuộc danh mục ${product.category.toUpperCase()}, đạt điểm đánh giá trung bình ${product.rating}/5 từ người dùng toàn hệ thống.`;

    const price = document.createElement("p");
    price.className = "price";
    price.style.fontSize = "1.3rem";
    price.textContent = product.price.toLocaleString("vi-VN") + " đ";

    modalBody.appendChild(img);
    modalBody.appendChild(title);
    modalBody.appendChild(desc);
    modalBody.appendChild(price);

    modalMask.classList.remove("hidden");
}

cateGroup.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-cate")) {
        document.querySelectorAll(".btn-cate").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        filterByCategory(e.target.getAttribute("data-category"));
    }
});

searchInput.addEventListener("input", function(e) {
    searchProducts(e.target.value);
});

sortSelect.addEventListener("change", function(e) {
    sortProducts(e.target.value);
});

productsGrid.addEventListener("click", function(e) {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const id = parseInt(card.getAttribute("data-id"));
    const product = products.find(p => p.id === id);

    if (e.target.classList.contains("btn-add-cart")) {
        e.stopPropagation();
        cartCount++;
        cartBadge.textContent = cartCount;
        return;
    }

    if (product) {
        openModal(product);
    }
});

closeBtn.addEventListener("click", () => modalMask.classList.add("hidden"));
modalMask.addEventListener("click", (e) => {
    if (e.target === modalMask) modalMask.classList.add("hidden");
});

btnToggleMode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        btnToggleMode.textContent = "☀️ Light Mode";
    } else {
        btnToggleMode.textContent = "🌙 Dark Mode";
    }
});

renderProducts();