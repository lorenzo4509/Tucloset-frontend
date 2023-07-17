import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import UserProfile from "./components/UserProfile";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import styles from "./styles/App.css";

const App = () => {
  const userId = localStorage.getItem('id')
  return (
    <Router>
      <header className="styles.header">
        <Link to="/" className="logo"></Link>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home userId={userId} />} />
        <Route path="/cart" element={<Cart userId={userId} />} />
        <Route path="/user/:userId" element={<UserProfile userId={userId} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
};

export default App;
