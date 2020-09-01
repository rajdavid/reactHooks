import React,{useEffect,useState} from 'react'

function HooksEffect1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    //for condtionallly running effect add second parameter and in that array what varaible to watch for 
    useEffect(() => {
        console.log('updating document title ')
       document.title=`you clicked ${count}  timess`
    },[count])
    return (
        <div>
            <input type="text"
                value={name} 
                onChange={e=>setName(e.target.value)}
                />
            <button onClick={()=>setCount(count +1)}>Click {count } times</button>  
        </div>
    )
}

export default HooksEffect1
