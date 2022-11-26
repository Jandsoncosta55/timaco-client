import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TeamPage from "./pages/TeamPage/TeamPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
// import Team from "./components/Team/team";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img
          src="https://s3.amazonaws.com/plugcrm-app/5d430b7bf8381400224ccc82/deal_file/637d4f580de24c000c0538c2.jpeg"
          style={{ padding: 5, width: 50, height: 50, borderRadius: 40 }}
          alt="home"
        />
      </Link>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
