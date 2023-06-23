import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./context/Nav";

function App() {

  return (
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

      </Routes>

    </>
  )
}

export default App;
