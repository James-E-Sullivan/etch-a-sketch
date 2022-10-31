function createGrid(gridSize=16, gridDimension=960) {
    
    // create gridContainer div
    const gridContainer = document.createElement('div');
    gridContainer.classList.add("grid-container");
    
    // set height and width of gridContainer to 960px or given dimensions
    gridContainer.setAttribute("style", `height: ${gridDimension}px; width: ${gridDimension}px`);

    // append gridContainer to the page body
    const body = document.body;
    body.appendChild(gridContainer);

    // loop to create grid rows and squares
    for (i = 0; i < gridSize; i++) {

        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        // set dimensions of row based on dimensions of gridContainer
        gridRow.setAttribute("style", `height: ${gridDimension / gridSize}px; width: ${gridDimension}px`);

        // append gridRow to gridContainer
        gridContainer.appendChild(gridRow);

        for (j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add("grid-square");

            // set dimensions of square based on dimensions of gridContainer
            gridSquare.setAttribute("style",
             `height: ${gridDimension / gridSize}px; width: ${gridDimension / gridSize}px`);

            gridRow.appendChild(gridSquare);
        }
    }
}

// createGrid on page load
createGrid();

// get nodelist of grid squares
const gridSquares = document.querySelectorAll('.grid-square');

// add eventlistener to change color for each gridsquare on mouseover
gridSquares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('sketched');
    });
});