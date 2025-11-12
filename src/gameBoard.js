import {Ship} from "./ship"
class GameBoard {
    constructor(){
        this.board = new Array(10).fill(new Array(10).fill(null))
        this.coordinates = {}
    }
    placeShip(position){
        if(!isValidPosition(position)){
            return false
        }
        return true

    }

    adjacent(grid){
        const shipSet = {};
        for (let i = 0; i < grid.length; i++){
            let key = `${grid[i][0]},${grid[i][1]}`
            shipSet[key] = 1
        }
        const seen = {}
        const out = [];
        for(const [r,c] of grid){
            for(let dr = -1; dr <= 1; dr++){
                for(let dc =-1; dc <= 1; dc ++){
                    if(dr == 0 && dc ==0) continue;
                    const nr = r +dr;
                    const nc = c  + dc;
                    const key = `${nr},${nc}`;
                    if (!(this.inBounds([nr, nc]))) continue;   
                    if(key in shipSet)  continue;
                    if(key in seen) continue;
                    seen[key] = 1
                    out.push([nr,nc]);
                }
            }
        }
        return this.sort(out)
    }

    sort(grid){
        return grid.sort(([a,b],[c,d]) => (a -c) || (b-d));
    }

    ascendingY(grid){
        if(this.isValidPosition(grid) && this.vertical(grid)){
            if(grid[0][1] > grid[1][1]){
                return true
            }
            return false
        }
        return false
    }

    ascendingX(grid){
        if(this.isValidPosition(grid) && this.horizontal(grid)){
            if(grid[0][0] > grid[1][0]){
                return true
            }
            return false
        }
        return false
    }



    horizontal(grid){
        if((grid[0][1] == grid[1][1]) && this.isValidPosition(grid)){
            return true
        }
        return false
    }

    vertical(grid){
        if((grid[0][0] == grid[1][0]) && this.isValidPosition(grid)){
            return true
        }
        return false
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