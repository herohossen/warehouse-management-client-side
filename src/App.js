import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componants/Header";
import Home from "./componants/pages/Home";
import NotFound from "./componants/pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Route path="*" element={<NotFound />}></Route>
    </div>
  );
}

export default App;
