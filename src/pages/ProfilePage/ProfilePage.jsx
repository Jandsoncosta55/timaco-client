// import Team from "../../components/Team/team"
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import AddTeam from "../../components/AddTeam/AddTeam";
import TeamList from "../../components/TeamList";
function ProfilePage() {
  return (
    <div>
      <Link className="create" to="/">
        <button className="btn">Create Team</button>
      </Link>
      <AddTeam/>
      <TeamList/>
    </div>
  );
}

export default ProfilePage;
