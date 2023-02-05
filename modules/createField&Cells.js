export function createCell(row, col) {
    const cell = document.createElement("div");
    cell.classList.add("classCell");
    cell.setAttribute("positionX", row);
    cell.setAttribute("positionY", col);
    document.querySelector(".fieldClass").appendChild(cell);
}
export function createField() {
    let field = document.createElement("div");
    field.classList.add("fieldClass");
    document.getElementById("main").appendChild(field);

    for (let col = 1; col < 9; col++) {
        for (let row = 1; row < 9; row++) {
            createCell(row, col);
        }
    }
}
