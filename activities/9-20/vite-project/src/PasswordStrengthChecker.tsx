import { useState } from "react";

export default function App() {
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("")

    const isWeak = (password) => {
	return password.length < 6;
    }

    const isMedium = (password) => {
	return password.length >= 6 && password.length < 10;
    }

    const isStrong = (password) => {
	return password.length >= 10;
    }

    const HandleChange = (e) => {
	if (isStrong(e.target.value)) {
	    setStatus("Password is strong")
	} else if (isMedium(e.target.value)) {
	    setStatus("Password is medium")
	} else {
	    setStatus("Password is weak")
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
