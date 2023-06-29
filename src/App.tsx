import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./components/Profile";

function App() {

  return (
    <main className="min-h-100vh">
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

      </Routes>
      <Footer />
    </main>
  )
}

export default App;
