// 문제 https://programmers.co.kr/learn/courses/30/lessons/68935
// 2021.12.20 level1 - 3진법 뒤집기

// 내 답안
function solution(n) {
    let result = n.toString(3).split("").reverse().join("");
    return Number.parseInt(result, 3);
}

// 모범답안
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
};
