import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home } from "./Home";
import { Noo } from "./Noo";
import { Nooo } from "./Nooo";
import { Noooo } from "./Noooo";
import { Yes } from "./Yes";
import { useEffect, useState } from "react";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
console.log(windowWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
    {windowWidth>800?
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/no1"} element={<Noo />} />
        <Route path={"/no2"} element={<Nooo />} />
        <Route path={"/no3"} element={<Noooo />} />
        <Route path={"/yes"} element={<Yes />} />
      </Routes>
    </Router>
    
  :<div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'30px'}}>
    <h1>Tere ko bola na stystem mai on kar 😡😡</h1></div>}
    </>
  );
}

export default App;
