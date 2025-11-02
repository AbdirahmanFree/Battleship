import { Ship } from "./ship";

test('testing shipHit', ()=> {
    const ship1 = new Ship(4,0)
    expect(ship1.isSunk()).toBe(false)
    const ship2 = new Ship(4,4)
    expect(ship2.isSunk()).toBe(true)
})