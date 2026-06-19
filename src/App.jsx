import { lazy, Suspense,useState} from "react";

const Lazy = lazy(() => import("./lazyloading/Lazy"));

function App() {
  const[show,setShow]=useState(false)
 
  return (
    <>
      <h1>Hello I am Main box </h1>
      <button onClick={()=>setShow(true)}>Show</button>
      {show && (
          <Suspense fallback={<h2>Content loading</h2>}>
          <Lazy />
        </Suspense>
     
      )}
  
      
    </>
  );
}

export default App;
