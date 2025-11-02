class Ship {
    constructor(length,hit){
        this.length = length
        this.hit = hit
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