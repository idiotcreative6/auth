import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/auth/Register";
import Home from "./pages/Home/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/Forgot"
import Reset from "./pages/auth/Reset"
import LoginWithCode from "./pages/auth/LoginWithCode";
import Profile from "./pages/profile/Profile";
import Verify from "./pages/auth/Verify";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/resetPassword/:resetToken" element={<Reset />} />
          <Route path="/loginwithcode/:email" element={<LoginWithCode />} />
          <Route path="/verify/:verificationtoken" element={<Layout><Verify /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
