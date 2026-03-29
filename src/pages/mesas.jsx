import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMesas, reservarMesa, liberarMesaApi } from "../services/api";

function Mesas() {
  const navigate = useNavigate();

  const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));
  const isAdmin = usuarioLogado?.email === "adm@adm.com";

  const [horarioSelecionado, setHorarioSelecionado] = useState("");
  const [mesas, setMesas] = useState([]);
  const [mesaSelecionada, setMesaSelecionada] = useState(null);

  useEffect(() => {
    carregarMesas();
  }, []);

  async function carregarMesas() {
    try {
      const data = await getMesas();
      setMesas(data);
    } catch (error) {
      alert("Erro ao carregar mesas");
    }
  }

  function selecionarMesa(mesa) {
    if (mesa.status === "reservada" && !isAdmin) {
      alert("Essa mesa já está reservada.");
      return;
    }

    setMesaSelecionada(mesa.id);
  }

  async function confirmarReserva() {
    if (!usuarioLogado) {
      alert("Você precisa estar logado.");
      navigate("/login");
      return;
    }

    if (!mesaSelecionada) {
      alert("Selecione uma mesa.");
      return;
    }

    if (!horarioSelecionado) {
      alert("Escolha um horário.");
      return;
    }

    try {
      const response = await reservarMesa(
        mesaSelecionada,
        usuarioLogado.email,
        horarioSelecionado,
        isAdmin
      );

      alert(response.message);
      setMesaSelecionada(null);
      setHorarioSelecionado("");
      carregarMesas();
    } catch (error) {
      alert(error.message);
    }
  }

  async function liberarMesa(id) {
    try {
      const response = await liberarMesaApi(id, isAdmin);
      alert(response.message);
      carregarMesas();
    } catch (error) {
      alert(error.message);
    }
  }

  function logout() {
    localStorage.removeItem("usuario");
    navigate("/login");
  }

  return (
    <div className="mesas-container">
      <div className="topo-mesas">
        <h2>Escolha sua mesa</h2>

        <div className="usuario-info">
          <span>
            Logado como: <strong>{usuarioLogado?.email}</strong>
          </span>

          {isAdmin && <span className="admin-badge">ADMIN</span>}

          <button className="btn-sair" onClick={logout}>
            Sair
          </button>
        </div>
      </div>

      <div className="horario-box">
        <label>Escolha um horário:</label>
        <input
          type="time"
          value={horarioSelecionado}
          onChange={(e) => setHorarioSelecionado(e.target.value)}
        />
      </div>

      <p className="legenda">
        <span className="legenda-item livre-box"></span> Livre
        <span className="legenda-item selecionada-box"></span> Selecionada
        <span className="legenda-item reservada-box"></span> Reservada
      </p>

      <div className="mesas-grid">
        {mesas.map((mesa) => (
          <div key={mesa.id} className="mesa-card">
            <button
              className={`mesa ${
                mesa.status === "livre" ? "livre" : "reservada"
              } ${mesaSelecionada === mesa.id ? "selecionada" : ""}`}
              onClick={() => selecionarMesa(mesa)}
            >
              Mesa {mesa.id}
            </button>

            <p><strong>Status:</strong> {mesa.status}</p>

            {mesa.horario && (
              <p><strong>Horário:</strong> {mesa.horario}</p>
            )}

            {isAdmin && mesa.reservadoPor && (
              <p><strong>Cliente:</strong> {mesa.reservadoPor}</p>
            )}

            {isAdmin && mesa.status === "reservada" && (
              <button
                className="btn-liberar"
                onClick={() => liberarMesa(mesa.id)}
              >
                Liberar mesa
              </button>
            )}
          </div>
        ))}
      </div>

      <button className="btn-confirmar" onClick={confirmarReserva}>
        Confirmar reserva
      </button>
    </div>
  );
}

export default Mesas;