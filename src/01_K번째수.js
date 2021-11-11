// 문제 : https://programmers.co.kr/learn/courses/30/lessons/42748
// 2021.11.11 프로그래머스 level 1 - K번째 수

array = [1, 5, 2, 6, 3, 7, 4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

function solution(array, commands){
    let answer = [],

    for (let a = 0; a < commands.length; a++){
        let i = commands[a][0]
        let j = commands[a][1]
        let k = commands[a][2]

        let result = array.slice(i-1, j).sort((a,b) => a-b)
        answer.push(result[k-1])
    }

    return answer
}