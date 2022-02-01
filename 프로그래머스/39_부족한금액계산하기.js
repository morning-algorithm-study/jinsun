// 문제 https://programmers.co.kr/learn/courses/30/lessons/82612
// 2022.01.31 level1 - 부족한 금액 계산하기

// 내 답안
function solution(price, money, count) {
    let num = [];
    for (let i = 0; i < count; i++) {
        num.push(price + price * i);
    }
    let answer = num.reduce((a, b) => a + b);
    return answer < money ? 0 : answer - money;
}

// 모범답안1 - 가우스 공식 알아보기
function solution(price, money, count) {
    const tmp = (price * count * (count + 1)) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

// 모범답안2
function solution(price, money, count) {
    let answer = 0;
    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }
    return answer > money ? answer - money : 0;
}
