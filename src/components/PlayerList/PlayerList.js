import { useState, useEffect } from "react";
import playersService from "../../services/players.services"


function PlayerList() {
  const [list, setList] = useState([]);
  function getPlayers() {
    playersService.getAll()
    .then(response => {
        setList(response.data)
    })
    .catch(error => {
        console.error(error)
    })
  };
  useEffect(() => {
    getPlayers()
  },[])

  return (
    <div>
      {list.map((name) => {
        return (
          <div key= {name._id}>
            <p>Name: {name.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PlayerList;