import { useState } from 'react';
import { Board } from '@tic-tac-toe/components';
import type { Squares, Player } from '@tic-tac-toe/types';

const initSquares = () => Array(9).fill(null) as Squares;

const getIsDecidedWinner = (sqares: Squares): boolean => {
    if (sqares[0] && sqares[0] === sqares[1] && sqares[1] === sqares[2]) {
        return true;
    }

    if (sqares[3] && sqares[3] === sqares[4] && sqares[4] === sqares[5]) {
        return true;
    }

    if (sqares[6] && sqares[6] === sqares[7] && sqares[7] === sqares[8]) {
        return true;
    }

    if (sqares[0] && sqares[0] === sqares[3] && sqares[3] === sqares[6]) {
        return true;
    }

    if (sqares[1] && sqares[1] === sqares[4] && sqares[4] === sqares[7]) {
        return true;
    }

    if (sqares[2] && sqares[2] === sqares[5] && sqares[5] === sqares[8]) {
        return true;
    }

    if (sqares[0] && sqares[0] === sqares[4] && sqares[4] === sqares[8]) {
        return true;
    }

    if (sqares[2] && sqares[2] === sqares[4] && sqares[4] === sqares[6]) {
        return true;
    }

    return false;
};

function TicTacToeService() {
    const [sqaures, setSquares] = useState<Squares>(initSquares);
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');

    const isDecidedWinner = getIsDecidedWinner(sqaures);
    const lastPlayer = currentPlayer === 'O' ? 'X' : 'O';
    const winner: Player | null = isDecidedWinner ? lastPlayer : null;

    const title = winner ? `winner is ${winner}` : `player is ${currentPlayer}`;

    const onClickSquare = (squareIndex: number) => {
        if (isDecidedWinner) {
            return;
        }

        const alreadySelectedSquare = sqaures[squareIndex];
        if (alreadySelectedSquare) {
            return;
        }

        const cpSquares = [...sqaures] as Squares;

        cpSquares[squareIndex] = currentPlayer;

        setSquares(cpSquares);

        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    return (
        <div className="flex flex-col gap-1">
            <span className="text-2xl">{title}</span>

            <Board squares={sqaures} onClickSquare={onClickSquare} />
        </div>
    );
}

export default TicTacToeService;
