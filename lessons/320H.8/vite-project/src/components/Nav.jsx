import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Main</div>
      </Link>
      <Link to="/profile/:id">
        <div>Profile</div>
      </Link>
    </div>
  );
}
