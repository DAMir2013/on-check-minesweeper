"use strict";
function createButton(value) {
    let title = document.createElement("h1");
    title.innerHTML = "Minesweeper";
    document.getElementById("main").appendChild(title);

    const toolsDiv = document.createElement("div");
    toolsDiv.classList.add("tools");
    document.getElementById("main").appendChild(toolsDiv);

    let numberMine = document.createElement("div");
    numberMine.classList.add("numberMines");
    document.querySelector(".tools").appendChild(numberMine);
    document.querySelector(".numberMines").innerHTML = "10 Mines";

    let button = document.createElement("button");
    document.querySelector(".tools").appendChild(button);
    document.querySelector("button").innerHTML = "START GAME";

    let timer = document.createElement("div");
    timer.classList.add("timerClass");
    document.querySelector(".tools").appendChild(timer);
    document.querySelector(".timerClass").innerHTML = "00";

    let startTimer = button.addEventListener("click", clickButton);
}
let timerId;
function clickButton() {
    optimizeCalls();
    let i = 1;

    timerId = setInterval(function () {
        if (i < 10) {
            document.querySelector(".timerClass").innerHTML = "0" + i;
        } else {
            document.querySelector(".timerClass").innerHTML = i;
        }

        i++;
    }, 1000);
}

createButton(1);
// createButton(10);

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
        document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
            .classList.value == "classMine"
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

function getArr(x, y, value) {
    let arr1 = [
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
    ];
    let arr2 = [
        [x - 1, y],
        [x + 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
    ];

    let arr3 = [
        [x + 1, y],
        [x + 1, y + 1],
        [x, y + 1],
    ];
    let arr4 = [
        [x, y + 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1],
    ];
    let arr5 = [
        [x, y - 1],
        [x + 1, y - 1],
        [x + 1, y],
    ];
    let arr6 = [
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x - 1, y],
        [x + 1, y],
    ];
    let arr7 = [
        [x, y - 1],
        [x - 1, y - 1],
        [x - 1, y],
    ];
    let arr8 = [
        [x, y - 1],
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y + 1],
    ];
    let arr9 = [
        [x - 1, y],
        [x - 1, y + 1],
        [x, y + 1],
    ];

    switch (value) {
        case 1:
            return arr1;
            break;
        case 2:
            return arr2;
            break;
        case 3:
            return arr3;
            break;
        case 4:
            return arr4;
            break;
        case 5:
            return arr5;
            break;
        case 6:
            return arr6;
            break;
        case 7:
            return arr7;
            break;
        case 8:
            return arr8;
            break;
        case 9:
            return arr9;
            break;
    }
}

let arrayCoordinate = [];

function checkCondition(x, y, l) {
    let array = getArr(x, y, l);

    let counter = 0;

    for (let r = 0; r < array.length; r++) {
        if (
            document.querySelector(
                `[positionX = "${array[r][0]}"][positionY = "${array[r][1]}"]`
            ).classList.value == "classCell"
        ) {
            let count = 0;
            for (let elem of arrayCoordinate) {
                if (elem[0] == array[r][0] && elem[1] == array[r][1]) {
                    count++;
                }
            }
            if (count == 0) {
                arrayCoordinate.push([array[r][0], array[r][1]]);
                document
                    .querySelector(
                        `[positionX = "${array[r][0]}"][positionY = "${array[r][1]}"]`
                    )
                    .classList.add("checkClass");
            }
        }

        if (
            document.querySelector(
                `[positionX = "${array[r][0]}"][positionY = "${array[r][1]}"]`
            ).classList.value == "classMine"
        ) {
            counter++;
        }
    }
    if (counter > 0) {
        if (
            document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
                .classList.value != "classMine"
        ) {
            document
                .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
                .classList.add(`class${counter}`);
        }
    }
}

function checkCell() {
    for (let k = 0; k <= 9; k++) {
        createMine();
    }
    // let arrayCoordinate = [];

    function openAroundclass(x, y, s = 1) {
        if (x > 1 && x < 8 && y > 1 && y < 8) {
            checkCondition(x, y, 1);
        }
        if (x > 1 && x < 8 && y == 1) {
            checkCondition(x, y, 2);
        }
        if (x == 1 && y == 1) {
            checkCondition(x, y, 3);
        }
        if (x == 1 && y > 1 && y < 8) {
            checkCondition(x, y, 4);
        }
        if (x == 1 && y == 8) {
            checkCondition(x, y, 5);
        }
        if (x > 1 && x < 8 && y == 8) {
            checkCondition(x, y, 6);
        }
        if (x == 8 && y == 8) {
            checkCondition(x, y, 7);
        }
        if (x == 8 && y > 1 && y < 8) {
            checkCondition(x, y, 8);
        }
        if (x == 8 && y == 1) {
            checkCondition(x, y, 9);
        }

        if (s != 1) {
            for (let k = 0; k < arrayCoordinate.length; k++) {
                if (arrayCoordinate[k][0] == x && arrayCoordinate[k][1] == y) {
                    // alert("SoS");
                    arrayCoordinate.splice(k, 1);
                }
            }
        }

        if (arrayCoordinate.length > 0) {
            openAroundclass(arrayCoordinate[0][0], arrayCoordinate[0][1], 10);
            arrayCoordinate.shift();
        }
    }

    openAroundclass(1, 1);
}

