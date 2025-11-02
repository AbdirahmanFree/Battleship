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

    seperatePostions(position){
        let xPositions = []
        let yPositions = []
        for (let pos of position){
            xPositions.push(pos[0])
            yPositions.push(pos[1])
        }
        return (xPositions,yPositions)

    }

    
}

export {GameBoard}