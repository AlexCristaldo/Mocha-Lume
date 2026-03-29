import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./components/Register";
import Mesas from "./pages/mesas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mesas" element={<Mesas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;