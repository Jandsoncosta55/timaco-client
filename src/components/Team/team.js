// import { useState } from 'react';
// import  "./team.css";
// import { Link } from "react-router-dom";
// // import teamService from '../../services/team.services';

// const Team = ({ initialValues = { title: '', description: ''}, submitFunc}) => {
//   const [formData, setFormData] = useState(initialValues);

//   const handleInput = (e) => {
//     const { id, value } = e.target;

//     const newValues = {
//       ...formData,
//       [id]: value
//     }
//     setFormData(newValues)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     submitFunc(formData);
//     setFormData(initialValues);
//   }

//   return (
//     <form className = "formTeam" onSubmit={handleSubmit}>
//       <div >
//       <Link className= "create" to="/">
//         <button className= "btn">Create Team</button></Link>
//         <label htmlFor='title'>Title:</label>
//         <input type='text' id='title' value={formData.title} onChange={handleInput} />
//       </div>
//       <div>
//         <label htmlFor='description'>Description:</label>
//         <input type='text' id='description' value={formData.description} onChange={handleInput} />
//       </div>
//       <button className= "button" type='submit'>Submit</button>
//     </form>
//   )
// }

// export default Team;

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

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/`)
      .then((response) => {})
    */

    // Or using a service
    teamService
      .create0ne(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
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
