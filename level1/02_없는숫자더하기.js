// 문제 : https://programmers.co.kr/learn/courses/30/lessons/86051
// 2021.11.12 level1 - 없는 숫자 더하기

let numbers = [1, 2, 3, 4, 6, 7, 8, 0];

// 내 답안
function solution(numbers) {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = array
        .filter((num) => !numbers.includes(num))
        .reduce((a, b) => a + b);
    return result;
}

// 모범답안1
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc);
}

// 모범답안2
function solution(numbers) {
    let answer = 0;
    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) answer += i;
    }
    return answer;
}
