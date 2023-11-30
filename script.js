"use strict";

// variables
const winnerText = document.querySelector(".winnerText");
const inputsField = document.querySelectorAll("input");
const resetBtn = document.querySelector(".resetBtn");
const inp1 = document.querySelector(".play1");
const inp2 = document.querySelector(".play2");
const inp3 = document.querySelector(".play3");
const inp4 = document.querySelector(".play4");
const inp5 = document.querySelector(".play5");
const inp6 = document.querySelector(".play6");
const inp7 = document.querySelector(".play7");
const inp8 = document.querySelector(".play8");
const inp9 = document.querySelector(".play9");

// defining turn and winner
let turn = true;
let moves = 0;
let winner;

// onClicking the input fields
inputsField.forEach((input) => {
  input.addEventListener("click", (e) => {
    // unfocusing the input field
    e.target.blur();

    // move increment
    moves += 1;

    // setting the value to the input fields
    if (turn) {
      e.target.value = "X";
    } else {
      e.target.value = "O";
    }

    // enabling the disabled
    e.target.disabled = true;

    // toggling the turn
    turn = !turn;

    // declaring winner
    winnerDeclare();

    if (!winner) {
      // end of moves
      if (moves === 9) {
        winnerText.style.display = "inline";
        winnerText.textContent = `Click on Reset to reset the game`;
      }
      return;
    }

    winnerText.textContent = `Congratulations!🎉 ${winner} is the winner.`;
    winnerText.style.display = "inline";
  });
});
// winning pattern
function colorChange(inpA, inpB, inpC) {
  inpA.style.backgroundColor = "red";
  inpB.style.backgroundColor = "red";
  inpC.style.backgroundColor = "red";
}

// winning logic
function winnerDeclare() {
  // X as a winner
  if (inp1.value === "X" && inp2.value === "X" && inp3.value === "X") {
    winner = "player 1";
    colorChange(inp1, inp2, inp3);
  } else if (inp4.value === "X" && inp5.value === "X" && inp6.value === "X") {
    winner = "player 1";
    colorChange(inp4, inp5, inp6);
  } else if (inp7.value === "X" && inp8.value === "X" && inp9.value === "X") {
    winner = "player 1";
    colorChange(inp7, inp8, inp9);
  } else if (inp1.value === "X" && inp4.value === "X" && inp7.value === "X") {
    winner = "player 1";
    colorChange(inp1, inp4, inp7);
  } else if (inp2.value === "X" && inp5.value === "X" && inp8.value === "X") {
    winner = "player 1";
    colorChange(inp2, inp5, inp8);
  } else if (inp3.value === "X" && inp6.value === "X" && inp9.value === "X") {
    winner = "player 1";
    colorChange(inp3, inp6, inp9);
  } else if (inp1.value === "X" && inp5.value === "X" && inp9.value === "X") {
    winner = "player 1";
    colorChange(inp1, inp5, inp9);
  } else if (inp3.value === "X" && inp5.value === "X" && inp7.value === "X") {
    winner = "player 1";
    colorChange(inp3, inp5, inp7);
  }
  //O as a winner
  else {
    if (inp1.value === "O" && inp2.value === "O" && inp3.value === "O") {
      winner = "player 2";
      colorChange(inp1, inp2, inp3);
    } else if (inp4.value === "O" && inp5.value === "O" && inp6.value === "O") {
      winner = "player 2";
      colorChange(inp4, inp5, inp6);
    } else if (inp7.value === "O" && inp8.value === "O" && inp9.value === "O") {
      winner = "player 2";
      colorChange(inp7, inp8, inp9);
    } else if (inp1.value === "O" && inp4.value === "O" && inp7.value === "O") {
      winner = "player 2";
      colorChange(inp1, inp4, inp7);
    } else if (inp2.value === "O" && inp5.value === "O" && inp8.value === "O") {
      winner = "player 2";
      colorChange(inp2, inp5, inp8);
    } else if (inp3.value === "O" && inp6.value === "O" && inp9.value === "O") {
      winner = "player 2";
      colorChange(inp3, inp6, inp9);
    } else if (inp1.value === "O" && inp5.value === "O" && inp9.value === "O") {
      winner = "player 2";
      colorChange(inp1, inp5, inp9);
    } else if (inp3.value === "O" && inp5.value === "O" && inp7.value === "O") {
      winner = "player 2";
      colorChange(inp3, inp5, inp7);
    }
  }
}

// on Clicking reset
resetBtn.addEventListener("click", () => {
  // clearing the input field
  inputsField.forEach((input) => {
    input.value = "";
    input.disabled = false;
    input.style.backgroundColor = "";
    moves = 0;
  });

  //hiding the winner message
  winnerText.style.display = "none";
  winner = "";
});
