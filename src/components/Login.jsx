import React, { useState } from "react";
// import { View, TouchableOpacity, TextInput, Text} from 'react-native';
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

const Login = () => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");

  //   const navigate = useNavigate();
  const history = useHistory();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (!email || !password) return;
  //     setUser({ email: email, password: password });
  //     history.push("/dashboard");
  //     console.log(email, password);
  //   };

  async function updatePost() {
    const hardcodedId = "2amSOkWQx6YHf7ZLRcTm";
    const postRef = doc(db, "posts", hardcodedId);
    const post = await getPostById(hardcodedId);
    console.log(post);
    const newPost = {
      ...post,
      title: "land a 100milly job",
    };
    console.log(newPost);
    updateDoc(postRef, newPost);
  }

  function deletepost() {
    const hardcodedId = "2amSOkWQx6YHf7ZLRcTm";
    const postRef = doc(db, "posts", hardcodedId);
    deleteDoc(postRef);
  }

  function createPost() {
    const post = {
      title: "Finish interview section",
      description: "do suin different",
      uid: user.uid,
    };
    addDoc(collection(db, "posts"), post);
  }

  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"));
    const posts = docs.map((elem) => ({ ...elem.data(), id: elem.id }));
    console.log(posts);
  }

  async function getPostById(id) {
    const postRef = doc(db, "posts", id);
    const postSnap = await getDoc(postRef);
    return postSnap.data();
  }

  async function getPostByUid() {
    const postCollectionRef = await query(
      collection(db, "posts"),
      where("uid", "==", user.uid)
    );
    const { docs } = await getDocs(postCollectionRef);
    console.log(docs.map((doc) => doc.data()));
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) setUser(user);
    });
  }, []);
  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setUser(user);
        history.push("/dashboard");
        // <location.href="./books" />
      })
      .catch((error) => {
        console.log(error.message);
        alert("Incorrect username or password. Please try again."); // display error message
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
      <input className="wrapper"
        type="email"
        placeholder="Username"
        value={email}
        onChange={handleEmailChange}
      />
      </div>
      <div className="wrapper-wrap">
      <input className="wrapper"
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
      {/* <button onClick={register}>Register</button> */}
      {/* <button onClick={logout}>Logout2</button> */}
      {/* {loading ? "loading..." : user.email} */}
      {/* <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>get all posts</button>
      <button onClick={getPostById}>get post ID</button>
      <button onClick={getPostByUid}>get post UiD</button>
      <button onClick={updatePost}>Update post</button>
      <button onClick={deletepost}>Delete post</button> */}
    </div>
  );
};

export default Login;
