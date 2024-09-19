import { useState } from 'react'

export default function App() {
    const [state, setState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])

    const handleClick = () => {
	state[0] = 1
	setState(state)
    }
    
    return (
	<div>
	    <h1>{state}</h1>
	    <button onClick={() => handleClick()}>Click me</button>
	</div>
    )
}
