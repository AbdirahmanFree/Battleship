import {Ship} from "./ship"
class GameBoard {
    constructor(){
        this.board = new Array(10).fill(new Array(10).fill(null))
    }
    placeShip(position){
        if(!isValidPosition(position)){
            return false
        }
        return true
    }

    isValidPosition(position){
        if(position.length >5 || position.length < 2){
            return false
        }
        let xPositions = []
        let yPositions = []
        for (let pos of position){
            xPositions.push(pos[0])
            yPositions.push(pos[1])
        }
        // position is valid if every x is the same and all the y's increment or  decrement by one. Vice  Versa
        if ((allSame(xPositions) && sequence(yPositions)) || (allSame(yPositions) && sequence(xPositions) )){
            return true
        }
        return false

    }
    allSame(array){
        if (array.length == 1){
            return true
        }
        if(array[0] == array[1]){
            return this.allSame(array.slice(1))
        }
        return false
    }

    
}

export {GameBoard}