function createGrid(gridSize=16, gridDimension="960px") {

    // create gridContainer div
    const gridContainer = document.createElement('div');
    gridContainer.classList.add("grid-container");
    

    // set height and width of gridContainer to 960px or given dimensions
    gridContainer.setAttribute("style", `height: ${gridDimension}; width: ${gridDimension}`);

    // append gridContainer to the page body
    const body = document.body;
    body.appendChild(gridContainer);

    // loop to create grid rows and squares
    for (i = 0; i < gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        // set dimensions of row based on dimensions of gridContainer
        gridRow.setAttribute("style", `height: ${gridDimension / gridSize}; width: ${gridDimension}`);

        // append gridRow to gridContainer
        gridContainer.appendChild(gridRow);

        for (i = 0; i < gridSize; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add("grid-square");

            // set dimensions of square based on dimensions of gridContainer
            gridSquare.setAttribute("style",
             `height: ${gridDimension / gridSize}; width: ${gridDimension / gridSize}`);

            gridRow.appendChild(gridSquare);
        }
 
    }
}

// createGrid on page load
createGrid();