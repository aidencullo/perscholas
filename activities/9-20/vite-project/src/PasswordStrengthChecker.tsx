import { useState } from "react";

export default function App() {
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("")

    const HandleChange = (e) => {
	if (e.target.value.length < 6) {
	    setStatus("Password must be at least 6 characters")
	} else {
	    setStatus("Password is strong")
	}
    }
    
    return (
	<div>
	    <h1>Enter your password</h1>
	    <input onChange={HandleChange} type="password" />
	    <p>{status}</p>
	</div>
    );
}
