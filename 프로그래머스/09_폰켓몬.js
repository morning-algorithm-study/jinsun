// 문제 https://programmers.co.kr/learn/courses/30/lessons/1845
// 2021.11.20 level1 - 폰켓몬

// 내 답안
function solution(nums) {
    const result = [...new Set(nums)];
    return result.slice(0, nums.length / 2).length;
}

// 모범답안
function solution(nums) {
    const max = nums.length / 2;
    const arr = [...new Set(nums)];
    return arr.length > max ? max : arr.length;
}
