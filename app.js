let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (box.textContent === "" && turn0) {
      box.textContent = "X";
      turn0 = false;
      count++;
    } else if (box.textContent === "" && !turn0) {
      box.textContent = "O";
      turn0 = true;
      count++;
    }
    box.disabled = true;

    let winner = checkWinCondition();
    if (winner) {
      setTimeout(() => {
        alert(`Player ${winner} wins!!!`);
        resetBoard();
      }, 100);
  });
});

const checkWinCondition = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        return pos1Val;
      }
    }
  }
  if (count === 9) {
     setTimeout(() => {
      alert("It's a draw!");
      resetBoard();
    }, 100);
  }
};

const resetBoard = () => {
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
  });
  turn0 = true;
  count = 0;
};

