import {Ship} from "./ship"
class GameBoard {
    constructor(){
        this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.coordinates = {}
    }
    placeShip(position){
        
        if(!(this.isValidPosition(position)))return false;
            
        
        const ship = new Ship(position.length)
        const adj = this.adjacent(position)

        
        for(let [r,c] of adj){
            const key = `${r},${c}`
            if(key in this.coordinates) return false
            else this.board[r][c] = "X";
            
        }
         for(let [r,c] of position){
            const key = `${r},${c}`
            if(key in this.coordinates) return false
            if(this.board[r][c] != null) return false

            this.board[r][c] =ship
            this.coordinates[key] = ship

        }
        return true
    }

    recieveAttack(position){
        const key = `${position[0]},${position[1]}`
        if(key in this.coordinates){
            this.coordinates[key].shipHit()
            delete this.coordinates[key]
            this.board[position[0]][position[1]] = "H"
            return "HIT"
        }
        return "MISS"
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
                    const nr = r + dr;
                    const nc = c + dc;
                    const key = `${nr},${nc}`;
                    if (nr < 0 || nc < 0 || nr > 9 || nc > 9) continue;   
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

   
    isValidPosition(position){
        if(position.length >5 || position.length < 2){
            return false
        }
        let rows = []
        let columns = []
        for (let [r,c] of position){
            //check if position on board is taken
            if(r > 9 || c > 9 || r < 0 || c < 0) return false;
            if(this.board[r][c] != null) return false;
            rows.push(r)
            columns.push(c)
        }
        // position is valid if every x is the same and all the y's increment or  decrement by one. Vice  Versa
        if ((this.allSame(rows) && this.sequence(columns)) || (this.allSame(columns) && this.sequence(rows) )){
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

        const sorted = [...array].sort((a,b) =>  a-b)

        for(let i = 1; i< sorted.length; i++){
            if (sorted[i] != sorted[i-1] +1){
                return false
            }
        }
        return true
    }


    
}

export {GameBoard}