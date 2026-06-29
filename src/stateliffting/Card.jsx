

const Card = (props) => {
  return (
    <>
    <input type="text" onChange={(e)=>props.setName(e.target.value)} />
    <p>child components {props.name}</p>
    </>
  )
}

export default Card
