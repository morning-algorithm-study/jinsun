// 문제 https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript
// 2021.12.28 level1 - 음양 더하기

// 내 답안
function solution(absolutes, signs) {
    let answer = [];
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer.push(absolutes[i]);
        } else {
            answer.push(-absolutes[i]);
        }
    }
    return answer.reduce((a, b) => a + b);
}

// 모범답안
function solution(absolutes, signs) {
    return absolutes.reduce(
        (acc, val, i) => acc + val * (signs[i] ? 1 : -1),
        0
    );
}
