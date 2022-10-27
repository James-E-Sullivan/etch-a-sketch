function createGrid(gridSize) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add("grid-container");

    for (i = 0; i < gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("grid-square");
        gridContainer.appendChild(gridSquare);
    }
}