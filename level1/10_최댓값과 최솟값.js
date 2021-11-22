// 문제 https://programmers.co.kr/learn/courses/30/lessons/12939
// 2021.11.22 level1 - 최댓값과 최솟값

// 내 답안
function solution(s) {
    let result = s.split(" ").sort((a, b) => a - b);
    let answer = [];
    answer.push(result[0]);
    answer.push(result[result.length - 1]);
    let join = answer.join(" ");
    return join;
}

// 모범답안
function solution(s) {
    const arr = s.split(" ");
    return Math.min(...arr) + " " + Math.max(...arr);
}
