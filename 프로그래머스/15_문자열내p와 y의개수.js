// 문제 https://programmers.co.kr/learn/courses/30/lessons/12916
// 2021.12.07 level1 - 문자열 내 p와 y의 개수

// 내 답안
function solution(s) {
    let result = s.toLowerCase().split("");
    let p = [];
    let y = [];
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "p") {
            p.push(result[i]);
        } else if (result[i] == "y") {
            y.push(result[i]);
        }
    }
    return p.length == y.length ? true : false;
}

// 모범답안
function numPY(s) {
    return (
        s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
    );
}
