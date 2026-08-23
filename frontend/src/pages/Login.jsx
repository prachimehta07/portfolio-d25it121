import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return;
  }
  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  try {
    if (isRegister) {
      await registerUser(email, password);
    }
    const result = await loginUser(email, password);
    localStorage.setItem("token", result.token);
    navigate("/tasks");
  } catch (err) {
    setError(err.message);
  }
};

  return (
    <main>
      <section className="section">
        <p className="section-label">06 / {isRegister ? "REGISTER" : "LOGIN"}</p>
        <h2>{isRegister ? "Create an account" : "Welcome back"}</h2>

        <form className="task-form" onSubmit={handleSubmit} style={{ flexDirection: "column", alignItems: "stretch" }}>
          <input
            className="contact-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="contact-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="theme-toggle" type="submit">
            {isRegister ? "Register & Login" : "Login"}
          </button>
        </form>

        {error && <p className="help-text">{error}</p>}

        <button className="help-toggle" onClick={() => setIsRegister((prev) => !prev)}>
          {isRegister ? "Already have an account? Login" : "Need an account? Register"}
        </button>
      </section>
    </main>
  );
}

export default Login;