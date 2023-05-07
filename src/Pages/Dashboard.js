import React, { useState, useEffect } from "react";
import { auth } from "../firebase/init";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
//imports
const Dashboard = () => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const history = useHistory();
  const [verify, setVerify] = useState(null);
  //   variables being used below


  useEffect(() => {
    const authenticate = onAuthStateChanged(auth, (user) => {
      if (user) {
        setVerify(user);
      } else {
        setVerify(null);
        history.push("/");
      }
    });
    return () => {
      authenticate();
    };
  }, []);
  //logout function
  function logout() {
    signOut(auth);
    setUser({});
    history.push("/login");
  }

  return (
    <div className="dash__page">
      <h2 className="dash__title"> Dashboard</h2>
      <li className="dash__list">
        <a href="/login" className="dash__links btn" onClick={logout}>
          Sign Out
        </a>
        {/* signout link */}

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
