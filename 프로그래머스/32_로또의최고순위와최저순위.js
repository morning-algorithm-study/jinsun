// 문제 https://programmers.co.kr/learn/courses/30/lessons/77484
// 2021.12.29 level1 - 로또의 최고 순위와 최저 순위

// 내 답안
function solution(lottos, win_nums) {
    let result = [];
    let answer = [];
    let zero = 0;
    for (let i = 0; i < lottos.length; i++) {
        if (win_nums.includes(lottos[i])) {
            result.push(lottos[i]);
        } else if (lottos[i] == 0) {
            zero += 1;
        }
    }
    answer.push(7 - (result.length + zero), 7 - result.length);
    return answer.map((v, i) => (v == 7 ? 6 : v));
}

// 모범답안
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    let minCount = lottos.filter((v) => win_nums.includes(v)).length;
    let zeroCount = lottos.filter((v) => !v).length;
    const maxCount = minCount + zeroCount;
    return [rank[maxCount], rank[minCount]];
}
