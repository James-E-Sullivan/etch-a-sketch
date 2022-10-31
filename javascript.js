function createGrid(gridSize=16, gridDimension=960) {
    
    // create gridContainer div
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('id', 'grid-container');
    
    // set height and width of gridContainer to 960px or given dimensions
    gridContainer.setAttribute("style", `height: ${gridDimension}px; width: ${gridDimension}px`);

    // append gridContainer to its container div
    const containerDiv = document.getElementById('alignment-container');
    containerDiv.appendChild(gridContainer);

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

    // add eventListener to color grid squares on mouseover
    addMouseOverRGB();
}

function addMouseOverEffect() {
    // get nodelist of grid squares
    const gridSquares = document.querySelectorAll('.grid-square');

    // add eventlistener to change color for each gridsquare on mouseover
    gridSquares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('sketched');
        });
    });
}

function addMouseOverRGB() {
    // get nodelist of grid squares
    const gridSquares = document.querySelectorAll('.grid-square');

    // add eventListener to change color for each gridsquare on mouseover
    gridSquares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    })
}

function removeGrid() {
    // get gridContainer div as object
    const gridContainer = document.getElementById('grid-container');
    gridContainer.remove();
}

// createGrid on page load
createGrid();

// add eventListener for click on reset button
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    let newGridSize = parseInt(prompt("Please enter the size (n) of the new n*n grid.\nn must be an integer between 1 and 100."));

    // Response over max size creates max size grid. Other invalid responses do nothing.
    if (!isNaN(newGridSize) && newGridSize > 0) {
        if (newGridSize > 100) newGridSize = 100;  // max size is 100
        removeGrid();
        createGrid(newGridSize);
    }
});