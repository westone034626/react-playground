import { SquareProps } from '@tic-tac-toe/types';

function Square(props: SquareProps) {
    const { status, onClick } = props;

    return (
        <div
            onClick={onClick}
            className="flex justify-center items-center w-[100px] h-[100px] border border-black"
        >
            <span className="text-3xl">{status}</span>
        </div>
    );
}

export default Square;
