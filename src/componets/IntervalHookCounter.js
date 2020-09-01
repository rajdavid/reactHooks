import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    
    const tick = () => {
        setCount(prevCount=>prevCount+1)
    }
    const someProp = 1;
    useEffect(() => {
        function doSomeThing() {
            console.log(someProp)
        }
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    },[someProp])
    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default IntervalHookCounter
