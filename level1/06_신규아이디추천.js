// 문제 https://programmers.co.kr/learn/courses/30/lessons/72410
// 2021.11.17 level1 = 신규 아이디 추천

// 내 답안
function solution(new_id) {
    //1단계 - 모두 소문자로
    let lower = new_id.toLowerCase();
    //2단계 - 특수문자 제외
    let result = lower.replace(/([^-_.a-z0-9])/g, "");
    //3단계 - 연속된 마침표 "." 치환
    while (result.includes("..")) {
        result = result.replace("..", ".");
    }
    //4단계 - 처음이나 끝에 있는 "." 제거
    if (result.charAt(0) == ".") {
        result = result.replace(/^\./g, "");
    }
    if (result.charAt(result.length - 1) == ".") {
        result = result.replace(/\.$/g, "");
    }
    //5단계 - 빈 문자열 "a" 대입
    if (result === "") {
        result = "a";
    }
    //6단계 - 1~15번째 글자
    let answer = result.substr(0, 15);
    //7단계 - 2자 이하면 마지막 글자 추가
    if (answer.charAt(answer.length - 1) == ".") {
        answer = answer.replace(/\.$/g, "");
    }

    while (answer.length < 3) {
        answer += answer.charAt(answer.length - 1);
    }

    return answer;
}

// 모범답안
const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, "")
        .replace(/\.{2,}/g, ".")
        .replace(/^\.|\.$/g, "")
        .padEnd(1, "a")
        .slice(0, 15)
        .replace(/^\.|\.$/g, "");
    return id.padEnd(3, id[id.length - 1]);
};
