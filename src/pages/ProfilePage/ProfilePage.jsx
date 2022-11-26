import "./ProfilePage.css";
import { Link } from "react-router-dom";
import AddTeam from "../../components/AddTeam/AddTeam";

function ProfilePage() {
  return (
    <div>
      <Link className="create" to="/team">
        <button className="btn">All Team</button>
      </Link>
      <AddTeam />
    </div>
  );
}

export default ProfilePage;
