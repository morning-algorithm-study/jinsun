// 문제 https://programmers.co.kr/learn/courses/30/lessons/12982
// 2022.01.04 level1 - 예산

// 내 답안
function solution(d, budget) {
    let num = budget;
    let sum = 0;
    let result = d.sort((a, b) => a - b);
    for (let i = 0; i < d.length; i++) {
        if (num - result[i] >= 0) {
            num -= result[i];
            sum += 1;
        }
    }
    return sum;
}

// 모범답안
function solution(d, budget) {
    d.sort((a, b) => a - b);
    while (d.reduce((a, b) => a + b, 0) > budget) d.pop();
    return d.length;
}
