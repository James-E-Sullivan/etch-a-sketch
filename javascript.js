function createGrid(gridSize) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add("grid-container");

    for (i = 0; i < gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);

        for (i = 0; i < gridSize; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }
 

    }
}