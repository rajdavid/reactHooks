import React,{useState} from 'react'

function HookCounter2() {
    const intialCount = 0;
    const[count ,setCount]=useState(intialCount)
    
    const incrementFive = () => {
    
        for (let i = 0; i < 5; i++) {
            setCount(prevState => prevState + 1)
        }
    }
    
    return (
        <div>
            Count  ::: {count }
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment </button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement </button>
            <button onClick={incrementFive}>Increment 5</button>
            <button onClick={() => setCount(intialCount)}>Reset</button>
        </div>
    )
}

export default HookCounter2
