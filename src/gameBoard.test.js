import { GameBoard } from "./gameBoard";

test('checking gameBoard dimensions', () => {
    const board = new GameBoard()
    expect(board.board.length).toBe(10)
    expect(board.board[5].length).toBe(10)
    expect(board.board[4][7]).toBe(null)
})

test('test speratePositions helper', ()=> {
    const board = new GameBoard()
    expect(board.seperatePostions([[0,0],[0,1],[0,2],[0,3],[0,4]])).toEqual((([0,0,0,0,0],[0,1,2,3,4])))
})
