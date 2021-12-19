// 문제 https://programmers.co.kr/learn/courses/30/lessons/12948
// 2021.12.19 level1 - 핸드폰 번호 가리기

// 내 답안
function solution(phone_number) {
    let result = "*".repeat(phone_number.length - 4);
    let answer = phone_number.substr(phone_number.length - 4, 4);
    return result + answer;
}

// 모범답안 1
function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}

// 모범답안 2
function solution(phone_number) {
    var result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    return result;
}

// 모범답안 3
const solution = (n) => [...n].fill("*", 0, n.length - 4).join("");
