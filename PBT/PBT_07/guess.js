const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let guessedNumbers = [];

while (attempts < 7) {
    let input = prompt("Nhập số từ 1 đến 100:");

    if (input === null) {
        alert("Game đã kết thúc.");
        break;
    }

    let guess = Number(input);

    if (
        isNaN(guess) ||
        guess < 1 ||
        guess > 100 ||
        !Number.isInteger(guess)
    ) {
        alert("Vui lòng nhập số nguyên từ 1 đến 100!");
        continue;
    }

    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    if (guess === secretNumber) {
        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
        break;
    }

    if (guess < secretNumber) {
        alert("Cao hơn");
    } else {
        alert("Thấp hơn");
    }

    if (attempts === 7) {
        alert(`Bạn đã hết lượt! Đáp án là ${secretNumber}`);
    }
}