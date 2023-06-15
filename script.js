function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    baselineColor = [red, green, blue];
    return `rgb(${red}, ${green}, ${blue})`;
}

function checkIfBlack(color) {
    return (color[0] == 0 && color[1] == 0 && color[2] == 0);
}

function setDarkerToneToBaseline() {
    let newColor = [];

    if (checkIfBlack(baselineColor)) {
        return getRandomColor();
    }
    for(eachAspect of baselineColor) {
        eachAspect -= eachAspect * 0.1
        if (eachAspect < 0) {
            eachAspect = 0;
        }
        newColor.push(Math.floor(eachAspect));
    }
    baselineColor = newColor;
    return `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
}

function sketchThePad(e) {
    let sketchColor;

    if (baselineColor.length == 3) {
        sketchColor = setDarkerToneToBaseline();
    } else {
        sketchColor = getRandomColor();
    }

    e.target.style.backgroundColor = sketchColor;
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
    let userInput;
    let numOfSquares;
    do {
        userInput = prompt("Enter the number of squares in a 600-px side (0 < squares <= 100)");
        if(userInput === null) {
            return;
        }
        numOfSquares = Number(userInput);
    } while(numOfSquares > 100 || numOfSquares <= 0);

    createThePad(numOfSquares);
})

let baselineColor = [];

createThePad(100);


