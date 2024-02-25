type Square = 'O' | 'X' | null;

type Squares = [Square, Square, Square, Square, Square, Square, Square, Square, Square];

interface BoardProps {
    squares: Squares;
}

interface SquareProps {
    status: Square;
}

export type { BoardProps, Square, Squares, SquareProps };
