// 문제 https://programmers.co.kr/learn/courses/30/lessons/12906
// 2021.12.23 level1 - 같은 숫자는 싫어

// 내 답안
function solution(arr) {
    let result = [arr[0]];
    for (let i = 0; i < arr.length; i++) {
        if (result[result.length - 1] !== arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

// 모범답안
function solution(arr) {
    return arr.filter((val, index) => val != arr[index + 1]);
}
