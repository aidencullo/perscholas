import React, { useState } from 'react'

// Component receives function as prop to update parent's state
const SenderChild = props => {
  return <button onClick={() => props.update("Goodbye")}>Click Me</button>
}

// Component receives parent's state
const ReceiverChild = props => {
  return <h1>{props.value}</h1>
}

// The parent who passes props to both children
const Parent = props => {
  // The State
  // We'll talk about this "useState" thing (called a "hook") in the next lesson!
  const [state, setState] = useState("Hello")

  // Function to update state to send to child
  const updateState = data => setState(data)

  // We pass the function and the state as props to the children
  return (
    <div>
      <ReceiverChild value={state} />
      <SenderChild update={updateState} />
    </div>
  )
}

export default Parent
