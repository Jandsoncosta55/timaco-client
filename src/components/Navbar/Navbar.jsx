import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="nav">
      <Link to="/">
        <button className="home">Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <button className="logOut" onClick={logOutUser}>
            Logout
          </button>

          <Link to="/profile">
            <button className="profile">Profile</button>
          </Link>
          <Link to="/profile">
            <img
              src="https://picsum.photos/id/402/200/300"
              style={{ padding: 5, width: 50, height: 50, borderRadius: 25 }}
              alt="profile"
            />
          </Link>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button className="signUp">Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button className="login">Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
