"use strict";

import { createCell, createField } from "./modules/createField&Cells.js";

import { createMine, fillMine, closeCell } from "./modules/createMines&СlosureCells.js";

function createButton() {
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
createButton();

let arrayCoordinate = [];

function getArr(x, y) {
    let arrPosition = [];

    for (let col = y - 1; col <= y + 1; col++) {
        for (let row = x - 1; row <= x + 1; row++) {
            if (row > 0 && row < 9 && col > 0 && col < 9) {
                arrPosition.push([row, col]);
            }
        }
    }

    for (let i = 0; i < arrPosition.length; i++) {
        if (arrPosition[i][0] == x && arrPosition[i][1] == y) {
            arrPosition.splice(i, 1);
        }
    }

    return arrPosition;
}

function openListener() {
    document.addEventListener("click", getCoord);
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
function getCoord(event) {
    document.querySelector("button").removeEventListener("click", clickButton);

    if (event.target.classList.value == "classMine closeCell") {
        explosionMineClass(event);
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
        checkEmptyCells(event);
    }
}

function checkCondition(x, y) {
    let array = getArr(x, y);

    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        if (document.querySelector(`[positionX = "${array[i][0]}"][positionY = "${array[i][1]}"]`).classList.value == "classCell") {
            let count = 0;
            for (let elem of arrayCoordinate) {
                if (elem[0] == array[i][0] && elem[1] == array[i][1]) {
                    count++;
                }
            }
            if (count == 0) {
                arrayCoordinate.push([array[i][0], array[i][1]]);
                document.querySelector(`[positionX = "${array[i][0]}"][positionY = "${array[i][1]}"]`).classList.add("checkClass");
            }
        }

        if (document.querySelector(`[positionX = "${array[i][0]}"][positionY = "${array[i][1]}"]`).classList.value == "classMine") {
            counter++;
        }
    }

    if (counter > 0) {
        if (document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`).classList.value != "classMine") {
            document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`).classList.add(`class${counter}`);
        }
    }
}

function checkClick(x, y) {
    let arrayCheck = getArr(x, y);
    let counter = 0;
    for (let i = 0; i < arrayCheck.length; i++) {
        if (document.querySelector(`[positionX = "${arrayCheck[i][0]}"][positionY = "${arrayCheck[i][1]}"]`).classList.value == "classCell closeCell") {
            arrayCoordinate.push([arrayCheck[i][0], arrayCheck[i][1]]);
        }

        if (document.querySelector(`[positionX = "${arrayCheck[i][0]}"][positionY = "${arrayCheck[i][1]}"]`).classList.value == "classMine closeCell") {
            counter++;
        } else document.querySelector(`[positionX = "${arrayCheck[i][0]}"][positionY = "${arrayCheck[i][1]}"]`).classList.remove("closeCell");
    }
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

function checkEmptyCells(event) {
    event.target.classList.remove("closeCell");

    let x = Number(event.target.getAttribute("positionx"));
    let y = Number(event.target.getAttribute("positiony"));
    openAround(x, y, 1, 2);
}

function openAround(x, y, s, condition) {
    // condition = 1;
    if (condition == 1) {
        checkCondition(x, y);
    } else {
        checkClick(x, y);
        for (let i = 0; i < arrayCoordinate.length; i++) {
            document.querySelector(`[positionX = "${arrayCoordinate[i][0]}"][positionY = "${arrayCoordinate[i][1]}"]`).classList.remove("closeCell");
        }
    }

    if (s != 1) {
        for (let i = 0; i < arrayCoordinate.length; i++) {
            if (arrayCoordinate[i][0] == x && arrayCoordinate[i][1] == y) {
                // alert("SoS");
                arrayCoordinate.splice(i, 1);
            }
        }
    }
    if (condition == 1) {
        if (arrayCoordinate.length > 0) {
            openAround(arrayCoordinate[0][0], arrayCoordinate[0][1], 10, 1);
            arrayCoordinate.shift();
        }
    } else {
        if (arrayCoordinate.length > 0) {
            openAround(arrayCoordinate[0][0], arrayCoordinate[0][1], 10, 2);
        }
    }
}

function explosionMineClass(event) {
    event.target.classList.remove("closeCell");
    event.target.classList.add("classBoom");
    event.target.classList.remove("classMine");
    document.removeEventListener("click", getCoord);

    for (let y = 1; y < 9; y++) {
        for (let x = 1; x < 9; x++) {
            if (document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`).classList.value == "classMine closeCell") {
                document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`).classList.add("classBoom");
                document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`).classList.remove("classMine");
            }
            if (document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`).classList.value == "classMine closeCell flagImg") {
                document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`).classList.remove("flagImg");
                document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`).classList.add("classBoom");
                document.querySelector(`[positionX = "${x}"][positionY = "${y}"]`).classList.remove("classMine");
            }
        }
    }
    clearInterval(timerId);
    openListenerRight(10);
}
function optimizeCalls() {
    createField();
    fillMine();
    openAround(1, 1, 1, 1);
    closeCell();
    openListener();
    openListenerRight(1);
}
