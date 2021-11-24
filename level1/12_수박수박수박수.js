// 문제 https://programmers.co.kr/learn/courses/30/lessons/12922
// 2021.11.24 level1 - 수박수박수박수박수박수?

// 내 답안
function solution(n) {
    let answer = "";
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            answer += "수";
        } else {
            answer += "박";
        }
    }
    return answer;
}

// 모범답안
const waterMelon = (n) => "수박".repeat(n).slice(0, n);

// 재밌었던 답안
function waterMelon(n) {
    var result =
        "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박";
    return result.substring(0, n);
}
