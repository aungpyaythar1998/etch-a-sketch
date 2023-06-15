function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function sketchThePad(e) {
    // e.target.classList.add("sketched");
    e.target.style.backgroundColor = randomColor();
}

function createThePad(squarePerSide) {
    container.innerHTML = "";
    for(let i = 0; i < squarePerSide; i++) {
        const rollDiv = document.createElement("div");
        rollDiv.classList.add("roll");
        for (let j = 0; j < squarePerSide; j++) {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.addEventListener("mouseover", sketchThePad);
            rollDiv.appendChild(cellDiv);
        }
        container.appendChild(rollDiv);
    }
}

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const button = document.querySelector("#button-container button");
button.addEventListener("click", () => {
    let numOfSquares;
    do {
        numOfSquares = Number(prompt("Enter the number of squares in a 600-px side (0 < squares <= 100)"));
    } while(numOfSquares > 100 || numOfSquares <= 0 || isNaN(numOfSquares));
    createThePad(numOfSquares);
})

let baseLineColor = [];

createThePad(100);


