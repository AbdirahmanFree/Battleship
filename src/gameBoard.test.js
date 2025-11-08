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
