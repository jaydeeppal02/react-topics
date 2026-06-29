
import { UserContext } from "../App"
import { useContext } from "react";

const Child3 = () => {
    const user1=useContext(UserContext)
  return (
    <>
    {user1.name} {user1.age}
    <p>Hello I am child components</p>
    </>
  )
}

export default Child3
