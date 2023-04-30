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
    <div>
      <h2> Accounts Page</h2>
      <button onClick={logout}>signOut</button>
    </div>
  );
};

export default Dashboard;
