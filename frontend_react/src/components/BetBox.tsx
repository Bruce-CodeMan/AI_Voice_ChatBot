import BetButton from "./BetButton";

interface IProps {
    betDirection: string;
    setBetDirection: any;
    isLoading: boolean;
    hasWon: boolean;
    valStore: number;
}

function BetBox({ betDirection, setBetDirection, isLoading, valStore, hasWon }: IProps) {
    return (
        <div className="mt-5">
            <div className="py-2 border bg-gray-700 text-white text-right pr-12">
                { isLoading?"Loading...": `Random Number Returned: ${valStore}` }
            </div>
            <div className="flex flex-row justify-between py-2 border ">
                <BetButton 
                    direction="down" 
                    betDirection={betDirection} 
                    setBetDirection={setBetDirection}
                />
                <BetButton 
                    direction="up" 
                    betDirection={betDirection} 
                    setBetDirection={setBetDirection}
                />
                <div></div>
            </div>
            <div className="py-2 border bg-gray-100 text-center text-4xl font-light font-bold">
                {valStore != 0 && 
                <div
                    className={"" + (hasWon ? "text-green-500" : "text-red-500")}
                >
                    { hasWon ? "WINNER": "BAD LUCK" }</div>}
            </div>
        </div>
    )
}

export default BetBox;