import { useState } from 'react';
import { Board } from '@tic-tac-toe/components';
import type { Squares, Player } from '@tic-tac-toe/types';

const initSquares = () => Array(9).fill(null) as Squares;

function TicTacToeService() {
    const [sqaures, setSquares] = useState<Squares>(initSquares);
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');

    const onClickSquare = (squareIndex: number) => {
        if (sqaures[squareIndex]) {
            return;
        }

        const cpSquares = [...sqaures] as Squares;

        cpSquares[squareIndex] = currentPlayer;

        setSquares(cpSquares);

        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    return <Board squares={sqaures} onClickSquare={onClickSquare} />;
}

export default TicTacToeService;
