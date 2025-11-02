class Ship {
    constructor(length){
        this.length = length
        this.hit = 0
        this.sunk = false
    }

    shipHit(){
        this.hit = this.hit +1;
    }

    isSunk(){
        if(this.hit >= this.length){
            this.sunk = true
        }
        return this.sunk
    }
}

export {Ship}