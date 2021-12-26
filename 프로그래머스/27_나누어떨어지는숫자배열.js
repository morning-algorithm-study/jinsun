// 문제 https://programmers.co.kr/learn/courses/30/lessons/12910
// 2021.12.24 level1 - 나누어 떨어지는 숫자 배열

// 내 답안
function solution(arr, divisor) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]);
        }
    }
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

// 모범답안
function solution(arr, divisor) {
    var answer = arr.filter((v) => v % divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
