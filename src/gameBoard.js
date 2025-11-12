import {Ship} from "./ship"
class GameBoard {
    constructor(){
        this.board = new Array(10).fill(new Array(10).fill(null))
        this.coordinates = {}
    }
    placeShip(position){
        
        if(!(this.isValidPosition(position))){
            return false
        }
        const ship = new Ship(position.length)
        const adj = this.adjacent(position)
        for(let [x,y] of position){
            this.board[x][y] =ship
            const key = `${x},${y}`
            this.coordinates[key] = ship

        }
        for(let [x,y] of adj){
            this.board[x][y] = "X"
            
        }

    }

    adjacent(grid){
        const shipSet = {};
        for (let i = 0; i < grid.length; i++){
            let key = `${grid[i][0]},${grid[i][1]}`
            shipSet[key] = 1
        }
        const seen = {}
        const out = [];
        for(const [x,y] of grid){
            for(let dx = -1; dx <= 1; dx++){
                for(let dy =-1; dy <= 1; dy ++){
                    if(dx == 0 && dy ==0) continue;
                    const nx = x +dx;
                    const ny = y  + dy;
                    const key = `${nx},${ny}`;
                    if (!(this.inBounds([nx, ny]))) continue;   
                    if(key in shipSet)  continue;
                    if(key in seen) continue;
                    seen[key] = 1
                    out.push([nx,ny]);
                }
            }
        }
        return this.sort(out)
    }

    sort(grid){
        return grid.sort(([a,b],[c,d]) => (a -c) || (b-d));
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