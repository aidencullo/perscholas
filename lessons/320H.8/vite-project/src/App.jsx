import "./App.css";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Profile from "./pages/profile";
import Nav from "./components/nav";
import Component from "./components/component";

export default function App () {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/profile/:id" element={<Profile />}/>
      </Routes>
      <Component />
    </div>
  );
}
