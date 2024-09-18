const UserMenu = () => <p> User Menu </p>;
const LoginBtn = () => <p> Login </p>;
const LogoutBtn = () => <p> Logout </p>;
const SearchBar = () => <p> Search Bar </p>;
const Menu = () => <p> Menu </p>;
const NavContainer = props => <p> {props.children} </p>;

function Navbar({ isLoggedIn = false }) {
  return (
    <NavContainer>
      <Menu />
      <SearchBar />
      { isLoggedIn && <UserMenu /> }
      { isLoggedIn ? <LogoutBtn /> : <LoginBtn /> }
    </NavContainer>
  );
}

export default Navbar;
