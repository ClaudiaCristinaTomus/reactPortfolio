import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const[menuOpen, setMenuOpen]=useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div className="sections">
        <Intro/>
        <Portofolio/>

      </div>
    </div>
  );
}

export default App;
