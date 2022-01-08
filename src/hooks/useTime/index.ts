import { useEffect, useState } from "react";

const useTime = () =>{

    const [seconds, setSeconds] = useState(30);
    const [stop, setStop ] = useState (false)

    useEffect(() => {

        let interval:NodeJS.Timer;

        if(!stop){
            interval = setInterval(() => setSeconds(seconds - 1), 1000)
        } 
        
        return ()=> clearInterval(interval)
        

    },[seconds, stop])

    const reStart = ()=> {
        setSeconds(30)
        setStop(false)
    }

    const stopTime = () => {

        setStop(true)

    }

    return {  seconds, reStart, stopTime  }

}

export { useTime }