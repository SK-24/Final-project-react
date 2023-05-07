import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./components/Login";
import { auth } from "./firebase/init";
import {
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Dashboard from "./Pages/Dashboard";
import RandomCalendar from "./components/RandomCalendar";
//imports

function App() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
//   variables being used below

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
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/login" element={<Login setUser={setUser}></Login>} />
        <Route
          path="/dashboard"
          element={<Dashboard user={user}></Dashboard>}
        />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/randomcalendar" exact component={RandomCalendar} />
        {/* Routes to the pages i said. Prevents long loadings. */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
//allow me to use this file in other files^