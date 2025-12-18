console.log("Tic-Tac-Toe game initialized.");
let audio1 = new Audio("./assets/ting.mp3");
let turn = "X";

let music = new Audio("./assets/music.mp3");
let gameover = new Audio("./assets/gameover.mp3");
let isgameover = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

/*music.play();*/

const newGame = () => {
  if (!isgameover) {
  }
};

document.getElementsByClassName("reset")[0].addEventListener("click", () => {
  let boxtext = document.getElementsByClassName("box-text");

  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });

  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".gif").style.width = "0px";
});

const checkWin = () => {
  let boxtext = document.getElementsByClassName("box-text");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isgameover = true;
      gameover.play();
      document.querySelector("img").style.width = "200px";
      console.log(`${boxtext[e[0]]} won`);
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vh, ${e[4]}vh) rotate(${e[5]}deg)`;
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".box-text");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audio1.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});
