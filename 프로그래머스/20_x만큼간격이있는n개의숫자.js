// 문제 https://programmers.co.kr/learn/courses/30/lessons/12954
// 2021.12.17 level1 - x만큼 간격이 있는 n개의 숫자

// 내 답안
function solution(x, n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        if (answer.length == 0) {
            answer.push(x);
        } else {
            let result = answer[answer.length - 1];
            answer.push(result + x);
        }
    }
    return answer;
}

// 모범답안 1
function solution(x, n) {
    return Array(n)
        .fill(x)
        .map((v, i) => (i + 1) * v);
}

// 모범답안 2
function solution(x, n) {
    return [...Array(n).keys()].map((v) => (v + 1) * x);
}
