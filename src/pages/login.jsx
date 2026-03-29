import { useState } from "react";
import { loginUser } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);

      localStorage.setItem(
        "usuario",
        JSON.stringify(response.user)
      );

      alert(response.message);
      navigate("/mesas");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Entrar
        </button>

        <p>
          Não tem conta?{" "}
          <Link to="/register">
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;