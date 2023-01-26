let arrayCoordinate = [];

export function getArr(x, y, value) {
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

export function checkCondition(x, y, l) {
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

export function checkCell() {
    for (let k = 0; k <= 9; k++) {
        createMine();
    }

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

export function closeCell() {
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

export function openListener() {
    document.addEventListener("click", getCoord);
}

export function checkClick(x, y, l) {
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

export function openListenerRight(condition) {
    if (condition == 1) {
        window.oncontextmenu = function () {
            event.target.classList.add("flagImg");
        };
    } else {
        window.oncontextmenu = "End Game";
    }
}
export function createMine() {
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

export function getCoord(event) {
    document.querySelector("button").removeEventListener("click", clickButton);

    if (event.target.classList.value == "classMine closeCell") {
        checkMineClass(event);
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
