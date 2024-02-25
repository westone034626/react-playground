type Square = 'O' | 'X' | null;

type Squares = [Square, Square, Square, Square, Square, Square, Square, Square, Square];

interface BoardProps {
    squares: Squares;
    onClickSquare: (sqaureIndex: number) => void;
}

interface SquareProps {
    status: Square;
    onClick: () => void;
}

export type { BoardProps, Square, Squares, SquareProps };
