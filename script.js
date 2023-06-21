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

function makeBaseColorDarker() {
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

function getRandomProgression() {
    if (baselineColor.length == 3) {
        return makeBaseColorDarker();
    } else {
        return getRandomColor();
    }
}

function getRainbowColor() {
    if(baselineColor.length != 0) {
        baselineColor = [];
    }
    return getRandomColor();
}

function sketchThePad(e) {
    let sketchColor;

    if (colorMode == "rainbow-mode") {
        sketchColor = getRainbowColor();
    } else if (colorMode == "progress-mode") {
        sketchColor = getRandomProgression();
    }

    e.target.style.backgroundColor = sketchColor;
}

function changeColorMode(e) {
    colorMode = e.target.id;
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

function askPrompt(e) {
    let userInput;
    let numOfSquares;
    do {
        userInput = prompt("Enter the number of squares in a 800-px side (0 < squares <= 100)");
        if(userInput === null) {
            return;
        }
        numOfSquares = Number(userInput);
    } while(numOfSquares > 100 || numOfSquares <= 0);

    createThePad(numOfSquares);
}

let colorMode = "rainbow-mode";
let baselineColor = [];

const buttons = document.querySelectorAll("#button-container button");
buttons.forEach(eachButton => {
    if (eachButton.id == "ask-prompt") {
        eachButton.addEventListener("click", askPrompt);
    } else if (eachButton.className == "color-mode") {
        eachButton.addEventListener("click", changeColorMode);
    } else {
        eachButton.addEventListener("click", e => {
            let cells = document.querySelectorAll(".container .cell");
            cells.forEach(eachCell => {
                if (eachCell.style.backgroundColor) {
                    eachCell.style.setProperty("background-color", "#cedbd0");
                }
            }) ;
        });
    }
});

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

createThePad(100);


