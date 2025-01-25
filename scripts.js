
let numberOfSquares = 16

function createSquares() {
    for (let i = numberOfSquares; i > 0; i--) {
        for (let j = numberOfSquares; j > 0; j--) {

        container = document.querySelector(".container");
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("square");
        rowDiv.style.height = `${800 / numberOfSquares}px`;
        rowDiv.style.width = `${800 / numberOfSquares}px`
        container.appendChild(rowDiv)}}
        const squareDiv = document.querySelectorAll(".square");

        squareDiv.forEach( (square) => {
        square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    })
})}

createSquares()

function deleteSquares() {
    const squareDiv = document.querySelectorAll(".square");

    squareDiv.forEach( (square) => {
        square.remove();
    })
}



const button = document.querySelector("button");

button.addEventListener("click", () => {
    numberOfSquares = prompt("How many rows & columns should the new grid have?")
    deleteSquares()
    createSquares()
    addEventsToSquares()
})