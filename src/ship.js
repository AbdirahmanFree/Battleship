class Ship {
    constructor(length,hit,sunk = false){
        this.length = length
        this.hit = hit
        this.sunk = sunk
    }

    shipHit(){
        this.hit = this.hit +1;
    }

    isSunk(){
        if(this.hit >= this.length){
            return true
        }
        return false
    }
}