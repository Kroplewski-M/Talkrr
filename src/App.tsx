import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

function App() {

  return (
    <main className="min-h-100vh">
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

      </Routes>
      
      <Footer />
    </main>
  )
}

export default App;
