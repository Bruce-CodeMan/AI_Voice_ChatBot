interface IProps {
    runHandler: () => void;
}

function Button({runHandler}: IProps) {
    return (
        <button onClick={runHandler}  className="transition-all duration-300 border w-full border-black px-4 py-12 rounded-sm bg-indigo-500 hover:bg-indigo-600">Place Bet</button>      
    )
}

export default Button;