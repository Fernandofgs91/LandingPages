import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Main from "./componentes/Main";
import NavBar from "./componentes/NavBar/NavBar";
import Wpp from "./componentes/Wpp/Wpp";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Main/>
       
      <Wpp />
      </BrowserRouter>
    </>
  );
}

export default App;