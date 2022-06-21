import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Wait from "./component/wait/Wait";
import Main from "./component/main/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wait/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;