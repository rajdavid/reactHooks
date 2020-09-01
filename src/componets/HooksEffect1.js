import React,{useEffect,useState} from 'react'

function HooksEffect1() {
    const [count, setCount] = useState(0)
    useEffect(() => {
       document.title=`you clicked ${count}  timess`
    })
    return (
        <div>
            <button onClick={()=>setCount(count +1)}>Click {count } times</button>  
        </div>
    )
}

export default HooksEffect1
