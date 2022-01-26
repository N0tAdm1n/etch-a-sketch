let mode = colorBlack;

const container = document.querySelector('#container');


//makes a grid of gridSize x gridSize
function makeGrid(gridSize = 16) {
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
    allSquares.forEach(square => square.addEventListener('mouseover', mode )); 
}

makeGrid();  //calls the grid funtion then the site is loaded first


//function to color the squares black 
function colorBlack() {
    this.style.backgroundColor = `rgba(0, 0, 0, 1)`;
}

//function for random color
function colorRainbow() {
    this.style.backgroundColor = randomRGB();
    console.log(this.style); 
}

//function to generate random color in rgb
function randomRGB() {
    let red = Math.floor( Math.random() * 255 ); 
    let green = Math.floor( Math.random() * 255 ); 
    let blue = Math.floor( Math.random() * 255 ); 
    return `rgb(${red}, ${green}, ${blue})`;
}

//function to color the squares shades of black
function colorShade() {
    this.style.backgroundColor = 'black';
    if(this.style.opacity === '') {
        this.style.opacity = '0';
    }    
    if( Number(this.style.opacity) < 1) {
        this.style.opacity = `${ Number(this.style.opacity) + 0.1}`;
    }
}


//function to remove the grid from the dom 
function removeGrid() {
    const allRowDiv = Array.from( document.querySelectorAll('.rowDiv'));
    allRowDiv.forEach( rowDiv => rowDiv.remove() );
}





//makes a new grid
function makeNewGrid() {
    gridSizeByUser = Number( prompt("Enter the grid size (<100) : ", 8) );//gets a new grid Size from the user
    removeGrid();
    makeGrid(gridSizeByUser);
}


//selects the mode 
function modeSelector() {
    if(this.id === 'black') {
        mode = colorBlack;
        makeNewGrid();
    } else if(this.id === 'rainbow') {
        mode = colorRainbow;
        makeNewGrid();
    } else if(this.id === 'shade') {
        mode = colorShade;
        makeNewGrid();
    }
}

//selects all the buttons
const clearButton = document.querySelector('#clear'); 
clearButton.addEventListener('click', makeNewGrid); 
const blackModeBtn = document.querySelector('#black');
blackModeBtn.addEventListener('click', modeSelector);
const rainbowModeBtn = document.querySelector('#rainbow');
rainbowModeBtn.addEventListener('click', modeSelector);
const shadeModeBtn = document.querySelector('#shade');
shadeModeBtn.addEventListener('click', modeSelector);