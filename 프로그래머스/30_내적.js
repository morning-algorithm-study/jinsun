// 문제 https://programmers.co.kr/learn/courses/30/lessons/70128
// 2021.12.27 level1 - 내적

// 내 답안
function solution(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(a[i] * b[i]);
    }
    return result.reduce((a, b) => a + b);
}

// 모범답안
function solution(a, b) {
    return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
