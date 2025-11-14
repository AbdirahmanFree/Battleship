// creating indexes for user board
import "./style.css"

// creating indexes for user board
const userGrid = document.getElementById("grid-player")
const computerGrid = document.getElementById("grid-computer")

for(let i = 2; i < 12; i++){
    const cellC = document.createElement('div');
    const cellR = document.createElement('div');
    cellC.classList.add('cell')
    cellR.classList.add('cell')
    cellC.style.gridArea= `1/${i}/2/${i+1}`
    cellR.style.gridArea= `${i}/1/${i+1}/2`
    cellC.textContent = `${i-2}`
    cellR.textContent = `${i-2}`
    const cellCC = cellC.cloneNode(true)
    const cellRC = cellR.cloneNode(true)
    userGrid.appendChild(cellC)
    userGrid.appendChild(cellR)
    computerGrid.appendChild(cellCC)
    computerGrid.appendChild(cellRC)
}

for(let r = 2; r <12; r++){
    for (let c = 2; c < 12; c++){
        const square = document.createElement('div')
        square.classList.add('square')
        square.style.gridArea = `${r}/${c}/${r+1}/${c+1}`
        const squareC = square.cloneNode(true)
        square.id = `${r-2},${c-2}U`
        squareC.id = `${r-2},${c-2}C`
        userGrid.appendChild(square)
        computerGrid.appendChild(squareC)
    }
}


