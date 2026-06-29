import { useMemo, useState } from "react"
const Expensive = () => {
    const[value,setValue]=useState(0)
    const [input,setInput]=useState(0)

    function expensive(num){
        console.log("Hello ")
        for(let i=0;i<=10000000;i++){}
        return num*2
        
    }
    
    let doubleval=useMemo(()=>expensive(input),[input])
    // let doubleval=expensive(input)
  return (
   <>
   <h1>{value}</h1>
   <button onClick={()=>setValue(value+1)}>Count+1</button>

   <div>
    <input type="number"
     value={input}
     onChange={(e)=>setInput(e.target.value)} />

    double:{doubleval}
   </div>
   </>
      
  )
}

export default Expensive
