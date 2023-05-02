import BetButton from "./BetButton";

interface IProps {
    betDirection: string;
    setBetDirection: any;
    isLoading: boolean;
}

function BetBox({ betDirection, setBetDirection, isLoading }: IProps) {
    return (
        <div className="mt-5">
            <div className="py-2 border bg-gray-700 text-white text-right pr-12">
                { isLoading?"Loading...": "Result" }
            </div>
            <div className="flex flex-row justify-between py-2 border bg-pink-100">
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
            <div className="py-2 border bg-purple-100">Layer 3</div>
        </div>
    )
}

export default BetBox;