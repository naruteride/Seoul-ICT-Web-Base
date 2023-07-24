const boardSize = 30; // 바둑판의 크기

const white = 0; // 백돌
const black = 1; // 흑돌

// 바둑판 그리기
function drawInit() {
    for (let i = 0; i < boardSize; i++) {
        let line = " ";
        for (let j = 0; j < boardSize; j++) {
            if (i === 0) {
                if (j === 0) line += "┌ ";
                else if (j === boardSize - 1) line += "┐ ";
                else line += "┬ ";
            } else if (j === 0) {
                if (i === boardSize - 1) line += "└ ";
                else line += "├ ";
            } else if (j === boardSize - 1) {
                if (i === boardSize - 1) line += "┘ ";
                else line += "┤ ";
            } else if (i === boardSize - 1) {
                line += "┴ ";
            } else {
                line += "┼ ";
            }
        }
        console.log(line);
    }
}

drawInit();
