// 문제 https://programmers.co.kr/learn/courses/30/lessons/86491
// 2021.11.19 level1 - 최소직사각형

// 내 답안
function solution(sizes) {
    var w = [];
    let h = [];
    let result = sizes.map((size, idx) => size.sort((a, b) => b - a));
    let result2 = result.map((v, idx) => {
        w.push(v[0]), h.push(v[1]);
    });
    let wSort = w.sort((a, b) => b - a);
    let hSort = h.sort((a, b) => b - a);
    console.log(wSort, hSort);
    return wSort[0] * hSort[0];
}

// 모범답안
function solution(sizes) {
    const newSizes = sizes.map((e) => e.sort((a, b) => a - b));
    return (
        Math.max(...newSizes.map((e) => e[0])) *
        Math.max(...newSizes.map((e) => e[1]))
    );
}
