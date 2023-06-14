function sketchThePad(e) {
    e.target.classList.add("sketched");
}

function createThePad(squarePerSide) {
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

createThePad(100);


