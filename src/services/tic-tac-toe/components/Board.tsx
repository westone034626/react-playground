import { Square } from '@tic-tac-toe/components';
import { BoardProps } from '@tic-tac-toe/types';

function Board(props: BoardProps) {
    const { squares } = props;

    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1">
                {squares.slice(0, 3).map(square => (
                    <Square status={square} />
                ))}
            </div>

            <div className="flex flex-row gap-1">
                {squares.slice(3, 6).map(square => (
                    <Square status={square} />
                ))}
            </div>

            <div className="flex flex-row gap-1">
                {squares.slice(6).map(square => (
                    <Square status={square} />
                ))}
            </div>
        </div>
    );
}

export default Board;
