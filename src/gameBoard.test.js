import { GameBoard } from "./gameBoard";

test('checking gameBoard dimensions', () => {
    const board = new GameBoard()
    expect(board.board.length).toBe(10)
    expect(board.board[5].length).toBe(10)
    expect(board.board[4][7]).toBe(null)
})


test('allSame function test', ()=> {
    const board = new GameBoard()
    expect(board.allSame([1,2,3,4])).toBe(false)
    expect(board.allSame([1,1,1,3])).toBe(false)
    expect(board.allSame([1])).toBe(true)
    expect(board.allSame([1,1,1,1])).toBe(true)
})



test('sequence function', () => {
    const board = new GameBoard()

    // empty array test
    expect(board.sequence([])).toBe(true)
    //single element test
    expect(board.sequence([1])).toBe(true)
    expect(board.sequence([2])).toBe(true)
    expect(board.sequence([3])).toBe(true)
    // increasing sequence test
    expect(board.sequence([1,2,1,1])).toBe(false)
    expect(board.sequence([1,2,3,4,5])).toBe(true)
    expect(board.sequence([1,2,3,3,4])).toBe(false)
    expect(board.sequence([1,2,3,4,4])).toBe(false)
    expect(board.sequence([0,2,3,4])).toBe(false)
    expect(board.sequence([5,6,7])).toBe(true)
    // decreaseing sequence
    expect(board.sequence([5,4,3,2,1])).toBe(true)
    expect(board.sequence([6,3,2,1])).toBe(false)
    
    

})

describe('testing is valid position', () =>{
    const board = new GameBoard()
    test('horizontal ship placement', () => {
        expect(board.isValidPosition([[0,0],[0,1],[0,2]])).toBe(true)
        expect(board.isValidPosition([[5,5],[5,6],[5,7],[5,8]])).toBe(true)
        expect(board.isValidPosition([[5,5],[5,4],[5,3]])).toBe(true)
        expect(board.isValidPosition([[3,1],[3,2],[4,2]])).toBe(false)
        //expect(board.isValidPosition([[3,8],[3,9],[3,10]])).toBe(false)
    })
    test('vertical ship placement', () => {
        expect(board.isValidPosition([[0,0],[1,0],[2,0]])).toBe(true)
        expect(board.isValidPosition([[3,0],[2,0],[1,0]])).toBe(true)
        expect(board.isValidPosition([[3,1],[3,2],[3,4]])).toBe(false)
        expect(board.isValidPosition([[0,0],[1,0]])).toBe(true)
    })
    test('to few positions check', () => {
        expect(board.isValidPosition([[0,0]])).toBe(false)
        expect(board.isValidPosition([])).toBe(false)
    })
    test('to many positions check', () => {
        expect(board.isValidPosition([[5,4],[5,5],[5,6],[5,7],[5,8],[5,9]])).toBe(false)
    })
})


describe('adjacent function', () => {
    const board = new GameBoard()
    test('adjacent corner', () => {
        expect(board.adjacent([[0,0],[0,1]])).toEqual(board.sort([[1,0],[1,1],[1,2],[0,2]]))

    })
    test('horizontal', () => {
        expect(board.adjacent([[5,3],[6,3],[7,3],[8,3],[9,3]])).toEqual(board.sort([[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[4,3],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4]]))
        expect(board.adjacent([[3,5],[4,5],[5,5]])).toEqual(board.sort([[2,4],[3,4],[4,4],[5,4],[6,4],[2,5],[6,5],[2,6],[3,6],[4,6],[5,6],[6,6]]))
    })

    test('vertical', () => {
        expect(board.adjacent([[9,0],[9,1],[9,2]])).toEqual(board.sort([[8,0],[8,1],[8,2],[8,3],[9,3]]))
    })
})

describe('place ship function', ()=> {
    const board = new GameBoard()
    test('overwiting a ship', () => {
        expect(board.isValidPosition([[0,0],[0,1],[0,2]])).toBe(true)
        expect(board.placeShip([[0,0],[0,1]])).toBe(true)
        expect(board.isValidPosition([[0,0],[0,1],[0,2]])).toBe(false)
    })
    test('placing a ship adjacent to another ship',()=> {
        expect(board.placeShip([[1,0],[1,1]])).toBe(false)
    })
})