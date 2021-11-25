// 문제 https://programmers.co.kr/learn/courses/30/lessons/12919
// 2021.11.25 level1 - 서울에서 김서방 찾기

// 내 답안
function solution(seoul) {
    let answer = seoul.indexOf("Kim");
    return `김서방은 ${answer}에 있다`;
}

// 모범답안
function findKim(seoul) {
    return "김서방은 " + seoul.indexOf("Kim") + "에 있다";
}
