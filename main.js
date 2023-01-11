"use strict";
function createButton() {
  let title = document.createElement("h1");
  title.innerHTML = "Minesweeper";
  document.getElementById("main").appendChild(title);

  const toolsDiv = document.createElement("div");
  toolsDiv.classList.add("tools");
  document.getElementById("main").appendChild(toolsDiv);

  // let button = document.createElement("button");
  // document.querySelector(".tools").appendChild(button);
  // document.querySelector("button").innerHTML = "START GAME";

  //   let timer = document.createElement();
  //   document.querySelector(".tools").appendChild(timer);
}
createButton();
creteField();

function creteField() {
  let field = document.createElement("div");
  field.classList.add("fieldClass");
  document.getElementById("main").appendChild(field);

  for (let y = 1; y < 9; y++) {
    for (let x = 1; x < 9; x++) {
      createCell(x, y);
    }
  }
}
function createCell(x, y) {
  const cell = document.createElement("div");
  cell.classList.add("classCell");
  cell.setAttribute("positionX", x);
  cell.setAttribute("positionY", y);
  document.querySelector(".fieldClass").appendChild(cell);
}

function createMine() {
  let x = Math.floor(Math.random() * (8 - 1 + 1) + 1);

  let y = Math.floor(Math.random() * (8 - 1 + 1) + 1);

  if (
    document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`).classList
      .value == "classMine"
  ) {
    createMine();
  } else {
    document
      .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
      .classList.add("classMine");
    document
      .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
      .classList.remove("classCell");
  }
}
for (let k = 0; k <= 9; k++) {
  createMine();
}

function checkCell() {
  let arrayCoordinate = [];
  function openAroundclass(x, y, s = 1) {
    console.log(arrayCoordinate + "bcgnfc");
    let arrFull = [
      [x - 1, y - 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x - 1, y],
      [x + 1, y],
      [x - 1, y + 1],
      [x, y + 1],
      [x + 1, y + 1],
    ];
    let arrLeftUppConer = [
      [x + 1, y],
      [x + 1, y + 1],
      [x, y + 1],
    ];
    let arrLeft = [
      [x, y + 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1],
    ];
    if (x > 1 && x < 8 && y > 1 && y < 8) {
      let counter = 0;
      for (let r = 0; r < arrFull.length; r++) {
        if (
          document.querySelector(
            `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
          ).classList.value == "classCell"
        ) {
          let count = 0;
          for (let elem of arrayCoordinate) {
            // console.log(elem[0]);
            if (elem[0] == arrFull[r][0] && elem[1] == arrFull[r][1]) {
              count++;
            }
          }
          if (count == 0) {
            arrayCoordinate.push([arrFull[r][0], arrFull[r][1]]);
            document
              .querySelector(
                `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
              )
              .classList.add("checkClass");
          }
        }

        if (
          document.querySelector(
            `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
          ).classList.value == "classMine"
        ) {
          counter++;
        }
      }
      if (counter > 0) {
        document
          .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.add(`class${counter}`);
      }
    }
    if (x > 1 && x < 8 && y == 1) {
      let counter = 0;
      for (let r = 3; r < arrFull.length; r++) {
        if (
          document.querySelector(
            `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
          ).classList.value == "classCell"
        ) {
          let count = 0;
          for (let elem of arrayCoordinate) {
            // console.log(elem[0]);
            if (elem[0] == arrFull[r][0] && elem[1] == arrFull[r][1]) {
              count++;
            }
          }
          if (count == 0) {
            arrayCoordinate.push([arrFull[r][0], arrFull[r][1]]);
            document
              .querySelector(
                `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
              )
              .classList.add("checkClass");
          }
        }

        if (
          document.querySelector(
            `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
          ).classList.value == "classMine"
        ) {
          counter++;
        }
      }
      if (counter > 0) {
        document
          .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.add(`class${counter}`);
      }
    }
    if (x == 1 && y == 1) {
      let counter = 0;
      for (let r = 0; r < arrLeftUppConer.length; r++) {
        if (
          document.querySelector(
            `[positionX = "${arrLeftUppConer[r][0]}"][positionY = "${arrLeftUppConer[r][1]}"]`
          ).classList.value == "classCell"
        ) {
          let count = 0;
          for (let elem of arrayCoordinate) {
            // console.log(elem[0]);
            if (
              elem[0] == arrLeftUppConer[r][0] &&
              elem[1] == arrLeftUppConer[r][1]
            ) {
              count++;
            }
          }
          if (count == 0) {
            arrayCoordinate.push([
              arrLeftUppConer[r][0],
              arrLeftUppConer[r][1],
            ]);
            document
              .querySelector(
                `[positionX = "${arrLeftUppConer[r][0]}"][positionY = "${arrLeftUppConer[r][1]}"]`
              )
              .classList.add("checkClass");
          }
        }

        if (
          document.querySelector(
            `[positionX = "${arrLeftUppConer[r][0]}"][positionY = "${arrLeftUppConer[r][1]}"]`
          ).classList.value == "classMine"
        ) {
          counter++;
        }
      }
      if (counter > 0) {
        document
          .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.add(`class${counter}`);
      }
    }
    if (x == 1 && y > 1 && y < 8) {
      let counter = 0;
      for (let r = 0; r < arrLeft.length; r++) {
        if (
          document.querySelector(
            `[positionX = "${arrLeft[r][0]}"][positionY = "${arrLeft[r][1]}"]`
          ).classList.value == "classCell"
        ) {
          let count = 0;
          for (let elem of arrayCoordinate) {
            if (elem[0] == arrLeft[r][0] && elem[1] == arrLeft[r][1]) {
              count++;
            }
          }
          if (count == 0) {
            arrayCoordinate.push([arrLeft[r][0], arrLeft[r][1]]);
            document
              .querySelector(
                `[positionX = "${arrLeft[r][0]}"][positionY = "${arrLeft[r][1]}"]`
              )
              .classList.add("checkClass");
          }
        }

        if (
          document.querySelector(
            `[positionX = "${arrLeft[r][0]}"][positionY = "${arrLeft[r][1]}"]`
          ).classList.value == "classMine"
        ) {
          counter++;
        }
      }
      if (counter > 0) {
        document
          .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.add(`class${counter}`);
      }
    }
    if (x == 1 && y == 8) {
      let counter = 0;
      let arrLeftDownConer = [
        [x, y - 1],
        [x + 1, y - 1],
        [x + 1, y],
      ];
      for (let r = 0; r < arrLeftDownConer.length; r++) {
        if (
          document.querySelector(
            `[positionX = "${arrLeftDownConer[r][0]}"][positionY = "${arrLeftDownConer[r][1]}"]`
          ).classList.value == "classCell"
        ) {
          let count = 0;
          for (let elem of arrayCoordinate) {
            if (
              elem[0] == arrLeftDownConer[r][0] &&
              elem[1] == arrLeftDownConer[r][1]
            ) {
              count++;
            }
          }
          if (count == 0) {
            arrayCoordinate.push([
              arrLeftDownConer[r][0],
              arrLeftDownConer[r][1],
            ]);
            document
              .querySelector(
                `[positionX = "${arrLeftDownConer[r][0]}"][positionY = "${arrLeftDownConer[r][1]}"]`
              )
              .classList.add("checkClass");
          }
        }

        if (
          document.querySelector(
            `[positionX = "${arrLeftDownConer[r][0]}"][positionY = "${arrLeftDownConer[r][1]}"]`
          ).classList.value == "classMine"
        ) {
          counter++;
        }
      }
      if (counter > 0) {
        document
          .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.add(`class${counter}`);
      }
    }
    if (x > 1 && x < 8 && y == 8) {
      let counter = 0;
      for (let r = 0; r < 5; r++) {
        if (
          document.querySelector(
            `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
          ).classList.value == "classCell"
        ) {
          let count = 0;
          for (let elem of arrayCoordinate) {
            if (elem[0] == arrFull[r][0] && elem[1] == arrFull[r][1]) {
              count++;
            }
          }
          if (count == 0) {
            arrayCoordinate.push([arrFull[r][0], arrFull[r][1]]);
            document
              .querySelector(
                `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
              )
              .classList.add("checkClass");
          }
        }

        if (
          document.querySelector(
            `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
          ).classList.value == "classMine"
        ) {
          counter++;
        }
      }
      if (counter > 0) {
        document
          .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.add(`class${counter}`);
      }
    }
    if (x == 8 && y == 8) {
      let counter = 0;
      let arrRightDownConer = [
        [x, y - 1],
        [x - 1, y - 1],
        [x - 1, y],
      ];
      for (let r = 0; r < arrRightDownConer.length; r++) {
        if (
          document.querySelector(
            `[positionX = "${arrRightDownConer[r][0]}"][positionY = "${arrRightDownConer[r][1]}"]`
          ).classList.value == "classCell"
        ) {
          let count = 0;
          for (let elem of arrayCoordinate) {
            if (
              elem[0] == arrRightDownConer[r][0] &&
              elem[1] == arrRightDownConer[r][1]
            ) {
              count++;
            }
          }
          if (count == 0) {
            arrayCoordinate.push([
              arrRightDownConer[r][0],
              arrRightDownConer[r][1],
            ]);
            document
              .querySelector(
                `[positionX = "${arrRightDownConer[r][0]}"][positionY = "${arrRightDownConer[r][1]}"]`
              )
              .classList.add("checkClass");
          }
        }

        if (
          document.querySelector(
            `[positionX = "${arrRightDownConer[r][0]}"][positionY = "${arrRightDownConer[r][1]}"]`
          ).classList.value == "classMine"
        ) {
          counter++;
        }
      }
      if (counter > 0) {
        document
          .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.add(`class${counter}`);
      }
    }
    if (x == 8 && y > 1 && y < 8) {
      let counter = 0;
      let arrRight = [
        [x, y - 1],
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y + 1],
      ];
      for (let r = 0; r < arrRight.length; r++) {
        if (
          document.querySelector(
            `[positionX = "${arrRight[r][0]}"][positionY = "${arrRight[r][1]}"]`
          ).classList.value == "classCell"
        ) {
          let count = 0;
          for (let elem of arrayCoordinate) {
            if (elem[0] == arrRight[r][0] && elem[1] == arrRight[r][1]) {
              count++;
            }
          }
          if (count == 0) {
            arrayCoordinate.push([arrRight[r][0], arrRight[r][1]]);
            document
              .querySelector(
                `[positionX = "${arrRight[r][0]}"][positionY = "${arrRight[r][1]}"]`
              )
              .classList.add("checkClass");
          }
        }

        if (
          document.querySelector(
            `[positionX = "${arrRight[r][0]}"][positionY = "${arrRight[r][1]}"]`
          ).classList.value == "classMine"
        ) {
          counter++;
        }
      }
      if (counter > 0) {
        document
          .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.add(`class${counter}`);
      }
    }
    if (x == 8 && y == 1) {
      let counter = 0;
      let arrRightUppConer = [
        [x - 1, y],
        [x - 1, y + 1],
        [x, y + 1],
      ];
      for (let r = 0; r < arrRightUppConer.length; r++) {
        if (
          document.querySelector(
            `[positionX = "${arrRightUppConer[r][0]}"][positionY = "${arrRightUppConer[r][1]}"]`
          ).classList.value == "classCell"
        ) {
          let count = 0;
          for (let elem of arrayCoordinate) {
            if (
              elem[0] == arrRightUppConer[r][0] &&
              elem[1] == arrRightUppConer[r][1]
            ) {
              count++;
            }
          }
          if (count == 0) {
            arrayCoordinate.push([
              arrRightUppConer[r][0],
              arrRightUppConer[r][1],
            ]);
            document
              .querySelector(
                `[positionX = "${arrRightUppConer[r][0]}"][positionY = "${arrRightUppConer[r][1]}"]`
              )
              .classList.add("checkClass");
          }
        }

        if (
          document.querySelector(
            `[positionX = "${arrRightUppConer[r][0]}"][positionY = "${arrRightUppConer[r][1]}"]`
          ).classList.value == "classMine"
        ) {
          counter++;
        }
      }
      if (counter > 0) {
        document
          .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.add(`class${counter}`);
      }
    }
    // console.log(arrayCoordinate);
    if (s != 1) {
      for (let k = 0; k < arrayCoordinate.length; k++) {
        if (arrayCoordinate[k][0] == x && arrayCoordinate[k][1] == y) {
          // alert("SoS");
          arrayCoordinate.splice(k, 1);

          // console.log(arrayCoordinate + "jkl ncxbnfk;bf");
        }
      }
    }
    // console.log(arrayCoordinate);
    if (arrayCoordinate.length > 0) {
      openAroundclass(arrayCoordinate[0][0], arrayCoordinate[0][1], 10);
      arrayCoordinate.shift();
    }
  }

  openAroundclass(1, 1);
}

