import React, { useState } from "react";
import "./Login.css";
import useAuth from "../hooks/useAuth";

function Login() {
  const { error, loading, signIn, register } = useAuth();
  const [email, setEmail] = useState("");
  const [type, setType] = useState("login"); // ['login', 'register']
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "login") {
      signIn(email, password);
    }

    if (type === "register") {
      register(email, password);
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => setType("register")}>Signup</button>
        <button onClick={() => setType("login")}>Login</button>
      </form>

      {error && <p>{error.message}</p>}
    </div>
  );
}

export default Login;
