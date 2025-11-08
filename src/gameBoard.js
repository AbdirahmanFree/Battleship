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
        if(!this.inBounds(xPositions) || !this.inBounds(yPositions)){
            return false
        }
        // position is valid if every x is the same and all the y's increment or  decrement by one. Vice  Versa
        if ((this.allSame(xPositions) && this.sequence(yPositions)) || (this.allSame(yPositions) && this.sequence(xPositions) )){
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

    sequence(array){
        if(array.length <=1){
            return true
        }

        // increasing sequence
        if(array[0] == (array[1] -1)){
            for(let i = 1; i< array.length; i++){
                if (array[i] != array[i-1] +1){
                    return false
                }
            }
            return true
        }

        //decreaseing sequence
        if(array[0] == (array[1] +1)){
            for(let i = 1; i< array.length; i++){
                if (array[i] != array[i-1] -1){
                    return false
                }
            }
            return true
        }
        return false
    }

    inBounds(array){
        for (let pos of array){
            if (pos >9 || pos < 0){
                return false
            }
        }
        return true
    }
    

    
}

export {GameBoard}