// src/components/AddMovie.js
import teamService from "../../services/team.services";
import { useState } from "react";

function AddTeam(props) {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");

  const handleTitleInput = (e) => setTitle(e.target.value);

  const handleDescriptionsInput = (e) => setDescriptions(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeam = { title, descriptions };
    teamService
      .createOne(newTeam)
      .then((response) => {
        window.alert("Time criado com sucesso!");
      })
      .catch((error) => console.error(error));

    console.log("Submitted: ", newTeam);
  };

  return (
    <div className="AddTeam">
      <h4>Add a Team</h4>

      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleInput}
        />

        <label>Descriptions: </label>
        <input
          type="text"
          name="descriptions"
          value={descriptions}
          onChange={handleDescriptionsInput}
        />

        <button type="submit">Add a Team</button>
      </form>
    </div>
  );
}

export default AddTeam;
