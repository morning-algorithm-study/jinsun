//문제 https://programmers.co.kr/learn/courses/30/lessons/42576
// 2021.12.09 level1 - 완주하지 못한 선수

// 내 답안
function solution(participant, completion) {
    let result = [...new Set(participant.concat(completion))];
    console.log(result);
}

// splice 처리 해보기
// 동명이인 처리가 안됨
//ㅠㅠㅠㅠㅠ 모르겠다 어떻게 하는거지
