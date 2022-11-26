import "./team.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import teamService from "../../services/team.services";

function Team() {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescriptions = (e) => setDescriptions(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, descriptions };

    teamService
      .create0ne(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="formTeam">
      <h1>Timaco</h1>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="title" name="title" value={title} onChange={handleTitle} />

        <label>descriptions:</label>
        <input
          type="descriptions"
          name="descriptions"
          value={descriptions}
          onChange={handleDescriptions}
        />

        <button className="btn" type="submit">
          submit
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Team;
