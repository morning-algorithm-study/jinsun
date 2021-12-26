//문제 https://programmers.co.kr/learn/courses/30/lessons/12933
// 2021.12.25 level1 - 정수 내림차순으로 배치하기

// 내 답안
function solution(n) {
    let result = n
        .toString()
        .split("")
        .sort((a, b) => b - a)
        .join("");
    return Number(result);
}