function closeCell() {
    for (let y = 1; y < 9; y++) {
        for (let x = 1; x < 9; x++) {
            document
                .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
                .classList.add("closeCell");
            if (
                document.querySelector(
                    `[positionX = "${x}"][positionY = "${y}"]`
                ).classList.value != "classMine closeCell"
            ) {
                document
                    .querySelector(`[positionX = "${x}"][positionY = "${y}"]`)
                    .classList.remove("checkClass");
            }
        }
    }
}

function openListener() {
    document.addEventListener("click", getCoord);
}
function getCoord(event) {
    document.querySelector("button").removeEventListener("click", clickButton);

    if (event.target.classList.value == "classMine closeCell") {
        event.target.classList.remove("closeCell");
        event.target.classList.add("classBoom");
        event.target.classList.remove("classMine");
        document.removeEventListener("click", getCoord);

        for (let y = 1; y < 9; y++) {
            for (let x = 1; x < 9; x++) {
                if (
                    document.querySelector(
                        `[positionX = "${x}"][positionY = "${y}"]`
                    ).classList.value == "classMine closeCell"
                ) {
                    document
                        .querySelector(
                            `[positionX = "${x}"][positionY = "${y}"]`
                        )
                        .classList.add("classBoom");
                    document
                        .querySelector(
                            `[positionX = "${x}"][positionY = "${y}"]`
                        )
                        .classList.remove("classMine");
                }
                if (
                    document.querySelector(
                        `[positionX = "${x}"][positionY = "${y}"]`
                    ).classList.value == "classMine closeCell flagImg"
                ) {
                    document
                        .querySelector(
                            `[positionX = "${x}"][positionY = "${y}"]`
                        )
                        .classList.remove("flagImg");
                    document
                        .querySelector(
                            `[positionX = "${x}"][positionY = "${y}"]`
                        )
                        .classList.add("classBoom");
                    document
                        .querySelector(
                            `[positionX = "${x}"][positionY = "${y}"]`
                        )
                        .classList.remove("classMine");
                }
            }
        }
        clearInterval(timerId);
        openListenerRight(10);
        alert("End of Game");
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

        // let arrayCoordinate = [];
        let x = Number(event.target.getAttribute("positionx"));
        let y = Number(event.target.getAttribute("positiony"));
        openAround(x, y, 1);
        function openAround(x, y, s) {
            if (x > 1 && x < 8 && y > 1 && y < 8) {
                checkClick(x, y, 1);
            }
            if (x > 1 && x < 8 && y == 1) {
                checkClick(x, y, 2);
            }
            if (x == 1 && y == 1) {
                checkClick(x, y, 3);
            }
            if (x == 1 && y > 1 && y < 8) {
                checkClick(x, y, 4);
            }
            if (x == 1 && y == 8) {
                checkClick(x, y, 5);
            }
            if (x > 1 && x < 8 && y == 8) {
                checkClick(x, y, 6);
            }
            if (x == 8 && y == 8) {
                checkClick(x, y, 7);
            }
            if (x == 8 && y > 1 && y < 8) {
                checkClick(x, y, 8);
            }
            if (x == 8 && y == 1) {
                checkClick(x, y, 9);
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
                    if (
                        arrayCoordinate[k][0] == x &&
                        arrayCoordinate[k][1] == y
                    ) {
                        arrayCoordinate.splice(k, 1);
                    }
                }
            }

            if (arrayCoordinate.length > 0) {
                openAround(arrayCoordinate[0][0], arrayCoordinate[0][1], 10);
            }
        }
    }
}
function checkClick(x, y, l) {
    let arrayCheck = getArr(x, y, l);
    let counter = 0;
    for (let r = 0; r < arrayCheck.length; r++) {
        if (
            document.querySelector(
                `[positionX = "${arrayCheck[r][0]}"][positionY = "${arrayCheck[r][1]}"]`
            ).classList.value == "classCell closeCell"
        ) {
            arrayCoordinate.push([arrayCheck[r][0], arrayCheck[r][1]]);
        }

        if (
            document.querySelector(
                `[positionX = "${arrayCheck[r][0]}"][positionY = "${arrayCheck[r][1]}"]`
            ).classList.value == "classMine closeCell"
        ) {
            counter++;
        } else
            document
                .querySelector(
                    `[positionX = "${arrayCheck[r][0]}"][positionY = "${arrayCheck[r][1]}"]`
                )
                .classList.remove("closeCell");
    }
}

function openListenerRight(condition) {
    if (condition == 1) {
        window.oncontextmenu = function () {
            event.target.classList.add("flagImg");
        };
    } else {
        window.oncontextmenu = "End Game";
    }
}

function optimizeCalls() {
    creteField();
    checkCell();
    closeCell();
    openListener();
    openListenerRight(1);
}
