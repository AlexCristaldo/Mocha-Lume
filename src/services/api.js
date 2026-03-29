const API_URL = "http://localhost:3001";

/* USERS */
export async function createUser(email, password) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro ao cadastrar usuário");
  }

  return data;
}

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
}

export async function loginUser(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro no login");
  }

  return data;
}

/* MESAS */
export async function getMesas() {
  const response = await fetch(`${API_URL}/mesas`);
  return response.json();
}

export async function reservarMesa(id, email, horario, isAdmin) {
  const response = await fetch(`${API_URL}/mesas/${id}/reservar`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      horario,
      isAdmin
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro ao reservar mesa");
  }

  return data;
}

export async function liberarMesaApi(id, isAdmin) {
  const response = await fetch(`${API_URL}/mesas/${id}/liberar`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      isAdmin
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro ao liberar mesa");
  }

  return data;
}