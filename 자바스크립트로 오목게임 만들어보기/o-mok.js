import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// 백돌
const white = 0;
// 흑돌
const black = 1;
// 바둑판의 크기
const boardSize = 30;
// 바둑판
const board = Array.from(Array(boardSize), () => Array(boardSize).fill(null));

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

// 올바른 값을 입력했는지 검사
function checkInput(x, y) {
    if (x < 1 && x > boardSize && y < 1 && y > boardSize) {
        return false;
    } else if (board[y][x] != null) {
        return false;
    }
    return true;
}

drawBoard();