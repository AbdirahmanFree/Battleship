import { Ship } from "./ship";

test('testing isSunk', ()=> {
    const ship1 = new Ship(4)
    expect(ship1.isSunk()).toBe(false)
    const ship2 = new Ship(0)
    expect(ship2.isSunk()).toBe(true)
})

test('testing isSunk after shipHit', ()=>{
    const ship = new Ship(3)
    expect(ship.isSunk()).toBe(false)
    ship.shipHit()
    ship.shipHit()
    ship.shipHit()
    expect(ship.isSunk()).toBe(true)
})