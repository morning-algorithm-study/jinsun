// 문제 https://programmers.co.kr/learn/courses/30/lessons/12918
// 2021.12.22 level1 - 문자열 다루기 기본

// 내 답안
function solution(s) {
    let regex = s.match(/[a-zA-Z]/g);
    if (regex) {
        return false;
    } else if (s.length == 4 || s.length == 6) {
        return true;
    } else {
        return false;
    }
}

// 모범답안1
function solution(s) {
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}

// 모범답안2
function solution(s) {
    return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}
