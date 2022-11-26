import playersService from "../../services/players.services"
import { useState } from "react";

function AddPlayer(props) {
  const [name, setname] = useState("");

  const handleNameInput = (e) => setname(e.target.value);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = { name };
    playersService
      .createOne(newName)
      .then((response) => {
        window.alert("Player criado com sucesso!");
      })
      .catch((error) => console.error(error));

    console.log("Submitted: ", newName);
  };

  return (
    <div className="AddPlayer">
      <h4>Add a Player</h4>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <button type="submit">Add a Players</button>
      </form>
    </div>
  );
}

export default AddPlayer;
