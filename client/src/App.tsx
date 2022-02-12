import { Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/navbar";
import Home from "./components/home";
import CreateThread from "./components/createThread";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<CreateThread />} />
      </Routes>
    </div>
  );
}

export default App;
