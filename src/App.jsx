// import { lazy, Suspense, useState } from "react";
// const Lazy = lazy(() => import("./lazyloading/Lazy"));

import RefComponent from "./UseRef/RefComponent"


const App = () => {
  return (
    <>
    <RefComponent/>
    </>
  )
}

export default App



// import { createContext, useState } from "react";
// import Child1 from "./useContext/Child1";

// const UserContext=createContext();
// function App(){
 
//   const [user,setuser]=useState({name:"Mohit",age:12})
  
//   return(
//     <>
//     hello I am Main 
//    <UserContext.Provider value={user}>
//     <Child1/>
//    </UserContext.Provider>
    
//     </>
//   )
// }
// export default App;
// export{UserContext};







// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <h1>Hello I am Main box </h1>
//       <button onClick={() => setShow(true)}>Show more content</button>
//       {show && (
//         <Suspense fallback={<h2>Content loading</h2>}>
//           <Lazy />
//         </Suspense>
//       )}
//     </>
//   );
// }


// export default App;




// import Form from "./components/Form ";
// const App = () => {
//   return (
//    <>
//     <Form/>
//    </>
//   )
// }

// export default App;



// import Card from "./stateliffting/Card"
// import { useState } from "react";


// const App = () => {
//   const [name, setName] = useState('');
//   return (
//    <>
//    <h1>parent component {name}</h1>
//    <Card name={name} setName={setName}/>
//    </>
//   )
// }

// export default App

//useMemo


// import Expensive from "./useMemo/Expensive"
// const App = () => {
//   return (
//    <>
//    <Expensive/>
//    </>
//   )
// }

// export default App


