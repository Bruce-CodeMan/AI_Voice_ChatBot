import Button from "./Button";
import { useState, useEffect } from "react";
import BetBox from "./BetBox";

function Controller() {

    const [ show, setShow ] = useState(false);
    const [ betDirection, setBetDirection ] = useState("up");

    const containerHandler = () => {
        setShow(!show);
    }

    useEffect(() => {
        console.log(betDirection)
    }, [betDirection])

    return (
        <div className=" w-full md:w-[850px] lg:w-[1200px] bg-green-500 py-12 container mx-auto px-5">
            <Button runHandler={containerHandler}/>
            <BetBox betDirection={betDirection} setBetDirection={setBetDirection}/>
        </div>
    )
}

export default Controller;