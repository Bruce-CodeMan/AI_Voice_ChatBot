import Button from "./Button";
import { useState, useEffect } from "react";
import BetBox from "./BetBox";
import axios from "axios";

function Controller() {

    const [ hasWon, setHasWon ] = useState(false);
    const [ betDirection, setBetDirection ] = useState("up");
    const [ isLoading, setIsLoading ] = useState(false);

    const containerHandler = async () => {

        setIsLoading(true);

        let isShow = false;
        const url = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
        await axios
                .get(url)
                .then((res) => {
                if(res.status == 200){
                    const val = res.data;
                    console.log(val)
                    if(val >= 50 && betDirection == "up") {
                        isShow = true;
                    }else if(val < 50 && betDirection == "down") {
                        isShow = false;
                    }
                }else{
                    console.log('出错啦！！！！')
                }
            }).catch((err) => {
                console.log(err.data, err.message);
            });
        // Return winner result
        setHasWon(isShow);
        setIsLoading(false);
    }

    useEffect(() => {
        console.log(hasWon)
    }, [hasWon])

    return (
        <div className=" w-full md:w-[850px] lg:w-[1200px] bg-green-500 py-12 container mx-auto px-5">
            <Button runHandler={containerHandler}/>
            <BetBox betDirection={betDirection} setBetDirection={setBetDirection} isLoading={isLoading}/>
        </div>
    )
}

export default Controller;