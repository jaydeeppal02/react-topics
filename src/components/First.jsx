import { useState } from "react"


const First = () => {
    const [user,setUser]=useState("")
    function output(e){
        setUser(e.target.value)
    }
  return (
    <>
    <h1>{user}</h1>
    <input type="text" onChange={output} />
    </>
  )
}

export default First
//Controlled component

