import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddTeam from "../../components/AddTeam/AddTeam";

import teamService from "../../services/team.services";

const EditTeam = () => {
  const [team, setTeam] = useState(null);
  //   const [error, setError] = useState('');

  const { Id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneTeam();
  });

  const getOneTeam = () => {
    teamService
      .getOne(Id)
      .then((response) => setTeam(response))
      .catch((error) => console.error(error));

    //   const handleError = (error) => {
    //     setError(error);
    //     setTimeout(() => {
    //       setError('');
    //     }, 5000)
    //   }

    const handleSubmit = (values) => {
      teamService
        .updateOne(team, values)
        .then(() => {
          navigate(`/team/${Id}`);
        })
        .catch((error) => console.error(error));
    };

    return (
      <div>
        {team && (
          <AddTeam initialValues={{ ...team }} submitFunc={handleSubmit} />
        )}
      </div>
    );
  };
};
export default EditTeam;
