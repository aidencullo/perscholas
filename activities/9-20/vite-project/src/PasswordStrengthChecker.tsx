import { useState } from "react";

export default function App() {
    const [status, setStatus] = useState<string>("");
    const [statusColor, setStatusColor] = useState<string>("black");

    const isMedium = (password: string): boolean => {
        return password.length >= 6 && containsNumber(password) && containsLetter(password);
    };

    const isStrong = (password: string): boolean => {
        return password.length >= 8 && containsNumber(password) && containsLetter(password) && containsSpecialCharacter(password);
    };

    const containsNumber = (password: string): boolean => {
        return /[0-9]/.test(password);
    };

    const containsLetter = (password: string): boolean => {
        return /[a-zA-Z]/.test(password);
    };

    const containsSpecialCharacter = (password: string): boolean => {
        return /[^a-zA-Z0-9]/.test(password);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const password = e.target.value;
        if (isStrong(password)) {
            setStatus("Password is strong");
	    setStatusColor("green");
        } else if (isMedium(password)) {
            setStatus("Password is medium");
	    setStatusColor("orange");
        } else {
            setStatus("Password is weak");
	    setStatusColor("red");
        }
    };

    return (
        <div>
            <h1>Enter your password</h1>
            <input onChange={handleChange} type="password" />
            <p style={{ color: statusColor }}>{status}</p>
        </div>
    );
}
