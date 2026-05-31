const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" }
];

let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let highest = null;
let lowest = null;

let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

let maleTotal = 0;
let femaleTotal = 0;
let maleCount = 0;
let femaleCount = 0;

console.log("STT | Tên | TB | Xếp loại");

for (let i = 0; i < students.length; i++) {
    let student = students[i];

    let avg =
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3;

    avg = Number(avg.toFixed(1));

    let rank = "";

    if (avg >= 8.0) {
        rank = "Giỏi";
        gioi++;
    } else if (avg >= 6.5) {
        rank = "Khá";
        kha++;
    } else if (avg >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    } else {
        rank = "Yếu";
        yeu++;
    }

    student.avg = avg;
    student.rank = rank;

    console.log(
        `${i + 1} | ${student.name} | ${avg} | ${rank}`
    );

    if (highest === null || avg > highest.avg) {
        highest = student;
    }

    if (lowest === null || avg < lowest.avg) {
        lowest = student;
    }

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCS += student.cs;

    if (student.gender === "M") {
        maleTotal += avg;
        maleCount++;
    } else {
        femaleTotal += avg;
        femaleCount++;
    }
}

console.log("\nSố lượng theo xếp loại:");
console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

console.log("\nSinh viên điểm cao nhất:");
console.log(highest.name, "-", highest.avg);

console.log("\nSinh viên điểm thấp nhất:");
console.log(lowest.name, "-", lowest.avg);

console.log("\nĐiểm trung bình từng môn:");
console.log("Math:", (totalMath / students.length).toFixed(2));
console.log("Physics:", (totalPhysics / students.length).toFixed(2));
console.log("CS:", (totalCS / students.length).toFixed(2));

console.log("\nĐiểm trung bình theo giới tính:");
console.log("Nam:", (maleTotal / maleCount).toFixed(2));
console.log("Nữ:", (femaleTotal / femaleCount).toFixed(2));