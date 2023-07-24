import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 백돌
const white = 0;

// 흑돌
const black = 1;

// 차례
let turn = white;   // 백돌이 먼저 시작하는 게 맞나?

// 바둑판의 크기
const boardSize = 30;

// 바둑판
const board = Array.from(Array(boardSize), () => Array(boardSize).fill(null));


// 규칙 설명
function explainRules() {
    console.log("바둑판을 좌표평면에 투영했을 때, 가장 좌측 하단이 원점입니다.");
    console.log("좌푯값을 입력하면 해당 위치에 바둑돌을 둡니다.");
    console.log("예를 들어, '15,15'를 입력하면 가장 중앙에 바둑돌을 두고,\n '29,0'을 입력하면 가장 우측 하단에 바둑돌을 둡니다.")
    console.log("게임 시작 후 5분이 지나면 종료됩니다.");
    console.log("지금부터 서로 죽여라.");
    console.log("");
}

// 바둑판 그리기
function drawBoard() {
    for (let y = 0; y < boardSize; y++) {
        let line = " ";
        for (let x = 0; x < boardSize; x++) {
            if (board[y][x] === white) {
                line += '0 ';
            } else if (board[y][x] === black) {
                line += '1 ';
            } else if (y === 0) {
                if (x === 0) line += "┌ ";
                else if (x === boardSize - 1) line += "┐ ";
                else line += "┬ ";
            } else if (x === 0) {
                if (y === boardSize - 1) line += "└ ";
                else line += "├ ";
            } else if (x === boardSize - 1) {
                if (y === boardSize - 1) line += "┘ ";
                else line += "┤ ";
            } else if (y === boardSize - 1) {
                line += "┴ ";
            } else {
                line += "┼ ";
            }
        }
        console.log(line);
    }
}

// 5분 지나면 끄기
function timeOver() {
    setTimeout(() => {
        console.log("5분이 지나서 게임이 종료되었습니다.");
        rl.close();
    }, 300000);
};

// 입력받기
function getInput() {
    console.log((turn ? "흑" : "백") + "돌을 둘 좌표를 입력해주세요:")
    rl.once("line", (line) => {
        let [x, y] = line.split(",").map(element => parseInt(element));
        y = flipY(y);
        if (checkInput(x, y)) {
            // 바둑판에 바둑돌 두기
            board[y][x] = turn;
            drawBoard();
            if (checkWinning()) {
                console.log((turn ? "흑" : "백") + "이 이겼습니다!");
                return;
            }
            turn ? turn = white : turn = black;
            getInput();
        } else {
            console.log("올바르지 않은 입력입니다.");
            getInput();
        }
    });
}

// y축 뒤집는 함수
function flipY(y) {
    return (boardSize - 1) - y;
}

// 올바른 값을 입력했는지 검사
function checkInput(x, y) {
    if (x < 0 || x > boardSize - 1 || y < 0 || y > boardSize - 1) {
        return false;
    } else if (board[y][x] != null) {
        return false;
    }
    return true;
}


// 승리했는지 검사
// 검사하는 공간이 null이 아니라면 continuity에 1을 정의함.
// 그 다음 검사에서 값이 연속된다면 continuity를 1 증가시킴.
// continuity가 5 이상이 되면 true를 반환함.
function checkWinning() {
    let continuity = 0;
    // x축 검사
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board.length; x++) {
            // console.log(`보드: ${board[x][y]} x: ${x} y: ${y}`);
            if (board[y][x] != null) {
                if (board[y][x] == board[y][x - 1]) {
                    continuity++;
                    if (continuity >= 5) {
                        return true;
                    }
                } else {
                    continuity = 1;
                }
            }
        }
    }

    // y축 검사
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board.length; y++) {
            if (board[y][x] != null) {
                if (board[y][x] == board[y - 1][x]) {
                    continuity++;
                    if (continuity >= 5) {
                        return true;
                    }
                } else {
                    continuity = 1;
                }
            }
        }
    }

    //
    return false;
}


explainRules();
drawBoard();
timeOver();
getInput();