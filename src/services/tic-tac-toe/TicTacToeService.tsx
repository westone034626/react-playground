import { useState } from 'react';
import { Board } from '@tic-tac-toe/components';
import type { Squares } from '@tic-tac-toe/types';

const initSquares = () => Array(9).fill(null) as Squares;

function TicTacToeService() {
    const [sqaures, setSquares] = useState<Squares>(initSquares);

    return <Board squares={sqaures} />;
}

export default TicTacToeService;
