// 문제 https://programmers.co.kr/learn/courses/30/lessons/87389
// 2021.11.18 level1 - 나머지가 1이 되는 수 찾기

// 내 답안
function solution(n) {
    let result = n - 1;
    let arr = [];

    for (let i = 1; i < result + 1; i++) {
        if (result % i == 0) {
            arr.push(i);
        }
    }

    return arr[1];
}

// 모범답안1
function solution(n, x = 1) {
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }
}

// 모범답안2
const solution = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
};
