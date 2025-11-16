import { Player } from "./player";
import { userGrid, computerGrid } from "./displaycontroller";

const player = new Player()
const computer = new Player()

// generate random computer position for ships
let compShipPositions = []
let count = 0
let iterations = 0

let ships = [2,3,3,4,5]



while (count <5){
    let rowStart = Math.floor((Math.random() *100) % 10)
    let colStart = Math.floor((Math.random() *100) % 10)
    let direction = Math.random() *1
    iterations +=1
    if(iterations >100){
        console.log("too many iterations")
        break
    }
    console.log(direction)
    if(direction > 0.5){
        //horizontal
        let position = [[rowStart,colStart]]
        for(let i = 1; i < ships[count]; i++){
            const next = [rowStart,position[i-1][1] +1]
            position.push(next)
        }
        if (computer.gameBoard.isValidPosition(position)){
            computer.gameBoard.placeShip(position)
            compShipPositions.push(position)
            count = count +1
        }
        else continue;
        

    }
    else{
         let position = [[rowStart,colStart]]
         for(let i = 1; i < ships[count]; i++){
            const next = [position[i-1][0]+1,colStart]
            position.push(next)
        }
        if (computer.gameBoard.isValidPosition(position)){
            computer.gameBoard.placeShip(position)
            compShipPositions.push(position)
            count = count +1
        }
        else continue;
    }
}
console.log(compShipPositions)