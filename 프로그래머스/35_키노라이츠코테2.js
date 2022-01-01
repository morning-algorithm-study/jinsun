// 2022.1.1
// 키노라이츠 코딩테스트 2번 문제

// 문제설명
// 중앙값(median)은 어떤 주어진 값들을 크기 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 {1, 2, 50} 의 중앙값은 2입니다.
// N x N 크기의 행렬이 있을 때, 행별로, 혹은 열별로 중앙값을 구할 수 있습니다. 다음은 행, 열별로 중앙값을 구하는 그림입니다.

// 중앙값2_hlkvv3.png

// 예를 들어 첫 번째 행의 중앙값은 19이며, 다섯 번째 열의 중앙값은 23이 됩니다. 이때, 자신이 속한 행과 열 모두에서 자기 자신이 중앙값인 원소는 11과 13의 두 개가 있습니다.

// N x N 크기의 행렬 matrix가 매개변수로 주어질 때, 자신이 속한 행, 열에서 동시에 중앙값인 원소의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// matrix는 N x N 크기의 행렬을 나타내는 2차원 배열입니다.
// matrix의 크기 N은 3 이상 99 이하의 자연수이며 N은 항상 홀수입니다.
// matrix의 원소는 1 이상 100,000 이하의 자연수입니다.
// matrix에는 같은 숫자가 중복해서 들어있지 않습니다.
// 입출력 예
// matrix	result
// [[1,19,20,8,25],[21,4,3,17,24],[12,5,6,16,15],[11,18,10,9,23],[7,13,14,22,2]]	2
// [[4,2,9],[1,3,5],[6,8,7]]	3
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 자신이 속한 행과 열 모두에서 자기 자신이 중앙값인 원소는 4, 3, 7의 세 개가 있습니다.

// 내 답안
function solution(matrix) {
    let rowM = [];
    let column = [];
    let arr = [];
    let columnM = [];
    let answer = [];
    let m2 = matrix.map((m) => m.slice());
    for (let i = 0; i < matrix.length; i++) {
        let rowSort = matrix[i].sort((a, b) => a - b);
        rowM.push(rowSort[(matrix.length - 1) / 2]);
        for (let j = 0; j < matrix.length; j++) {
            arr.push(m2[j][i]);
        }
    }
    for (let k = 0; k < matrix.length; k++) {
        column.push(arr.splice(0, matrix.length));
        let columnSort = column[k].sort((a, b) => a - b);
        columnM.push(columnSort[(matrix.length - 1) / 2]);
        if (rowM.includes(columnM[k])) {
            answer.push(columnM[k]);
        }
    }
    return answer.length;
}

// 팀원 답안
function solution(matrix) {
    const M = matrix.map((v) => v.slice());
    let rowM = [];
    for (let i of matrix) {
        let sortedM = i.sort((a, b) => a - b);
        rowM.push(i[Math.floor(sortedM.length / 2)]);
    }
    const zip = (rows) => rows[0].map((_, c) => rows.map((row) => row[c]));
    const transpose = zip([...M]);
    let columnM = [];
    for (let i of transpose) {
        i.sort((a, b) => a - b);
        columnM.push(i[Math.floor(i.length / 2)]);
    }
    const answer = rowM.filter((a) => columnM.includes(a));
    return answer.length;
}
