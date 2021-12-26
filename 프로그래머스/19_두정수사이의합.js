// 문제 https://programmers.co.kr/learn/courses/30/lessons/12912
// 2021.12.16 level1 - 두 정수 사이의 합

// 내 문제
function solution(a, b) {
    let result = 0;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            result = result + i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            result = result + i;
        }
    }
    return result;
}

// 모범답안1
function adder(a, b) {
    return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

// 모범답안2
function adder(a, b, s = 0) {
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
}
