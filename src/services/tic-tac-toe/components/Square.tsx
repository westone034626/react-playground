import { SquareProps } from '@tic-tac-toe/types';

function Square(props: SquareProps) {
    const { status, onClick } = props;

    return (
        <div
            onClick={onClick}
            className="flex justify-center items-center w-[100px] h-[100px] border border-black"
        >
            {status}
        </div>
    );
}

export default Square;
