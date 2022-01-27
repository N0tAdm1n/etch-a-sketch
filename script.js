let mode = colorBlack;

const container = document.querySelector("#container");

//makes a grid of gridSize x gridSize
function makeGrid(gridSize = 16) {
  for (let i = 0; i < gridSize; i++) {
    const rowDiv = document.createElement("div"); //for a row
    rowDiv.classList.add("rowDiv");
    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement("div"); //single squaresda
      div.classList.add("square");
      rowDiv.appendChild(div);
    }
    container.appendChild(rowDiv);
  }
  colorGrid();
}

makeGrid(); //calls the grid funtion then the site is loaded first

// function for selecting each square in the grid and adding the event listener to them with the right
function colorGrid() {
  const allSquares = Array.from(document.querySelectorAll(".square")); //selects all the squares
  //adds a hover Event Listener to all squares
  allSquares.forEach((square) => square.addEventListener("mouseover", mode));
}
//function to remove event listener from the squares
function removeListener() {
  const allSquares = Array.from(document.querySelectorAll(".square"));
  allSquares.forEach((square) => square.removeEventListener("mouseover", mode));
}

//function to color the squares black
function colorBlack() {
  this.style.opacity = "1";
  this.style.backgroundColor = `rgba(0, 0, 0, 1)`;
  this.classList.remove("shade");
}

//function for random color
function colorRainbow() {
  this.style.opacity = "1";
  this.style.backgroundColor = randomRGB();
  this.classList.remove("shade");
}

//function to generate random color in rgb
function randomRGB() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

//function to color the squares shades of black
function colorShade() {
  this.style.backgroundColor = "black";
  if (this.style.opacity === "" || !this.classList.contains("shade")) {
    this.style.opacity = "0";
  }
  if (Number(this.style.opacity) < 1) {
    this.style.opacity = `${Number(this.style.opacity) + 0.1}`;
  }
  this.classList.add("shade");
}

//function to remove the grid from the dom
function removeGrid() {
  const allRowDiv = Array.from(document.querySelectorAll(".rowDiv"));
  allRowDiv.forEach((rowDiv) => rowDiv.remove());
}

//makes a new grid
function makeNewGrid() {
  gridSizeByUser = Number(prompt("Enter the grid size (<100) : ", 16)); //gets a new grid Size from the user
  removeGrid();
  makeGrid(gridSizeByUser);
}

//selects the mode
function modeSelector() {
  if (this.id === "black") {
    mode = colorBlack;
    removeListener();
    colorGrid();
  } else if (this.id === "rainbow") {
    mode = colorRainbow;
    removeListener();
    colorGrid();
  } else if (this.id === "shade") {
    mode = colorShade;
    removeListener();
    colorGrid();
  }
}

//selects all the buttons
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", makeNewGrid);
const blackModeBtn = document.querySelector("#black");
blackModeBtn.addEventListener("click", modeSelector);
const rainbowModeBtn = document.querySelector("#rainbow");
rainbowModeBtn.addEventListener("click", modeSelector);
const shadeModeBtn = document.querySelector("#shade");
shadeModeBtn.addEventListener("click", modeSelector);
