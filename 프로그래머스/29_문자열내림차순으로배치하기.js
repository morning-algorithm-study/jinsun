// 문제 https://programmers.co.kr/learn/courses/30/lessons/12917
// 2021.12.26 level1 - 문자열 내림차순으로 배치하기

// 내 답안
function solution(s) {
    return s.split("").sort().reverse().join("");
}
