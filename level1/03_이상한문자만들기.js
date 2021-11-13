// 문제 https://programmers.co.kr/learn/courses/30/lessons/12930
// 2021.11.13 level1 - 이상한 문자 만들기

let s = "try hello world";

// 내 답안
function solution(s) {
    let split = s.split(" ");
    let answer = "";
    let array = split.map((word, idx) => {
        for (let i = 0; i < word.length; i++) {
            if (i % 2 == 0) {
                answer += word[i].toUpperCase();
            } else if (i % 2 == 1) {
                answer += word[i].toLowerCase();
            }
        }
        answer += " ";
    });
    return answer.substr(0, answer.length - 1);
}

// 모범답안
function toWeirdCase(s) {
    return s
        .split(" ")
        .map((a) => {
            return a
                .split("")
                .map((b, i) => {
                    return i % 2 === 0 ? b.toUpperCase() : b.toLowerCase();
                })
                .join("");
        })
        .join(" ");
}
