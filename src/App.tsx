import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Messages } from "./pages/Messages";
import { UserContext } from "./context/User";
import Authguard from "./components/AuthGuard";

function App() {

  return (
    <main className="min-h-100vh">
      <UserContext>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authguard />}>
                <Route path="/messages" element={<Messages />} />
            </Route>
        </Routes>
      </UserContext>
      <Footer />
    </main>
  )
}

export default App;