checkCell();

console.log(document.querySelector(".checkClass"));
function closeCell() {
  for (let y = 1; y < 9; y++) {
    for (let x = 1; x < 9; x++) {
      document
        .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
        .classList.add("closeCell");
      if (
        document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.value != "classMine closeCell"
      ) {
        // alert("Yes");
        document
          .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
          .classList.remove("checkClass");
      }
    }
  }
}
closeCell();

document.addEventListener("click", function (event) {
  // console.log(event.target.classList.value);
  if (event.target.classList.value == "classMine closeCell") {
    event.target.classList.remove("closeCell");
    event.target.classList.add("classBoom");
    event.target.classList.remove("classMine");
    // alert("Game Over");
    return;
  }
  if (
    event.target.classList.value == "classCell class1 closeCell" ||
    event.target.classList.value == "classCell class2 closeCell" ||
    event.target.classList.value == "classCell class3 closeCell" ||
    event.target.classList.value == "classCell class4 closeCell" ||
    event.target.classList.value == "classCell class5 closeCell" ||
    event.target.classList.value == "classCell class6 closeCell" ||
    event.target.classList.value == "classCell class7 closeCell" ||
    event.target.classList.value == "classCell class8 closeCell"
  ) {
    event.target.classList.remove("closeCell");
  }
  if (event.target.classList.value == "classCell closeCell") {
    event.target.classList.remove("closeCell");

    let arrayCoordinate = [];
    let x = Number(event.target.getAttribute("positionx"));
    let y = Number(event.target.getAttribute("positiony"));
    // let coordinate = [x, y];
    // console.log(coordinate[0]);
    // console.log(coordinate[1]);
    openAround(x, y);
    // console.log(arrayCoordinate);
    function openAround(x, y, s = 1) {
      let arrFull = [
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
      ];
      let arrLeftUppConer = [
        [x + 1, y],
        [x + 1, y + 1],
        [x, y + 1],
      ];
      let arrLeft = [
        [x, y + 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1],
      ];
      if (x > 1 && x < 8 && y > 1 && y < 8) {
        let counter = 0;
        for (let r = 0; r < arrFull.length; r++) {
          if (
            document.querySelector(
              `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
            ).classList.value == "classCell closeCell"
          ) {
            arrayCoordinate.push([arrFull[r][0], arrFull[r][1]]);
          }

          if (
            document.querySelector(
              `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
            ).classList.value == "classMine closeCell"
          ) {
            counter++;
          } else
            document
              .querySelector(
                `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
              )
              .classList.remove("closeCell");
        }
        if (counter > 0) {
          document
            .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
            .classList.add(`class${counter}`);
        }
      }
      if (x > 1 && x < 8 && y == 1) {
        let counter = 0;
        for (let r = 3; r < arrFull.length; r++) {
          if (
            document.querySelector(
              `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
            ).classList.value == "classCell closeCell"
          ) {
            arrayCoordinate.push([arrFull[r][0], arrFull[r][1]]);
          }

          if (
            document.querySelector(
              `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
            ).classList.value == "classMine closeCell"
          ) {
            counter++;
          } else
            document
              .querySelector(
                `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
              )
              .classList.remove("closeCell");
        }
        if (counter > 0) {
          document
            .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
            .classList.add(`class${counter}`);
        }
      }
      if (x == 1 && y == 1) {
        let counter = 0;
        for (let r = 0; r < arrLeftUppConer.length; r++) {
          if (
            document.querySelector(
              `[positionX = "${arrLeftUppConer[r][0]}"][positionY = "${arrLeftUppConer[r][1]}"]`
            ).classList.value == "classCell closeCell"
          ) {
            arrayCoordinate.push([
              arrLeftUppConer[r][0],
              arrLeftUppConer[r][1],
            ]);
          }
          if (
            document.querySelector(
              `[positionX = "${arrLeftUppConer[r][0]}"][positionY = "${arrLeftUppConer[r][1]}"]`
            ).classList.value == "classMine closeCell"
          ) {
            counter++;
          } else
            document
              .querySelector(
                `[positionX = "${arrLeftUppConer[r][0]}"][positionY = "${arrLeftUppConer[r][1]}"]`
              )
              .classList.remove("closeCell");
        }
        if (counter > 0) {
          document
            .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
            .classList.add(`class${counter}`);
        }
      }
      if (x == 1 && y > 1 && y < 8) {
        let counter = 0;
        for (let r = 0; r < arrLeft.length; r++) {
          if (
            document.querySelector(
              `[positionX = "${arrLeft[r][0]}"][positionY = "${arrLeft[r][1]}"]`
            ).classList.value == "classCell closeCell"
          ) {
            arrayCoordinate.push([arrLeft[r][0], arrLeft[r][1]]);
          }

          if (
            document.querySelector(
              `[positionX = "${arrLeft[r][0]}"][positionY = "${arrLeft[r][1]}"]`
            ).classList.value == "classMine closeCell"
          ) {
            counter++;
          } else
            document
              .querySelector(
                `[positionX = "${arrLeft[r][0]}"][positionY = "${arrLeft[r][1]}"]`
              )
              .classList.remove("closeCell");
        }
        if (counter > 0) {
          document
            .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
            .classList.add(`class${counter}`);
        }
      }
      if (x == 1 && y == 8) {
        let counter = 0;
        let arrLeftDownConer = [
          [x, y - 1],
          [x + 1, y - 1],
          [x + 1, y],
        ];
        for (let r = 0; r < arrLeftDownConer.length; r++) {
          if (
            document.querySelector(
              `[positionX = "${arrLeftDownConer[r][0]}"][positionY = "${arrLeftDownConer[r][1]}"]`
            ).classList.value == "classCell closeCell"
          ) {
            arrayCoordinate.push([
              arrLeftDownConer[r][0],
              arrLeftDownConer[r][1],
            ]);
          }

          if (
            document.querySelector(
              `[positionX = "${arrLeftDownConer[r][0]}"][positionY = "${arrLeftDownConer[r][1]}"]`
            ).classList.value == "classMine closeCell"
          ) {
            counter++;
          } else
            document
              .querySelector(
                `[positionX = "${arrLeftDownConer[r][0]}"][positionY = "${arrLeftDownConer[r][1]}"]`
              )
              .classList.remove("closeCell");
        }
        if (counter > 0) {
          document
            .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
            .classList.add(`class${counter}`);
        }
      }
      if (x > 1 && x < 8 && y == 8) {
        let counter = 0;
        for (let r = 0; r < 5; r++) {
          if (
            document.querySelector(
              `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
            ).classList.value == "classCell closeCell"
          ) {
            arrayCoordinate.push([arrFull[r][0], arrFull[r][1]]);
          }
          if (
            document.querySelector(
              `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
            ).classList.value == "classMine closeCell"
          ) {
            counter++;
          } else
            document
              .querySelector(
                `[positionX = "${arrFull[r][0]}"][positionY = "${arrFull[r][1]}"]`
              )
              .classList.remove("closeCell");
        }
        if (counter > 0) {
          document
            .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
            .classList.add(`class${counter}`);
        }
      }
      if (x == 8 && y == 8) {
        let counter = 0;
        let arrRightDownConer = [
          [x, y - 1],
          [x - 1, y - 1],
          [x - 1, y],
        ];
        for (let r = 0; r < arrRightDownConer.length; r++) {
          if (
            document.querySelector(
              `[positionX = "${arrRightDownConer[r][0]}"][positionY = "${arrRightDownConer[r][1]}"]`
            ).classList.value == "classCell closeCell"
          ) {
            arrayCoordinate.push([
              arrRightDownConer[r][0],
              arrRightDownConer[r][1],
            ]);
          }

          if (
            document.querySelector(
              `[positionX = "${arrRightDownConer[r][0]}"][positionY = "${arrRightDownConer[r][1]}"]`
            ).classList.value == "classMine closeCell"
          ) {
            counter++;
          } else
            document
              .querySelector(
                `[positionX = "${arrRightDownConer[r][0]}"][positionY = "${arrRightDownConer[r][1]}"]`
              )
              .classList.remove("closeCell");
        }
        if (counter > 0) {
          document
            .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
            .classList.add(`class${counter}`);
        }
      }
      if (x == 8 && y > 1 && y < 8) {
        let counter = 0;
        let arrRight = [
          [x, y - 1],
          [x - 1, y - 1],
          [x - 1, y],
          [x - 1, y + 1],
          [x, y + 1],
        ];
        for (let r = 0; r < arrRight.length; r++) {
          if (
            document.querySelector(
              `[positionX = "${arrRight[r][0]}"][positionY = "${arrRight[r][1]}"]`
            ).classList.value == "classCell closeCell"
          ) {
            arrayCoordinate.push([arrRight[r][0], arrRight[r][1]]);
          }
          if (
            document.querySelector(
              `[positionX = "${arrRight[r][0]}"][positionY = "${arrRight[r][1]}"]`
            ).classList.value == "classMine closeCell"
          ) {
            counter++;
          } else
            document
              .querySelector(
                `[positionX = "${arrRight[r][0]}"][positionY = "${arrRight[r][1]}"]`
              )
              .classList.remove("closeCell");
        }
        if (counter > 0) {
          document
            .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
            .classList.add(`class${counter}`);
        }
      }
      if (x == 8 && y == 1) {
        let counter = 0;
        let arrRightUppConer = [
          [x - 1, y],
          [x - 1, y + 1],
          [x, y + 1],
        ];
        for (let r = 0; r < arrRightUppConer.length; r++) {
          if (
            document.querySelector(
              `[positionX = "${arrRightUppConer[r][0]}"][positionY = "${arrRightUppConer[r][1]}"]`
            ).classList.value == "classCell closeCell"
          ) {
            arrayCoordinate.push([
              arrRightUppConer[r][0],
              arrRightUppConer[r][1],
            ]);
          }
          if (
            document.querySelector(
              `[positionX = "${arrRightUppConer[r][0]}"][positionY = "${arrRightUppConer[r][1]}"]`
            ).classList.value == "classMine closeCell"
          ) {
            counter++;
          } else
            document
              .querySelector(
                `[positionX = "${arrRightUppConer[r][0]}"][positionY = "${arrRightUppConer[r][1]}"]`
              )
              .classList.remove("closeCell");
        }
        if (counter > 0) {
          document
            .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
            .classList.add(`class${counter}`);
        }
      }

      for (let i = 0; i < arrayCoordinate.length; i++) {
        document
          .querySelector(
            `[positionX = "${arrayCoordinate[i][0]}"][positionY = "${arrayCoordinate[i][1]}"]`
          )
          .classList.remove("closeCell");
      }

      if (s != 1) {
        for (let k = 0; k < arrayCoordinate.length; k++) {
          if (arrayCoordinate[k][0] == x && arrayCoordinate[k][1] == y) {
            arrayCoordinate.splice(k, 1);
          }
        }
      }

      if (arrayCoordinate.length > 0) {
        openAround(arrayCoordinate[0][0], arrayCoordinate[0][1], 10);
      }
    }
  }
});
