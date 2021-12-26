// 문제 https://programmers.co.kr/learn/courses/30/lessons/12944
// 2021.12.21 level1 - 평균구하기

// 내 답안
function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}
