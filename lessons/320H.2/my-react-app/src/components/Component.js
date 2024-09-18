// The Child Component
const Child = props => {
  // change the value of someVariable using function sent via props
  props.setter(8)

  return <h1>{props.stuff}</h1>
}

// The Parent Component
const Parent = props => {
  let someVariable

  // function to set someVariable
  const setSV = data => {
    someVariable = data
  }

  // send down two props, stuff and setter
  return <Child stuff="hello world" setter={setSV} />
}

export default Parent
