import { Square } from '@tic-tac-toe/components';
import { BoardProps } from '@tic-tac-toe/types';

const BOARD_SIZE = 3;

const getKey = (rowIndex: number, colIndex: number) => colIndex + rowIndex * BOARD_SIZE;

function Board(props: BoardProps) {
    const { squares, onClickSquare } = props;

    return (
        <div className="flex flex-col gap-1">
            {Array(BOARD_SIZE)
                .fill(0)
                .map((_, rowIndex) => (
                    <div className="flex flex-row gap-1">
                        {squares
                            .slice(rowIndex * BOARD_SIZE, (rowIndex + 1) * BOARD_SIZE)
                            .map((square, colIndex) => {
                                const key = getKey(rowIndex, colIndex);

                                return (
                                    <Square
                                        key={key}
                                        status={square}
                                        onClick={() => onClickSquare(key)}
                                    />
                                );
                            })}
                    </div>
                ))}
        </div>
    );
}

export default Board;
