import React, { useState } from "react";
import { auth } from "../firebase/init";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
//imports
const Dashboard = () => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const history = useHistory();
//   variables being used below
  function logout() {
    signOut(auth);
    setUser({});
    history.push("/login");
  }
  //logout function

  return (
    <div className="dash__page">
      <h2 className="dash__title"> Dashboard</h2>
      <li className="dash__list">
        <a href="/login" className="dash__links btn" onClick={logout}>
          Sign Out
        </a>
        {/* signout link */}
        <a
          href="https://calendar.google.com/calendar/u/0?cid=MDU4MDU5MTQzYjFjNmNkYWM3ZmM5MjZiY2E1OTY5ZTdlMzc3NDJhMGExM2Y1YTgyNWU0OGIzYjhhZDBiMDkxNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
          className="dash__links btn"
          onClick=""
        >
          Google Calendar
        </a>
        <a href="/randomcalendar" className="dash__links btn">
          Generate Calendar New
        </a>
        {/* link to generate the Calendar */}
      </li>
    </div>
  );
};

export default Dashboard;
//allow me to use this file in other files^
