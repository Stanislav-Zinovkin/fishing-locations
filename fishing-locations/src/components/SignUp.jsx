import React, { useState } from "react";
import { auth } from "../firebase";
import Modal from "./Modal";

function SignUp({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert("LogIn is sucsess!");
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Join to community</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        {error && <p style={{ color: "blue" }}>{error}</p>}
      </form>
    </Modal>
  );
}

export default SignUp;
