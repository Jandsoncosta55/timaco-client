import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function TeamListPage() {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescriptions = (e) => setDescriptions(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, descriptions };

    authService
      .getAll(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
       console.error(error)
      });
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={title} onChange={handleTitle} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={descriptions}
          onChange={handleDescriptions}
        />

        <button className="btn" type="submit">
          Login
        </button>
      </form>


      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}

export default TeamListPage;





// function TeamListPage(){
//     return(
//         <div>
// ListTeamPage
//         </div>
//     )
// }

// export default TeamListPage;