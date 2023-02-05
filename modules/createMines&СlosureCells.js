export function createMine() {
    let row = Math.floor(Math.random() * (8 - 1 + 1) + 1);

    let col = Math.floor(Math.random() * (8 - 1 + 1) + 1);

    if (document.querySelector(`[positionX = "${row}"][positionY = "${col}"]`).classList.value == "classMine") {
        createMine();
    } else {
        document.querySelector(`[positionX = "${row}"][positionY = "${col}"]`).classList.add("classMine");
        document.querySelector(`[positionX = "${row}"][positionY = "${col}"]`).classList.remove("classCell");
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
            document.querySelector(`[positionX = "${row}"][positionY = "${col}"]`).classList.add("closeCell");
            if (document.querySelector(`[positionX = "${row}"][positionY = "${col}"]`).classList.value != "classMine closeCell") {
                document.querySelector(`[positionX = "${row}"][positionY = "${col}"]`).classList.remove("checkClass");
            }
        }
    }
}
