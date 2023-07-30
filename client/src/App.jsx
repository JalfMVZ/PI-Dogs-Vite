import "./App.css";
import { Home, DogDetail, FormCre, Landing } from "./Views";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dogs" element={< FormCre />} />
        <Route path="/detail/:id" element={<DogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
