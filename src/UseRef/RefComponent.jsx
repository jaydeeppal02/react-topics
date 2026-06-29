// import { useRef, useState } from "react";



// const RefComponent = () => {
//   const [count, setCount] = useState(0);
//   let value = useRef(0);
//   function handleclick() {
//     value.current = value.current + 1;
//     console.log(value.current);
//     setCount(count + 1);
//   }
//   return (
//     <>
//       <div>{count} </div>
//       <div>
//         <button onClick={handleclick}>Increment</button>
//       </div>
//     </>
//   );
// };

// export default RefComponent;
import { useRef, useState } from "react"
const RefComponent = () => {
    const btnRef=useRef(null);
    const [btn,setBtn]=useState(false)
    function changeColor(){
        if(!btn){
             btnRef.current.style.backgroundColor="red";
             setBtn(true);
        }
        else{
            btnRef.current.style.backgroundColor="yellow";
            setBtn(false)
        }
       
        
    }
  return (
    <>
    <div>
        <button ref={btnRef}>Change Color this btn</button>
    </div>
    <br />
    <br />
    <div>
        <button onClick={changeColor}>Click to change color</button>
    </div>
    </>
      
  )
}

export default RefComponent

