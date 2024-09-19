import { useState } from "react"

export default function Counter(props) {
    const [state, setState] = useState([0])
    state[0] = 6
    setState(state)

    return (
	<div>
	    <h1>{state[0]}</h1>
	</div>
    )
}
