# Mocha & Lume

Aplicação web para uma cafeteria com landing page e sistema de reserva de mesas.

## Descrição

O projeto consiste em uma interface desenvolvida em React com uma API simples em Node.js para gerenciamento de usuários e reservas. Permite cadastro, autenticação e seleção de mesas com controle de disponibilidade.

## Tecnologias

* React (Vite)
* Node.js
* Express
* JavaScript
* CSS

## Funcionalidades

* Página inicial com apresentação da cafeteria
* Cadastro de usuários
* Login
* Reserva de mesas com horário
* Controle de disponibilidade das mesas
* Permissão de administrador para liberação de mesas
* Interface responsiva

## Execução do projeto

### Frontend

```bash
npm install
npm run dev
```

Aplicação disponível em:

```text
http://localhost:5173
```

### Backend

```bash
cd api-users
npm install
node server.js
```

API disponível em:

```text
http://localhost:3001
```

## Usuário administrador

```text
Email: adm@adm.com
Senha: 123456
```

## Estrutura

```text
src/
  components/
  pages/
  services/
  App.jsx
  App.css

api-users/
  server.js
```

## Observações

As reservas são armazenadas em memória no servidor. Ao reiniciar o backend, os dados são resetados.

## Autor

Alex Junior
