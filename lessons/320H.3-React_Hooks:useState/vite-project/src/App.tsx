import { useState } from "react"

export default function Counter(props) {
  // initiate counter at 0, setCounter let's us update the counter
  const [counter, setCounter] = useState(0)

  // Function to add one to the state
 const addOne = () => {
     setCounter((counter) => counter + 1)
 }
    // The h1 displays the counter, and the button runs the addOne() function
    return (
	<div>
	    <h1>{counter}</h1>
	    <button onClick={addOne}>Click Me to Add One</button>
	</div>
    )
}
