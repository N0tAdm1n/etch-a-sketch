const container = document.querySelector('#container');
//makes a grid of 8x8
function makeGrid(gridSize = 8) {
    for(let i = 0; i < gridSize; i++) {
        const rowDiv = document.createElement('div'); //for a row
        rowDiv.classList.add('rowDiv');
        for(let j = 0; j < gridSize; j++) {
            const div = document.createElement('div'); //single squaresda
            div.classList.add('square');
            // div.textContent = `${i} ${j}`
            rowDiv.appendChild(div);
        }
        container.appendChild(rowDiv);
    }
    const allSquares = Array.from( document.querySelectorAll('.square') ); //selects all the squares
    //adds a hover Event Listener to all squares
    allSquares.forEach(square => square.addEventListener('mouseover',colorBlack)); 
}

makeGrid();  //calls the grid funtion then the site is loaded first

function colorBlack() {
    this.classList.add('blackBG');
}
// removes the blackBG class from each square
function clearGrid() {
    allSquares.forEach( square => square.classList.remove('blackBG') );
}   
//function to remove the grid from the dom 
function removeGrid() {
    const allRowDiv = Array.from( document.querySelectorAll('.rowDiv'));
    allRowDiv.forEach( rowDiv => rowDiv.remove() );
}


const clearButton = document.querySelector('#clear'); 
clearButton.addEventListener('click', () => {
    //clearGrid();  // Clears the grid
    //gets a new grid Size from the user
    removeGrid();
    gridSizeByUser = Number( prompt("Enter the grid size (<100) : ", 8) );
    makeGrid(gridSizeByUser);
}); 