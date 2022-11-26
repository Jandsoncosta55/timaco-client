import { useState, useEffect } from "react";
import teamService from "../services/team.services";
import AddPlayer from "./AddPlayer/AddPlayer";

function TeamList() {
  const [list, setList] = useState([]);
  function getTeams() {
    teamService.getAll()
    .then(response => {
        setList(response.data)
    })
    .catch(error => {
        console.error(error)
    })
  };
  useEffect(() => {
    getTeams()
  },[])

  return (
    <div>
      {list.map((time) => {
        return (
          <div key= {time._id}>
            <p>Titulo: {time.title}</p>
            <p>Descriptions: {time.descriptions}</p>
            <AddPlayer />
          </div>
        );
      })}
    </div>
  );
}

export default TeamList;
