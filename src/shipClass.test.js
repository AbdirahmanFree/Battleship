import { Ship } from "./ship";

test('testing shipHit', ()=> {
    expect(
        () => {
            const ship = new Ship(4,0)
            return ship.isSunk()
        }
    ).toBe(false)
})