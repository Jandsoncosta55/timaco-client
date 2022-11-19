// import Team from "../../components/Team/team"
import "./ProfilePage.css";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <Link className= "create" to="/team"><button>Create Team</button></Link>
               {/* <h1> <Team></Team></h1> */}
    </div>
  );
}

export default ProfilePage;
