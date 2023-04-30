import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Login from "./components/Login";
import { books } from "./data";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) setUser(user);
    });
  }, []);
  

  

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact component={Books} />
        <Route path="/login" exact component={Login} />
        <Route path="/login" element={<Login setUser={setUser}></Login>} />
        <Route path="/dashboard" element={<Dashboard user={user}></Dashboard>} />
        <Route path="/dashboard" exact component={Dashboard} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
