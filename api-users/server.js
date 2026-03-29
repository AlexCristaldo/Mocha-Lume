const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [
  {
    id: 1,
    email: "adm@adm.com",
    password: "adm"
  }
];

let mesas = [
  { id: 1, status: "livre", reservadoPor: null, horario: null },
  { id: 2, status: "reservada", reservadoPor: "joao@email.com", horario: "19:00" },
  { id: 3, status: "livre", reservadoPor: null, horario: null },
  { id: 4, status: "reservada", reservadoPor: "maria@email.com", horario: "20:00" },
  { id: 5, status: "livre", reservadoPor: null, horario: null },
  { id: 6, status: "livre", reservadoPor: null, horario: null }
];

/* ========================= */
/* USERS */
/* ========================= */

app.post("/users", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email e senha são obrigatórios"
    });
  }

  const userExists = users.find((u) => u.email === email);

  if (userExists) {
    return res.status(400).json({
      message: "Esse email já está cadastrado"
    });
  }

  const user = {
    id: users.length + 1,
    email,
    password
  };

  users.push(user);

  res.status(201).json({
    message: "Usuário criado com sucesso",
    user
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Login inválido"
    });
  }

  res.json({
    message: "Login realizado com sucesso",
    user
  });
});

/* ========================= */
/* MESAS */
/* ========================= */

app.get("/mesas", (req, res) => {
  res.json(mesas);
});

app.put("/mesas/:id/reservar", (req, res) => {
  const id = Number(req.params.id);
  const { email, horario, isAdmin } = req.body;

  const mesa = mesas.find((m) => m.id === id);

  if (!mesa) {
    return res.status(404).json({
      message: "Mesa não encontrada"
    });
  }

  if (mesa.status === "reservada" && !isAdmin) {
    return res.status(400).json({
      message: "Essa mesa já está reservada"
    });
  }

  if (!email || !horario) {
    return res.status(400).json({
      message: "Email e horário são obrigatórios"
    });
  }

  mesa.status = "reservada";
  mesa.reservadoPor = email;
  mesa.horario = horario;

  res.json({
    message: "Mesa reservada com sucesso",
    mesa
  });
});

app.put("/mesas/:id/liberar", (req, res) => {
  const id = Number(req.params.id);
  const { isAdmin } = req.body;

  if (!isAdmin) {
    return res.status(403).json({
      message: "Apenas o administrador pode liberar mesas"
    });
  }

  const mesa = mesas.find((m) => m.id === id);

  if (!mesa) {
    return res.status(404).json({
      message: "Mesa não encontrada"
    });
  }

  mesa.status = "livre";
  mesa.reservadoPor = null;
  mesa.horario = null;

  res.json({
    message: "Mesa liberada com sucesso",
    mesa
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});