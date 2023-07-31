import "./App.css";
import Nav from './components/NavBar/Nav'
import { Home, DogDetail, FormCre, Landing } from "./Views";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== '/' && <Nav/>}
      <Routes>
        <Route exact path="/"  element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dogs" element={< FormCre />} />
        <Route path="/detail/:id" element={<DogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
