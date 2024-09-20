import { useState } from "react";

export default function App() {
    const [status, setStatus] = useState("")

    const isMedium = (password) => {
	return password.length >= 6 && containsNumber(password) && containsLetter(password);
    }

    const isStrong = (password) => {
	return password.length >= 8 && containsNumber(password) && containsLetter(password) && containsSpecialCharacter(password);
    }

    const containsNumber = (password) => {
	return password.match(/[0-9]/);
    }

    const containsLetter = (password) => {
	return password.match(/[a-zA-Z]/);
    }

    const containsSpecialCharacter = (password) => {
	return password.match(/[^a-zA-Z0-9]/);
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
