import { useState } from 'react'

export default function App() {
    const initialState = {
	isLoggedIn: true,
	status: "hidden",
	content: null,
	active: true
    }
    const [state, setState] = useState(initialState)

    const handleClick = () => {
	setState({
	    ...state,
	    isLoggedIn: !state.isLoggedIn,
	})
    }
    
    return (
	<div>
	    <h1>{JSON.stringify(state)}</h1>
	    <button onClick={() => handleClick()}>Click me</button>
	</div>
    )
}
