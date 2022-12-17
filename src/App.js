import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register";
import Home from "./pages/Home/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
