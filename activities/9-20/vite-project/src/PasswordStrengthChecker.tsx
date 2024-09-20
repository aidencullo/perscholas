import { useState } from "react";

export default function App() {
    const [password, setPassword] = useState("");

    const HandleChange = (e) => {
	setPassword("no")
    }
    
    return (
	<div>
	    <h1>Enter your password</h1>
	    <input onChange={HandleChange} type="password" />
	    <p>{password}</p>
	</div>
    );
}
