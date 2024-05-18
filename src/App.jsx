import { Home } from "./components";
import { CharacterDetailCard } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CharacterDetailCard />} />
      </Routes>
    </>
  );
}

export default App;
