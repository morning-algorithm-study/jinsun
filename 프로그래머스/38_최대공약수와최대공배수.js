// 문제 https://programmers.co.kr/learn/courses/30/lessons/12940#
// 2022.1.7 level1 - 최대공약수와 최대공배수

// 내 답안
function solution(n, m) {
    let num1 = n;
    let num2 = m;
    let sort = [n, m].sort((a, b) => a - b);
    let answer = [];
    for (let i = 1; i < sort[1] + 1; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            answer.push(i);
            num1 = num1 / i;
            num2 = num2 / i;
        }
    }
    let reduce = answer.reduce((a, b) => a * b);
    return answer.length > 1 ? [reduce, reduce * num1 * num2] : [1, n * m];
}

// 모범답안
