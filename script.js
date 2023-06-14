const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for(let i = 0; i < 16; i++) {
    const rollDiv = document.createElement("div");
    rollDiv.classList.add("roll");
    for (let j = 0; j < 16; j++) {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        rollDiv.appendChild(cellDiv);
    }
    container.appendChild(rollDiv);
}
