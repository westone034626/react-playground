import { useState } from 'react';
import { Board } from '@tic-tac-toe/components';
import type { Squares } from '@tic-tac-toe/types';

const initSquares = () => Array(9).fill(null) as Squares;

function TicTacToeService() {
    const [sqaures, setSquares] = useState<Squares>(initSquares);

    const onClickSquare = (squareIndex: number) => {
        const cpSquares = [...sqaures] as Squares;

        if (!cpSquares[squareIndex]) {
            cpSquares[squareIndex] = 'X';
        }

        setSquares(cpSquares);
    };

    return <Board squares={sqaures} onClickSquare={onClickSquare} />;
}

export default TicTacToeService;
