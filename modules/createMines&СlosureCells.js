export function createMine() {
    let row = Math.floor(Math.random() * (8 - 1 + 1) + 1);

    let col = Math.floor(Math.random() * (8 - 1 + 1) + 1);

    let value = `[positionX = "${row}"][positionY = "${col}"]`;

    if (document.querySelector(value).classList.value == "classMine") {
        createMine();
    } else {
        document.querySelector(value).classList.add("classMine");
        document.querySelector(value).classList.remove("classCell");
    }
}

export function fillMine() {
    for (let i = 0; i <= 9; i++) {
        createMine();
    }
}

export function closeCell() {
    for (let col = 1; col < 9; col++) {
        for (let row = 1; row < 9; row++) {
            let value = `[positionX = "${row}"][positionY = "${col}"]`;
            document.querySelector(value).classList.add("closeCell");
            if (document.querySelector(value).classList.value != "classMine closeCell") {
                document.querySelector(value).classList.remove("checkClass");
            }
        }
    }
}
