import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Main from "./componentes/Main";
import NavBar from "./componentes/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Main/>
      </BrowserRouter>
    </>
  );
}

export default App;