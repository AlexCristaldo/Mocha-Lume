import { useState } from "react";
import { createUser } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await createUser(email, password);

      alert(result.message);

      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h2>Cadastro</h2>

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
          Cadastrar
        </button>

        <p>
          Já tem conta?{" "}
          <Link to="/login">
            Fazer login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;