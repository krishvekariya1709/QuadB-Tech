import "./App.css";
import Card from "./Component/Card";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Card key={"home"} query={"home"} />}></Route>
          <Route exact path="/StartingAll" element={<Card key={"StartingAll"} query={"all"} />}></Route>
          <Route exact path="/Girl" element={<Card key={"Girl"} query={"Girl"} />}></Route>
          <Route exact path="/Boys" element={<Card key={"Boys"} query={"Boysgit init"} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
