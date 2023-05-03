import React, { useState } from "react";
import Login from "../components/Login";
import { auth, db } from "../firebase/init";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import DemoApp from "../components/Calendar";

const Dashboard = () => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const history = useHistory();

  function logout() {
    signOut(auth);
    setUser({});
    history.push("/login");
  }

  return (
    <div className="dash__page">
      <h2 className="dash__title"> Accounts Page</h2>
      <li className="dash__list">
      <a href="/login" className="dash__links btn" onClick={logout}>Sign Out</a>
              <a href="/calendar" className="dash__links btn">
                Generate Calendar
              </a>
            </li>
      {/* <button onClick={DemoApp}>Generate Calendar</button> */}
    </div>
  );
};


export default Dashboard;
