// 문제 https://programmers.co.kr/learn/courses/30/lessons/12969
// 2021.12.15 level1 - 직사각형 별찍기

// 내 답안
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    let n = data.split(" ")[0];
    let m = data.split(" ")[1];
    let result = "";
    let answer = "";
    for (let i = 0; i < n; i++) {
        result = result + "*";
    }
    result = result + "\n";
    for (let j = 0; j < m; j++) {
        answer = answer + result;
    }
    console.log(answer);
});

// 모범답안 1
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    const row = "*".repeat(a);
    for (let i = 0; i < b; i++) {
        console.log(row);
    }
});

// 모범답안 2
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    const star = `${"*".repeat(a)}\n`;
    console.log(star.repeat(b));
});
