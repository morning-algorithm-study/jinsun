// 문제 https://programmers.co.kr/learn/courses/30/lessons/12903
// 2021.11.25 level1 - 가운데 글자 가져오기

// 내 답안
function solution(s) {
    if (s.length % 2 !== 0) {
        let num = s.length - 1;
        return s.substr(num / 2, 1);
    } else {
        return s.substr(s.length / 2 - 1, 2);
    }
}

// 모범답안
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
