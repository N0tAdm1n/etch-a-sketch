const container = document.querySelector('#container');
//makes a grid of 8x8
for(let i = 0; i < 8; i++) {
    const rowDiv = document.createElement('div'); //for a row
    rowDiv.classList.add('rowDiv');
    for(let j = 0; j < 8; j++) {
        const div = document.createElement('div'); //single square
        div.classList.add('square');
        div.textContent = `${i} ${j}`
        rowDiv.appendChild(div);
    }
    container.appendChild(rowDiv);
}