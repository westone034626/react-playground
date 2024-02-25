import { useState } from 'react';
import { Board } from '@tic-tac-toe/components';
import type { Squares, Player } from '@tic-tac-toe/types';

const initSquares = () => Array(9).fill(null) as Squares;

const getIsDecidedWinner = (squares: Squares): boolean => {
    if (squares[0] && squares[0] === squares[1] && squares[1] === squares[2]) {
        return true;
    }

    if (squares[3] && squares[3] === squares[4] && squares[4] === squares[5]) {
        return true;
    }

    if (squares[6] && squares[6] === squares[7] && squares[7] === squares[8]) {
        return true;
    }

    if (squares[0] && squares[0] === squares[3] && squares[3] === squares[6]) {
        return true;
    }

    if (squares[1] && squares[1] === squares[4] && squares[4] === squares[7]) {
        return true;
    }

    if (squares[2] && squares[2] === squares[5] && squares[5] === squares[8]) {
        return true;
    }

    if (squares[0] && squares[0] === squares[4] && squares[4] === squares[8]) {
        return true;
    }

    if (squares[2] && squares[2] === squares[4] && squares[4] === squares[6]) {
        return true;
    }

    return false;
};

function TicTacToeService() {
    const [squares, setSquares] = useState<Squares>(initSquares);
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');

    const isDecidedWinner = getIsDecidedWinner(squares);
    const opponentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    const winner: Player | null = isDecidedWinner ? opponentPlayer : null;

    const everySquaresAreFilled = squares.every(Boolean);

    const title = winner
        ? `Winner is ${winner}`
        : everySquaresAreFilled
          ? 'Draw game'
          : `Player is ${currentPlayer}`;

    const onClickSquare = (squareIndex: number) => {
        if (winner || everySquaresAreFilled) {
            return;
        }

        const alreadySelectedSquare = squares[squareIndex];
        if (alreadySelectedSquare) {
            return;
        }

        const copiedSquares = [...squares] as Squares;

        copiedSquares[squareIndex] = currentPlayer;

        setSquares(copiedSquares);

        setCurrentPlayer(opponentPlayer);
    };

    const onReplay = () => {
        setSquares(initSquares());
        setCurrentPlayer('X');
    };

    return (
        <div className="flex flex-col gap-1">
            <span className="text-2xl">{title}</span>

            <Board squares={squares} onClickSquare={onClickSquare} />

            <button
                type="button"
                onClick={onReplay}
                className="border rounded-md border-gray-500 hover:bg-gray-500"
            >
                Replay
            </button>
        </div>
    );
}

export default TicTacToeService;
