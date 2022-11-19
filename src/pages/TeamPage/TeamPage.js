import "./TeamPage.css";
import Team from "../../components/Team/team"
// import teamService from "../../services/team.services"

function TeamPage() {
  // teamService
  //       .signup(requestBody)
  //       .then((response) => {
  //         // If the POST request is successful redirect to the login page
  //         navigate("/login");
  //       })
  //       .catch((error) => {
  //         // If the request resolves with an error, set the error message in the state
  //         const errorDescription = error.response.data.message;
  //         setErrorMessage(errorDescription);
  //       });
  return (
    <div>
      <Team className= "team" />
    </div>
  );
}

export default TeamPage;
