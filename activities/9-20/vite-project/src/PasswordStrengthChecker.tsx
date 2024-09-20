import { useState, useMemo } from "react";

export default function App() {
  const [status, setStatus] = useState<string>("weak");

  const containsNumber = (password: string): boolean => /[0-9]/.test(password);
  const containsLetter = (password: string): boolean => /[a-zA-Z]/.test(password);
  const containsSpecialCharacter = (password: string): boolean => /[^a-zA-Z0-9]/.test(password);

  const isMedium = (password: string): boolean =>
    password.length >= 6 && containsNumber(password) && containsLetter(password);

  const isStrong = (password: string): boolean =>
    password.length >= 8 && containsNumber(password) && containsLetter(password) && containsSpecialCharacter(password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const password = e.target.value;
    if (isStrong(password)) {
      setStatus("strong");
    } else if (isMedium(password)) {
      setStatus("medium");
    } else {
      setStatus("weak");
    }
  };

  const color = useMemo(() => {
    switch (status) {
      case "weak":
        return "red";
      case "medium":
        return "orange";
      case "strong":
        return "green";
      default:
        return "black";
    }
  }, [status]);

  const message = `Your password is ${status}`;

  return (
    <div>
      <h1>Enter your password</h1>
      <input onChange={handleChange} />
      <p style={{ color }}>{message}</p>
    </div>
  );
}
