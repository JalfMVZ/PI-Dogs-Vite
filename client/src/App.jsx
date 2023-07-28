import "./App.css";
import { Home, DogDetail, Form, Landing } from "./Views";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dogs" element={<Form />} />
        <Route path="/detail/:id" element={<DogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
