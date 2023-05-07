import React, { useState } from "react";
import { auth } from "../firebase/init";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useHistory } from "react-router-dom";
//imports

const Login = () => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const history = useHistory();
  //   variables being used below

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) setUser(user);
    });
  }, []);

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setUser(user);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Incorrect username or password. Please try again."); // display the error message
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  const handleEmailChange = (e) => {
    updateEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    updatePassword(e.target.value);
  };

  return (
    <div className="login__page">
      <h1 className="login__title">Login</h1>
      <div className="wrapper-wrap">
        <input
          className="wrapper"
          type="email"
          placeholder="Username"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="wrapper-wrap">
        <input
          className="wrapper"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="login__wrapper">
        <button className="login__btn" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
//allow me to use this file in other files^