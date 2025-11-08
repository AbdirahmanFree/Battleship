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
