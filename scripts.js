
let numberOfSquares = 16

function createSquares() {
    for (let i = numberOfSquares; i > 0; i--) {
        for (let j = numberOfSquares; j > 0; j--) {

        container = document.querySelector(".container");
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("square");
        rowDiv.style.height = `${800 / numberOfSquares}px`;
        rowDiv.style.width = `${800 / numberOfSquares}px`;
        container.appendChild(rowDiv)}}

        const squareDiv = document.querySelectorAll(".square");
        squareDiv.forEach( (square) => {
            let opacity = 0.1;
            square.addEventListener("mouseenter", () => {
                if (square.style.backgroundColor == "") {
                    square.style.backgroundColor = randomColor();
                }
                if (parseInt(square.style.opacity) < 1)
                    opacity += 0.2;
                    square.style.opacity = opacity.toString();
    })
})}
createSquares()

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`
    return rgb
}

function deleteSquares() {
    const squareDiv = document.querySelectorAll(".square");
    squareDiv.forEach( (square) => {
        square.remove();
    })
}



const button = document.querySelector("button");

button.addEventListener("click", () => {
    numberSubmission = prompt("How many rows & columns should the new grid have? Must be less than 100")
    if (numberSubmission < 100 || numberOfSquares > 0) {
    numberOfSquares = numberSubmission
}
deleteSquares()
createSquares()
})