export function createCell(x, y) {
    const cell = document.createElement("div");
    cell.classList.add("classCell");
    cell.setAttribute("positionX", x);
    cell.setAttribute("positionY", y);
    document.querySelector(".fieldClass").appendChild(cell);
}
export function createField() {
    let field = document.createElement("div");
    field.classList.add("fieldClass");
    document.getElementById("main").appendChild(field);

    for (let y = 1; y < 9; y++) {
        for (let x = 1; x < 9; x++) {
            createCell(x, y);
        }
    }
}
