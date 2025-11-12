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
    test('vertical ship placement', () => {
        expect(board.isValidPosition([[0,0],[0,1],[0,2]])).toBe(true)
        expect(board.isValidPosition([[5,5],[5,6],[5,7],[5,8]])).toBe(true)
        expect(board.isValidPosition([[5,5],[5,4],[5,3]])).toBe(true)
        expect(board.isValidPosition([[3,1],[3,2],[4,2]])).toBe(false)
        //expect(board.isValidPosition([[3,8],[3,9],[3,10]])).toBe(false)
    })
    test('horizontal ship placement', () => {
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


describe('testing inBounds function', () => {
    const board = new GameBoard()
    test('position > 9', () => {
        expect(board.inBounds([0,1,2,3,4,10])).toBe(false)
        expect(board.inBounds([0,1,12,3,4])).toBe(false)
    })

    test('position < 0', () => {
        expect(board.inBounds([0,1,2,-3,4,10])).toBe(false)
        expect(board.inBounds([0,1,-12,3,4])).toBe(false)
    })
})



describe('horizontal function', () => {
    const board = new GameBoard()
    test('2 position ship', () => {
        expect(board.horizontal([[0,0],[1,0]])).toEqual(true)
        expect(board.horizontal([[6,3],[7,3]])).toBe(true)
        expect(board.horizontal([[6,3],[6,4]])).toBe(false)
        
    })
    test('larger ships', () => {
        expect(board.horizontal([[6,3],[7,3],[8,3]])).toBe(true)
        expect(board.horizontal([[5,3],[6,3],[7,3],[8,3]])).toBe(true)
        expect(board.horizontal([[5,3],[6,3],[7,3],[9,3]])).toBe(false)
        expect(board.horizontal([[5,3],[6,3],[7,3],[8,3],[9,3]])).toBe(true)
    })
})

describe('vertical function', () => {
    const board = new GameBoard()
    test('2 position ship', () => {
        expect(board.vertical([[0,0],[0,1]])).toEqual(true)
        expect(board.vertical([[6,3],[6,4]])).toBe(true)
        expect(board.vertical([[6,3],[7,3]])).toBe(false)
    })
    test('larger ships', () => {
        expect(board.vertical([[3,2], [3,3], [3,4]])).toBe(true)
        
    })
})

describe('ascending Functions', () => {
    const board = new GameBoard()
    test('ascending Y', ()=> {
        expect(board.ascendingY([[0,0],[0,1]])).toBe(false)
        expect(board.ascendingY([[1,5],[1,4],[1,3],[1,2]])).toBe(true)
    })
    test('ascending X',() => {
        expect(board.ascendingX([[5,3],[6,3],[7,3],[8,3],[9,3]])).toBe(false)
        expect(board.ascendingX([[9,6],[8,6],[7,6],[6,6],[5,6]])).toBe(true)
    })
})