// 문제 https://programmers.co.kr/learn/courses/30/lessons/12947
// 2021.12.19 level1 - 하샤드 수

// 내 답안
function solution(x) {
    let result = x
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b);
    return x % result == 0 ? true : false;
}
