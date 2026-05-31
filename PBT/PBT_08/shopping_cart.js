function createCart() {
    let items = [];
    let discountPercent = 0;
    let discountAmount = 0;

    return {
        addItem(product, quantity = 1) {
            const existing = items.find(
                item => item.id === product.id
            );

            if (existing) {
                existing.quantity += quantity;
            } else {
                items.push({
                    ...product,
                    quantity
                });
            }
        },

        removeItem(productId) {
            items = items.filter(
                item => item.id !== productId
            );
        },

        updateQuantity(productId, newQuantity) {
            const item = items.find(
                item => item.id === productId
            );

            if (!item) return;

            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
            }
        },

        getTotal() {
            const subtotal = items.reduce(
                (sum, item) =>
                    sum + item.price * item.quantity,
                0
            );

            let total =
                subtotal -
                subtotal * (discountPercent / 100) -
                discountAmount;

            return total < 0 ? 0 : total;
        },

        applyDiscount(code) {
            discountPercent = 0;
            discountAmount = 0;

            if (code === "SALE10") {
                discountPercent = 10;
            } else if (code === "SALE20") {
                discountPercent = 20;
            } else if (code === "FREESHIP") {
                discountAmount = 30000;
            }
        },

        printCart() {
            console.log(
                "------------------------------------------------------------"
            );
            console.log(
                "# | Sản phẩm | SL | Đơn giá | Tổng"
            );
            console.log(
                "------------------------------------------------------------"
            );

            items.forEach((item, index) => {
                const total =
                    item.price * item.quantity;

                console.log(
                    `${index + 1} | ${item.name} | ${item.quantity} | ${item.price.toLocaleString()} | ${total.toLocaleString()}`
                );
            });

            console.log(
                "------------------------------------------------------------"
            );

            console.log(
                "Tổng cộng:",
                this.getTotal().toLocaleString() + "đ"
            );

            console.log(
                "------------------------------------------------------------"
            );
        },

        getItemCount() {
            return items.reduce(
                (sum, item) =>
                    sum + item.quantity,
                0
            );
        },

        clearCart() {
            items = [];
            discountPercent = 0;
            discountAmount = 0;
        }
    };
}

const cart = createCart();

cart.addItem(
    { id: 1, name: "iPhone 16", price: 25990000 },
    1
);

cart.addItem(
    { id: 3, name: "AirPods Pro", price: 6990000 },
    2
);

cart.addItem(
    { id: 1, name: "iPhone 16", price: 25990000 },
    1
);

cart.printCart();

cart.applyDiscount("SALE10");

cart.printCart();

console.log("Số SP:", cart.getItemCount());

cart.removeItem(3);

console.log(
    "Sau xóa:",
    cart.getItemCount()
);